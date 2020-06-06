import { IWidgetConfig } from "../../../type_defs/dashboard/IWidgetConfig";
import { ITextPlotSeriesConfig } from "./ITextPlotSeriesConfig";
import { Color } from "plotly.js";
export interface ITextPlotWidgetConfig extends IWidgetConfig {
    seriesConfigs: ITextPlotSeriesConfig[]
    customConfig: {
        backgroundColor: Color
        seriesSeparator: string
    };
}