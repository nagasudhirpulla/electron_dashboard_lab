import { IWidgetConfig } from "../../../type_defs/dashboard/IWidgetConfig";
import { IScatterPlotSeriesConfig } from "./IScatterPlotSeriesConfig";
import { Color } from "plotly.js";
export interface IScatterPlotWidgetConfig extends IWidgetConfig {
    seriesConfigs: IScatterPlotSeriesConfig[];
    customConfig: {
        showGrid: boolean;
        titleColor: Color;
        backgroundColor: Color;
    }
}