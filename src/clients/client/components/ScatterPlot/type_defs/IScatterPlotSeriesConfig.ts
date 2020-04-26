import { ISeriesConfig } from "../../../type_defs/dashboard/ISeriesConfig";
import { Color, ScatterLine, Dash, PlotData } from "plotly.js";
import { PlotlyRenderStrategy } from "../../LinePlot/type_defs/PlotlyRenderStrategy";
import { YAxisSide } from "../../LinePlot/type_defs/YAxisSide";
import { TsspSeriesStyle } from "./TsspSeriesStyle";
export interface IScatterPlotSeriesConfig extends ISeriesConfig {
    customConfig: {
        yAxisIndex: number;
        yAxisSide: YAxisSide;
        yAxisOffset: number;
        color: Color;
        renderStrategy: PlotlyRenderStrategy;
        seriesStyle: TsspSeriesStyle;
        lineMode: PlotData["mode"];
        lineDash: Dash;
        lineShape: ScatterLine["shape"];
        size: number;
        markerSize: number;
        markerColor: Color;
    };
}
