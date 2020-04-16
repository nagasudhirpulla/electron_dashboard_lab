import { ILinePlotWidgetConfig } from "../type_defs/ILinePlotWidgetConfig";
import { TslpSeriesStyle } from "../type_defs/TslpSeriesStyle";
import { SeriesStackMode } from "../type_defs/SeriesStackMode";


export const getDefaultCustomWidgetConfig = (): ILinePlotWidgetConfig["customConfig"] => {
    return {
        showGrid: true,
        titleColor: null,
        backgroundColor: null,
        seriesStackMode: SeriesStackMode.none
    }
}

