import { ITextPlotSeriesConfig } from "../type_defs/ITextPlotSeriesConfig";
import { TextComputationStrategy } from "../type_defs/TextComputationStrategy";

export const getDefaultCustomSeriesConfig = (): ITextPlotSeriesConfig["customConfig"] => {
    return {
        color: null,
        backgroundColor: null,
        size: 1,
        textComputationStrategy: TextComputationStrategy.firstSample,
        prefixText: '',
        suffixText: '',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        decimalPrecision: 2,
        val: '',
        percentile: 0,
        format: 'DD-MM-YYYY HH:mm:ss'
    }
}