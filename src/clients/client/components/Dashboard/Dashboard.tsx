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

const ResponsiveReactGridLayout = WidthProvider(Responsive);
export const Dashboard: React.FC<Partial<IDashboardProps>> = (props?: IDashboardProps) => {
    const dashInitState: IDashboardState = { ...getDefaultDashboardState(), ...props, mounted: false }
    let [dashState, dashStateDispatch] = useDashboardReducer(dashInitState)

    const onLayoutChange = (currLayout: Layout[], allLayouts: Layouts): void => {
        // TODO move this to reducer action
        // get the layouts breakpoints
        const laytBrPnts = Object.keys(allLayouts);
        const widgetProps = dashState.widgetProps;
        for (let brPntIter = 0; brPntIter < laytBrPnts.length; brPntIter++) {
            const laytBrPnt = laytBrPnts[brPntIter]
            const layout = allLayouts[laytBrPnt];
            for (let layInd = 0; (layInd < layout.length) && (layInd < dashState.widgetProps.length); layInd++) {
                // we assume that the order is preserved (todo be sure)
                widgetProps[layInd].layouts[laytBrPnt] = layout[layInd]
            }
        }
        dashStateDispatch(setDashboardStateAction({ ...dashState, widgetProps: widgetProps }))
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
            // TODO complete this
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
            // TODO complete this
        }
    }

    const deriveLayouts = (): Layouts => {
        let layouts: Layouts = {}
        dashState.widgetProps.forEach((wp, wpIndex) => {
            // get breakpoint key of widget layoutsDict
            const brPntKeys = Object.keys(wp.layouts);
            for (let brPntKeyIter = 0; brPntKeyIter < brPntKeys.length; brPntKeyIter++) {
                const brPntKey = brPntKeys[brPntKeyIter]
                if (wpIndex == 0) {
                    // ensure key is present in final layouts
                    layouts[brPntKey] = []
                }
                // push the layout item in the layouts dictionary
                layouts[brPntKey].push(wp.layouts[brPntKey])
            }
        })
        return layouts
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
            layouts={deriveLayouts()}
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