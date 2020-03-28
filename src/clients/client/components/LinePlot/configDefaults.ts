import { ILinePlotWidgetConfig } from "./type_defs/ILinePlotWidgetConfig"
import { ILinePlotSeriesConfig } from "./type_defs/ILinePlotSeriesConfig"
import { YAxisSide } from "./type_defs/YAxisSide"

export const defLinePlotWidgetCustomConfig: ILinePlotWidgetConfig["customConfig"] = {
    showGrid: null,
    titleColor: null,
    backgroundColor: null
}

export const defLinePlotSeriesCustomConfig: ILinePlotSeriesConfig["customConfig"] = {
    yAxisIndex: 0,
    yAxisSide: YAxisSide.left,
    yAxisOffset: 0,
    color: null
}