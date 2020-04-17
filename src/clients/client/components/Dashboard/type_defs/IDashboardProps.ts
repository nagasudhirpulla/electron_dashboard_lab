import { IWidgetProps } from "../../../type_defs/dashboard/IWidgetProps";
import { CoreProps, Layouts, Layout } from 'react-grid-layout';
export interface IDashboardProps {
    gridConfig: {
        rowHeight: number
        cols: {
            lg: number
            md: number
            sm: number
        }
        breakpoints: {
            lg?: number
            md?: number
            sm?: number
        }
        backgroundColor: string
        compactType: CoreProps["compactType"]
    }
    className: string
    widgetProps: IWidgetProps[]
    onEditWidget: (wInd: number) => void
    onDuplicateWidget: (wInd: number) => void
    onExportWidget: (wInd: number) => void
    onRefreshWidget: (wInd: number) => void
    onRemoveWidget: (wInd: number) => void
    onLayoutChange: (currentLayout: Layout[], allLayouts: Layouts) => void
    onBreakpointChange: (newBreakpoint: string, newCols: number) => void
    getComp: (vizType: string) => React.FC<IWidgetProps>
    currentBreakpoint: string
}