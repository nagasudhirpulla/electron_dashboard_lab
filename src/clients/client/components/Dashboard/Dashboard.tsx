import React, { useContext, useState, useEffect } from 'react'
import { IDashboardProps } from './type_defs/IDashboardProps';
import { getDashboardStyle } from './queries/getDashboardStyle';
import { Responsive, WidthProvider, Layout, Layouts } from "react-grid-layout";
import { IWidgetProps } from '../../type_defs/dashboard/IWidgetProps';
import { vizPluginsRepoContext } from '../../client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCopy, faDownload, faSyncAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { deriveLayouts } from './queries/deriveLayouts';
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/dashboard.css";
import "./css/rgl_styles.css";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
export const Dashboard: React.FC<IDashboardProps> = (props: IDashboardProps) => {
    const [mounted, setMounted] = useState(true)

    useEffect(() => {
        setMounted(true)
    }, []) // Empty array causes this callback to only be created once per component instance

    const onEditWidgetClick = (wInd: number): ((ev: React.MouseEvent<HTMLButtonElement>) => void) => {
        return (ev: React.MouseEvent<HTMLButtonElement>): void => {
            props.onEditWidget(wInd)
        }
    }

    const onDuplicateWidgetClick = (wInd: number): ((ev: React.MouseEvent<HTMLButtonElement>) => void) => {
        return (ev: React.MouseEvent<HTMLButtonElement>): void => {
            props.onDuplicateWidget(wInd)
        }
    }

    const onExportWidgetClick = (wInd: number): ((ev: React.MouseEvent<HTMLButtonElement>) => void) => {
        return (ev: React.MouseEvent<HTMLButtonElement>): void => {
            props.onExportWidget(wInd)
        }
    }

    const onRefreshWidgetClick = (wInd: number): ((ev: React.MouseEvent<HTMLButtonElement>) => void) => {
        return (ev: React.MouseEvent<HTMLButtonElement>): void => {
            props.onRefreshWidget(wInd)
        }
    }

    const onRemoveWidgetClick = (wInd: number): ((ev: React.MouseEvent<HTMLButtonElement>) => void) => {
        return (ev: React.MouseEvent<HTMLButtonElement>): void => {
            props.onRemoveWidget(wInd)
        }
    }

    const divStyle = {
        backgroundColor: props.gridConfig.backgroundColor
    }

    const generateDOM = (): JSX.Element[] => {
        return props.widgetProps.map((wp: IWidgetProps, wInd) => {
            let l: Layout = wp.layouts[props.currentBreakpoint]
            const contentStyle: React.CSSProperties = { borderStyle: wp.config.border.style, borderColor: wp.config.border.color, borderWidth: wp.config.border.size }
            let VizComp: React.FC<IWidgetProps> = useContext(vizPluginsRepoContext).getComp(wp.config.vizType)
            return (
                <div key={l.i} className={l.static ? "static" : ""}>
                    <div className="dragHandle">
                        <div style={{ textAlign: 'center' }}>{" "}</div>
                        <span
                            className="editItemBtn"
                            onClick={onEditWidgetClick(wInd)}
                        ><FontAwesomeIcon icon={faPen} color='coral' size='xs' /></span>
                        <span
                            className="copyWidBtn"
                            onClick={onDuplicateWidgetClick(wInd)}
                        ><FontAwesomeIcon icon={faCopy} color='white' size='xs' /></span>
                        <span
                            className="exportBtn"
                            onClick={onExportWidgetClick(wInd)}
                        ><FontAwesomeIcon icon={faDownload} color='#4CAF50' size='xs' /></span>
                        <span
                            className="refreshBtn"
                            onClick={onRefreshWidgetClick(wInd)}
                        ><FontAwesomeIcon icon={faSyncAlt} color='gold' size='xs' /></span>
                        <span
                            className="removeBtn"
                            onClick={onRemoveWidgetClick(wInd)}
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
        <div style={getDashboardStyle(props)}>
            <ResponsiveReactGridLayout
                breakpoints={props.gridConfig.breakpoints}
                cols={props.gridConfig.cols}
                rowHeight={props.gridConfig.rowHeight}
                layouts={deriveLayouts(props.widgetProps.map(wp => wp.layouts))}
                onBreakpointChange={props.onBreakpointChange}
                onLayoutChange={props.onLayoutChange}
                // WidthProvider option
                measureBeforeMount={false}
                // Animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
                // and set `measureBeforeMount={true}`.
                useCSSTransforms={mounted}
                compactType={props.gridConfig.compactType}
                preventCollision={!props.gridConfig.compactType}
                draggableHandle='.dragHandle'
                style={divStyle}
            >
                {generateDOM()}
            </ResponsiveReactGridLayout>
        </div>
    </>
}