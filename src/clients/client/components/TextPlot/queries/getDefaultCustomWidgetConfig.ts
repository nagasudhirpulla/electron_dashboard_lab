import { ITextPlotWidgetConfig } from "../type_defs/ITextPlotWidgetConfig"

export const getDefaultCustomWidgetConfig = (): ITextPlotWidgetConfig["customConfig"] => {
    return {
        backgroundColor: null,
        seriesSeparator: '<br/>'
    }
}