import { IWidgetConfig } from "../../../type_defs/dashboard/IWidgetConfig";
import { ILinePlotSeriesConfig } from "./ILinePlotSeriesConfig";
import { Color } from "plotly.js";
import { SeriesStackMode } from "./SeriesStackMode";
export interface ILinePlotWidgetConfig extends IWidgetConfig {
    seriesConfigs: ILinePlotSeriesConfig[]
    customConfig: {
        showGrid: boolean,
        titleColor: Color,
        backgroundColor: Color,
        seriesStackMode: SeriesStackMode
    }
}
