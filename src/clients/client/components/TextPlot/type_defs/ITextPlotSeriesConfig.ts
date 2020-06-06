import { ISeriesConfig } from "../../../type_defs/dashboard/ISeriesConfig";
import { Color } from "plotly.js";
import { TextComputationStrategy } from "./TextComputationStrategy";
import { FontStyleProperty, FontFamilyProperty } from "csstype";
import { CSSProperties } from "react";
export interface ITextPlotSeriesConfig extends ISeriesConfig {
    customConfig: {
        prefixText: string
        suffixText: string
        color: Color
        backgroundColor: Color
        textComputationStrategy: TextComputationStrategy
        percentile: number
        format: string
        size: number
        fontStyle: FontStyleProperty
        fontWeight: CSSProperties["fontWeight"]
        fontFamily: FontFamilyProperty
        decimalPrecision: number
        val: string
    }
}

