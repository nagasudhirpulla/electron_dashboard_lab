import { ITimePeriod } from "../../../../Time/type_defs/ITimePeriod";
import { ILayout } from "../gridLayout/ILayout";
import { IWidgetProps } from "./IWidgetProps";

export interface IDashboardState {
    gridConfig: {
        rowHeight: number
        onLayoutChange: (currLayout: ILayout, allLayouts: any) => {}
        cols: { lg: number, md: number, sm: number, xs: number, xxs: number }
        initialLayout: ILayout
        backgroundColor: string
    }
    className: string
    timerSettings: {
        timerOn: boolean
        timerPeriodicity: ITimePeriod
    }
    widgetProps: IWidgetProps[]
}