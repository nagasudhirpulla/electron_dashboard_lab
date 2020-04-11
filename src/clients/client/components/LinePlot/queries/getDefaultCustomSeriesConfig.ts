import { ILinePlotSeriesConfig } from "../type_defs/ILinePlotSeriesConfig";
import { YAxisSide } from "../type_defs/YAxisSide";
import { PlotlyRenderStrategy } from "../type_defs/PlotlyRenderStrategy";
import { TslpSeriesStyle } from "../type_defs/TslpSeriesStyle";
import { TimePeriod } from "../../../../../Time/TimePeriod";

export const getDefaultCustomSeriesConfig = (): ILinePlotSeriesConfig["customConfig"] => {
    return {
        yAxisIndex: 1,
        yAxisSide: YAxisSide.left,
        yAxisOffset: 0,
        color: null,
        renderStrategy: PlotlyRenderStrategy.scatter,
        seriesStyle: TslpSeriesStyle.line,
        size: 1,
        displayTimeShift: new TimePeriod()
    }
}