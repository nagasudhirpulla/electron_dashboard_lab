import { ITimePeriod } from "../../../../../Time/type_defs/ITimePeriod";
import { IWidgetProps } from "../../../type_defs/dashboard/IWidgetProps";
import { CoreProps } from 'react-grid-layout';
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
    timerSettings: {
        timerOn: boolean
        timerPeriodicity: ITimePeriod
    }
    widgetProps: IWidgetProps[]
    showDashSettingsModal: boolean
    showWidgetAddModal: boolean
    measTypes: { name: string, val: string }[]
    setShowDashSettingsModal: (v: boolean) => void
    setShowWidgetAddModal: (v: boolean) => void
    onExportWidget: (wInd: number) => void
    onRefreshWidget: (wInd: number) => void
    onRefreshAllWidgets: () => void
}