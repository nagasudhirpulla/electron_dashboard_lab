import { ILinePlotSeriesConfig } from "../type_defs/ILinePlotSeriesConfig";
import { YAxisSide } from "../type_defs/YAxisSide";
import { PlotlyRenderStrategy } from "../type_defs/PlotlyRenderStrategy";
import { TslpSeriesStyle } from "../type_defs/TslpSeriesStyle";
import { TimePeriod } from "../../../../../Time/TimePeriod";

export const getDefaultCustomSeriesConfig = (): ILinePlotSeriesConfig["customConfig"] => {
    //TODO accommodate markers, x and y axis ranges
    return {
        yAxisIndex: 1,
        yAxisSide: YAxisSide.left,
        yAxisOffset: 0,
        color: null,
        renderStrategy: PlotlyRenderStrategy.scatter,
        seriesStyle: TslpSeriesStyle.line,
        lineMode: 'lines',
        lineDash: 'solid',
        lineShape: 'linear',
        size: 2,
        markerColor: null,
        markerSize: 2,
        displayTimeShift: new TimePeriod()
    }
}