import { ISeriesConfig } from "../../../type_defs/dashboard/ISeriesConfig";
import { YAxisSide } from "./YAxisSide";
import { Color, PlotData, ScatterLine, Dash } from "plotly.js";
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
        lineMode: PlotData["mode"],
        lineDash: Dash,
        lineShape: ScatterLine["shape"],
        size: number,
        markerSize: number,
        markerColor: Color,
        displayTimeShift: ITimePeriod
    }
}