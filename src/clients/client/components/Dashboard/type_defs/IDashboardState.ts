import { IDashboardProps } from "./IDashboardProps";
import { CoreProps } from "react-grid-layout";
import { ITimePeriod } from "../../../../../Time/type_defs/ITimePeriod";
import { IWidgetProps } from "../../../type_defs/dashboard/IWidgetProps";

export interface IDashboardState {
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
    currentBreakpoint: 'lg' | 'md' | 'sm' | 'xs' | 'xxs'
    timer: {
        isOn: boolean,
        start: number,
        busy: boolean
    },
    mounted: boolean
}