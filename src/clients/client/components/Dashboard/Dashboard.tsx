import React, { useContext } from 'react'
import { IDashboardProps } from '../../type_defs/dashboard/IDashboardProps';
import { getDashboardStyle } from './queries/getDashboardStyle';
import { useDashboardReducer } from './reducers/dashboardReducer';
import { getDefaultDashboardState } from './queries/getDefaultDashboardState';
import { IDashboardState } from '../../type_defs/dashboard/IDashboardState';
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
import { faPen, faCopy, faDownload, faSyncAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './dashboard.css';
import './rgl_styles.css';
import { layoutChangeAction } from './actions/LayoutChangeAction';
import { deriveLayouts } from './queries/deriveLayouts';
import { duplicateWidgetAction } from './actions/DuplicateWidgetAction';
import { deleteWidgetAction } from './actions/DeleteWidgetAction';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
export const Dashboard: React.FC<Partial<IDashboardProps>> = (props?: IDashboardProps) => {
    const dashInitState: IDashboardState = { ...getDefaultDashboardState(), ...props, mounted: false }
    let [dashState, dashStateDispatch] = useDashboardReducer(dashInitState)

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
        // TODO complete this
    }

    const onAddWidgetClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        // TODO complete this
    }

    const onRefreshAllWidgetsClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        // TODO complete this
    }

    const onBreakpointChange = (newBreakpoint: string, newCols: number) => {
        dashStateDispatch(setDashboardStateAction({ ...dashState, currentBreakpoint: newBreakpoint as IDashboardState["currentBreakpoint"] }))
    }

    const onEditWidget = (wInd: number): ((ev: React.MouseEvent<HTMLButtonElement>) => void) => {
        return (ev: React.MouseEvent<HTMLButtonElement>): void => {
            // TODO complete this
        }
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
            // TODO complete this
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
        // TODO move this to queries folder
        return dashState.widgetProps.map((wp: IWidgetProps, wInd) => {
            let l: Layout = wp.layouts[dashState.currentBreakpoint];
            const contentStyle: React.CSSProperties = { border: wp.config.border }
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

    return <div style={getDashboardStyle(dashState)}>
        <button onClick={onOpenDashboard}>Open Dashboard</button>
        <button onClick={onSaveDashboard}>Save Dashboard</button>
        <button onClick={onOpenSettingsEditor}>Settings</button>
        <button onClick={onResetLayout}>Reset Layout</button>
        <button onClick={onCompactTypeChange}>
            {dashState.gridConfig.compactType || "No"}{` Compaction`}
        </button>
        <button onClick={onDataAdaptersEditClick}>Data Adapters</button>
        <button onClick={onVizPluginsEditClick}>Visualization Plugins</button>
        <button onClick={onAddWidgetClick}>Add Widget</button>
        <button onClick={onRefreshAllWidgetsClick}>Refresh All</button>
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
}