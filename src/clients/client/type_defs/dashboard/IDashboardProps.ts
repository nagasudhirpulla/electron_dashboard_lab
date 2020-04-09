import { ITimePeriod } from "../../../../Time/type_defs/ITimePeriod";
import { IWidgetProps } from "./IWidgetProps";

export interface IDashboardProps {
    gridConfig: {
        rowHeight: number
        cols: {
            lg: number
            md: number
            sm: number
            xs: number
            xxs: number
        }
        breakpoints: {
            lg?: number
            md?: number
            sm?: number
            xs?: number
            xxs?: number
        }
        backgroundColor: string
    }
    className: string
    timerSettings: {
        timerOn: boolean
        timerPeriodicity: ITimePeriod
    }
    widgetProps: IWidgetProps[]
}
