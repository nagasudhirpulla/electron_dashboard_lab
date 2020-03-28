import { ISeriesConfig } from "../../../type_defs/dashboard/ISeriesConfig";
import { YAxisSide } from "./YAxisSide";
import { Color } from "plotly.js";
export interface ILinePlotSeriesConfig extends ISeriesConfig {
    customConfig: {
        yAxisIndex: number
        yAxisSide: YAxisSide
        yAxisOffset: number
        color: Color
    }
}