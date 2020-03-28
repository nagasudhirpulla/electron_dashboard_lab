import { ISeriesConfig } from "../../../type_defs/dashboard/ISeriesConfig";
import { YAxisSide } from "./YAxisSide";
import { Color } from "plotly.js";
import { PlotlyRenderStrategy } from "./PlotlyRenderStrategy";
import { TslpSeriesStyle } from "./TslpSeriesStyle";
import { ITimePeriod } from "../../../../../Time/type_defs/ITimePeriod";
export interface ILinePlotSeriesConfig extends ISeriesConfig {
    customConfig: {
        yAxisIndex: number
        yAxisSide: YAxisSide
        yAxisOffset: number
        color: Color
        renderStrategy: PlotlyRenderStrategy,
        seriesStyle: TslpSeriesStyle,
        size: number,
        displayTimeShift: ITimePeriod
    }
}