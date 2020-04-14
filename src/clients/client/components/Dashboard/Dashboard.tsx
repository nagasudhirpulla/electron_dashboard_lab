import React, { useContext, useState } from 'react'
import { IDashboardProps } from './type_defs/IDashboardProps';
import { getDashboardStyle } from './queries/getDashboardStyle';
import { useDashboardReducer } from './reducers/dashboardReducer';
import { getDefaultDashboardState } from './queries/getDefaultDashboardState';
import { IDashboardState } from './type_defs/IDashboardState';
import { openDashboardAction } from './actions/OpenDashboardAction';
import { saveDashboardAction } from './actions/SaveDashboardAction';
import { setDashboardStateAction } from './actions/SetDashboardStateAction';
import { toggleCompactionAction } from './actions/ToggleCompactionAction';
import { ipcRenderer } from 'electron';
import { ChannelNames } from '../../../../ipc/ChannelNames';
import { Responsive, WidthProvider, Layout, Layouts } from "react-grid-layout";
import { IWidgetProps } from '../../type_defs/dashboard/IWidgetProps';
import { vizPluginsRepoContext } from '../../client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCopy, faDownload, faSyncAlt, faTimesCircle, faFolderOpen, faSave, faCog, faDatabase, faChartBar, faPlusSquare, faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import './dashboard.css';
import './rgl_styles.css';
import { layoutChangeAction } from './actions/LayoutChangeAction';
import { deriveLayouts } from './queries/deriveLayouts';
import { duplicateWidgetAction } from './actions/DuplicateWidgetAction';
import { deleteWidgetAction } from './actions/DeleteWidgetAction';
import { WidgetEditorModal } from '../WidgetEditor/WidgetEditorModal';
import { IWidgetConfig } from '../../type_defs/dashboard/IWidgetConfig';
import "bootstrap/dist/css/bootstrap.min.css";
import { DashboardSettingsEditorModal } from '../DashboardSettingsEditor/DashboardSettingsEditorModal';
import { IDashboardSettings } from '../DashboardSettingsEditor/type_defs/IDashboardSettings';
import { setDashboardSettingsAction } from './actions/SetDashboardSettingsAction';
import { fetchWidgetDataAction } from './actions/FetchWidgetDataAction';
import { fetchAllWidgetsDataAction } from './actions/FetchAllWidgetsDataAction';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
export const Dashboard: React.FC<Partial<IDashboardProps>> = (props?: IDashboardProps) => {
    const dashInitState: IDashboardState = { ...getDefaultDashboardState(), ...props, mounted: false }
    const [dashState, dashStateDispatch] = useDashboardReducer(dashInitState)
    const [showEditWidgetModal, setShowEditWidgetModal] = useState(false)
    const [activeWidgetIndex, setActiveWidgetIndex] = useState(0)
    const [showDashSettingsModal, setShowDashSettingsModal] = useState(false)

    const onLayoutChange = (currLayout: Layout[], allLayouts: Layouts): void => {
        dashStateDispatch(layoutChangeAction(currLayout, allLayouts))
    }

    const onOpenDashboard = (ev: React.MouseEvent<HTMLButtonElement>) => {
        dashStateDispatch(openDashboardAction())
    }

    const onSaveDashboard = (ev: React.MouseEvent<HTMLButtonElement>) => {
        dashStateDispatch(saveDashboardAction())
    }

    const onResetLayout = (ev: React.MouseEvent<HTMLButtonElement>) => {
        dashStateDispatch(setDashboardStateAction(getDefaultDashboardState()))
    }

    const onCompactTypeChange = (ev: React.MouseEvent<HTMLButtonElement>) => {
        dashStateDispatch(toggleCompactionAction())
    }

    const onDataAdaptersEditClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ipcRenderer.send('' + ChannelNames.openDataAdaptersEditor, 'ping')
    }

    const onVizPluginsEditClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ipcRenderer.send('' + ChannelNames.openVizPluginsEditor, 'ping')
    }

    const onOpenSettingsEditor = (ev: React.MouseEvent<HTMLButtonElement>) => {
        setShowDashSettingsModal(true)
    }

    const onAddWidgetClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        // TODO complete this
    }

    const onRefreshAllWidgetsClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        dashStateDispatch(fetchAllWidgetsDataAction())
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
            // TODO complete this
        }
    }

    const onRefreshWidget = (wInd: number): ((ev: React.MouseEvent<HTMLButtonElement>) => void) => {
        return (ev: React.MouseEvent<HTMLButtonElement>): void => {
            dashStateDispatch(fetchWidgetDataAction(wInd))
        }
    }

    const onRemoveWidget = (wInd: number): ((ev: React.MouseEvent<HTMLButtonElement>) => void) => {
        return (ev: React.MouseEvent<HTMLButtonElement>): void => {
            if (confirm('Delete this widget?')) {
                dashStateDispatch(deleteWidgetAction(wInd))
            }
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
            <div className={"btn-group btn-group-sm"}>
                <button onClick={onOpenDashboard} className={"btn btn-outline-primary"}><FontAwesomeIcon icon={faFolderOpen} /> Open</button>
                <button onClick={onSaveDashboard} className={"btn btn-outline-primary"}><FontAwesomeIcon icon={faSave} /> Save</button>
                <button onClick={onOpenSettingsEditor} className={"btn btn-outline-primary"}><FontAwesomeIcon icon={faCog} /> Settings</button>
                <button onClick={onResetLayout} className={"btn btn-outline-primary"}><FontAwesomeIcon icon={faSyncAlt} /> Reset Layout</button>
                <button onClick={onCompactTypeChange} className={"btn btn-outline-primary"}>
                    {dashState.gridConfig.compactType || "No"}{` Compaction`}
                </button>
                <button onClick={onDataAdaptersEditClick} className={"btn btn-outline-primary"}><FontAwesomeIcon icon={faDatabase} /> Data Adapters</button>
                <button onClick={onVizPluginsEditClick} className={"btn btn-outline-primary"}><FontAwesomeIcon icon={faChartBar} /> Visualization Plugins</button>
                <button onClick={onAddWidgetClick} className={"btn btn-outline-success"}><FontAwesomeIcon icon={faPlusSquare} /> Add Widget</button>
                <button onClick={onRefreshAllWidgetsClick} className={"btn btn-outline-warning"}><FontAwesomeIcon icon={faRedoAlt} /> Refresh All</button>
            </div>
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
            onSubmit={onEditWidgetSubmit}
        />
        <DashboardSettingsEditorModal
            show={showDashSettingsModal}
            setShow={setShowDashSettingsModal}
            value={{ backgroundColor: dashState.gridConfig.backgroundColor, timerSettings: dashState.timerSettings }}
            onSubmit={onDashSettingsSubmit}
        />
    </>
}