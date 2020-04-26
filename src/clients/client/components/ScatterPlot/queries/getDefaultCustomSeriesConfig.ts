import { IScatterPlotSeriesConfig } from "../type_defs/IScatterPlotSeriesConfig";
import { YAxisSide } from "../../LinePlot/type_defs/YAxisSide";
import { PlotlyRenderStrategy } from "../../LinePlot/type_defs/PlotlyRenderStrategy";
import { TsspSeriesStyle } from "../type_defs/TsspSeriesStyle";

export const getDefaultCustomSeriesConfig = (): IScatterPlotSeriesConfig["customConfig"] => {
    return {
        yAxisIndex: 1,
        yAxisSide: YAxisSide.left,
        yAxisOffset: 0,
        color: null,
        renderStrategy: PlotlyRenderStrategy.scatter,
        seriesStyle: TsspSeriesStyle.line,
        lineMode: 'lines',
        lineDash: 'solid',
        lineShape: 'linear',
        size: 2,
        markerColor: null,
        markerSize: 2
    }
}