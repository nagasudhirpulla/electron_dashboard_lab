import { ITimePeriod } from "../../../../../Time/type_defs/ITimePeriod";
import { IWidgetProps } from "../../../type_defs/dashboard/IWidgetProps";
import {CoreProps} from 'react-grid-layout';
export interface IElectronDashboardProps {
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
}
