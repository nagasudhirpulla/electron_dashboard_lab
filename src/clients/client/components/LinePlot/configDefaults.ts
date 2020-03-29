import { ILinePlotWidgetConfig } from "./type_defs/ILinePlotWidgetConfig"
import { ILinePlotSeriesConfig } from "./type_defs/ILinePlotSeriesConfig"
import { YAxisSide } from "./type_defs/YAxisSide"
import { PlotlyRenderStrategy } from "./type_defs/PlotlyRenderStrategy"
import { TslpSeriesStyle } from "./type_defs/TslpSeriesStyle"
import { TimePeriod } from "../../../../Time/TimePeriod"

export const defLinePlotWidgetCustomConfig: ILinePlotWidgetConfig["customConfig"] = {
    showGrid: null,
    titleColor: null,
    backgroundColor: null
}

export const defLinePlotSeriesCustomConfig: ILinePlotSeriesConfig["customConfig"] = {
    yAxisIndex: 0,
    yAxisSide: YAxisSide.left,
    yAxisOffset: 0,
    color: null,
    renderStrategy: PlotlyRenderStrategy.scatter,
    seriesStyle: TslpSeriesStyle.line,
    size: 2,
    displayTimeShift: new TimePeriod()
}