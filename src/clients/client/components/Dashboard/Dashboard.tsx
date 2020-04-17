import React, { useContext, useState } from 'react'
import { IDashboardProps } from './type_defs/IDashboardProps';
import { getDashboardStyle } from './queries/getDashboardStyle';
import { useDashboardReducer } from './reducers/dashboardReducer';
import { IDashboardState } from './type_defs/IDashboardState';
import { setDashboardStateAction } from './actions/SetDashboardStateAction';
import { Responsive, WidthProvider, Layout, Layouts } from "react-grid-layout";
import { IWidgetProps } from '../../type_defs/dashboard/IWidgetProps';
import { vizPluginsRepoContext } from '../../client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCopy, faDownload, faSyncAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { layoutChangeAction } from './actions/LayoutChangeAction';
import { deriveLayouts } from './queries/deriveLayouts';
import { duplicateWidgetAction } from './actions/DuplicateWidgetAction';
import { deleteWidgetAction } from './actions/DeleteWidgetAction';
import { WidgetEditorModal } from '../WidgetEditor/WidgetEditorModal';
import { IWidgetConfig } from '../../type_defs/dashboard/IWidgetConfig';
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/dashboard.css";
import "./css/rgl_styles.css";
import { DashboardSettingsEditorModal } from '../DashboardSettingsEditor/DashboardSettingsEditorModal';
import { IDashboardSettings } from '../DashboardSettingsEditor/type_defs/IDashboardSettings';
import { setDashboardSettingsAction } from './actions/SetDashboardSettingsAction';
import { WidgetAddModal } from '../WidgetAddModal/WidgetAddModal';
import { addWidgetAction } from './actions/AddWidgetAction';
import { TimePeriod } from '../../../../Time/TimePeriod';
import { getDashboardStateFromProps } from './queries/getDashboardStateFromProps';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
export const Dashboard: React.FC<Partial<IDashboardProps>> = (props: IDashboardProps) => {
    const dashInitState: IDashboardState = { ...getDashboardStateFromProps(props) }
    const [dashState, dashStateDispatch] = useDashboardReducer(dashInitState)
    const [showEditWidgetModal, setShowEditWidgetModal] = useState(false)
    const [activeWidgetIndex, setActiveWidgetIndex] = useState(0)
    const [timerId, setTimerId] = useState(null)
    const vizPluginNames: string[] = useContext(vizPluginsRepoContext).getInstalledPluginNames()

    const onLayoutChange = (currLayout: Layout[], allLayouts: Layouts): void => {
        dashStateDispatch(layoutChangeAction(currLayout, allLayouts))
    }

    const onAddWidgetSubmit = (vizType: string) => {
        dashStateDispatch(addWidgetAction(vizType))
    }

    const onBreakpointChange = (newBreakpoint: string, newCols: number) => {
        dashStateDispatch(setDashboardStateAction({ ...dashState, currentBreakpoint: newBreakpoint as IDashboardState["currentBreakpoint"] }))
    }

    const onEditWidget = (wInd: number): ((ev: React.MouseEvent<HTMLButtonElement>) => void) => {
        return (ev: React.MouseEvent<HTMLButtonElement>): void => {
            setActiveWidgetIndex(wInd)
            setShowEditWidgetModal(true)
        }
    }

    const onEditWidgetSubmit = (wc: IWidgetConfig): void => {
        dashStateDispatch(setDashboardStateAction({
            ...dashState, widgetProps: [
                ...dashState.widgetProps.slice(0, activeWidgetIndex),
                { ...dashState.widgetProps[activeWidgetIndex], config: wc },
                ...dashState.widgetProps.slice(activeWidgetIndex + 1),
            ]
        }))
    }

    const onDashSettingsSubmit = (s: IDashboardSettings): void => {
        dashStateDispatch(setDashboardSettingsAction(s))
    }

    const onDuplicateWidget = (wInd: number): ((ev: React.MouseEvent<HTMLButtonElement>) => void) => {
        return (ev: React.MouseEvent<HTMLButtonElement>): void => {
            dashStateDispatch(duplicateWidgetAction(wInd))
        }
    }

    const onExportWidget = (wInd: number): ((ev: React.MouseEvent<HTMLButtonElement>) => void) => {
        return (ev: React.MouseEvent<HTMLButtonElement>): void => {
            props.onExportWidget(wInd)
        }
    }

    const onRefreshWidget = (wInd: number): ((ev: React.MouseEvent<HTMLButtonElement>) => void) => {
        return (ev: React.MouseEvent<HTMLButtonElement>): void => {
            props.onRefreshWidget((wInd))
        }
    }

    const onRemoveWidget = (wInd: number): ((ev: React.MouseEvent<HTMLButtonElement>) => void) => {
        return (ev: React.MouseEvent<HTMLButtonElement>): void => {
            if (confirm('Delete this widget?')) {
                dashStateDispatch(deleteWidgetAction(wInd))
            }
        }
    }

    // check if we have to stop the timer
    if (dashState.timer.isOn == true && dashState.timerSettings.timerOn == false) {
        dashStateDispatch(setDashboardStateAction({
            ...dashState,
            timer: {
                ...dashState.timer,
                isOn: false,
                busy: false
            }
        }))
        window.clearInterval(timerId);
    }

    // check if we have to start the timer
    if (dashState.timer.isOn == false && dashState.timerSettings.timerOn == true) {
        const timerPeriod = 1000 * TimePeriod.getSeconds(dashState.timerSettings.timerPeriodicity);
        if (timerPeriod > 0) {
            // set timer as ON
            dashStateDispatch(setDashboardStateAction({
                ...dashState,
                timer: {
                    ...dashState.timer,
                    isOn: true
                }
            }))

            const newTimerId = window.setInterval(async () => {
                if (dashState.timer.busy == true) {
                    return
                }
                else {
                    props.onRefreshAllWidgets()
                }
            }, timerPeriod)

            setTimerId(newTimerId)

            props.onRefreshAllWidgets()
        }
    }

    const divStyle = {
        backgroundColor: dashState.gridConfig.backgroundColor
    }

    const generateDOM = (): JSX.Element[] => {
        return dashState.widgetProps.map((wp: IWidgetProps, wInd) => {
            let l: Layout = wp.layouts[dashState.currentBreakpoint];
            const contentStyle: React.CSSProperties = { borderStyle: wp.config.border.style, borderColor: wp.config.border.color, borderWidth: wp.config.border.size }
            let VizComp: React.FC<IWidgetProps> = useContext(vizPluginsRepoContext).getComp(wp.config.vizType)
            return (
                <div key={l.i} className={l.static ? "static" : ""}>
                    <div className="dragHandle">
                        <div style={{ textAlign: 'center' }}>{" "}</div>
                        <span
                            className="editItemBtn"
                            onClick={onEditWidget(wInd)}
                        ><FontAwesomeIcon icon={faPen} color='coral' size='xs' /></span>
                        <span
                            className="copyWidBtn"
                            onClick={onDuplicateWidget(wInd)}
                        ><FontAwesomeIcon icon={faCopy} color='white' size='xs' /></span>
                        <span
                            className="exportBtn"
                            onClick={onExportWidget(wInd)}
                        ><FontAwesomeIcon icon={faDownload} color='#4CAF50' size='xs' /></span>
                        <span
                            className="refreshBtn"
                            onClick={onRefreshWidget(wInd)}
                        ><FontAwesomeIcon icon={faSyncAlt} color='gold' size='xs' /></span>
                        <span
                            className="removeBtn"
                            onClick={onRemoveWidget(wInd)}
                        ><FontAwesomeIcon icon={faTimesCircle} color='red' size='xs' /></span>
                    </div>
                    <div className="cellContent" key={l.i + '_timeseries'} style={contentStyle}>
                        <VizComp {...wp}></VizComp>
                    </div>
                </div>
            );
        });
    }

    return <>
        <div style={getDashboardStyle(dashState)}>
            <ResponsiveReactGridLayout
                breakpoints={dashState.gridConfig.breakpoints}
                cols={dashState.gridConfig.cols}
                rowHeight={dashState.gridConfig.rowHeight}
                layouts={deriveLayouts(dashState.widgetProps.map(wp => wp.layouts))}
                onBreakpointChange={onBreakpointChange}
                onLayoutChange={onLayoutChange}
                // WidthProvider option
                measureBeforeMount={false}
                // Animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
                // and set `measureBeforeMount={true}`.
                useCSSTransforms={dashState.mounted}
                compactType={dashState.gridConfig.compactType}
                preventCollision={!dashState.gridConfig.compactType}
                draggableHandle='.dragHandle'
                style={divStyle}
            >
                {generateDOM()}
            </ResponsiveReactGridLayout>

        </div>
        <WidgetEditorModal
            show={showEditWidgetModal}
            setShow={setShowEditWidgetModal}
            value={dashState.widgetProps[activeWidgetIndex] == undefined ? null : dashState.widgetProps[activeWidgetIndex].config}
            measTypes={props.measTypes}
            onSubmit={onEditWidgetSubmit}
        />
        <DashboardSettingsEditorModal
            show={props.showDashSettingsModal}
            setShow={props.setShowDashSettingsModal}
            value={{ backgroundColor: dashState.gridConfig.backgroundColor, timerSettings: dashState.timerSettings }}
            onSubmit={onDashSettingsSubmit}
        />
        <WidgetAddModal
            show={props.showWidgetAddModal}
            setShow={props.setShowWidgetAddModal}
            value={vizPluginNames}
            onSubmit={onAddWidgetSubmit}
        />
    </>
}