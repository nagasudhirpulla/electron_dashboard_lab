import { IScatterPlotWidgetConfig } from "../type_defs/IScatterPlotWidgetConfig"

export const getDefaultCustomWidgetConfig = (): IScatterPlotWidgetConfig["customConfig"] => {
    return {
        showGrid: true,
        titleColor: null,
        backgroundColor: null
    }
}

