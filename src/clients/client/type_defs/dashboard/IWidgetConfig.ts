/**
 * discriminator - type of widget, example LinePlot, Scatter Plot etc
 */
import { ISeriesConfig } from "./ISeriesConfig";
export interface IWidgetConfig {
    discriminator: string
    title:string
    border: string
    seriesConfigs: ISeriesConfig[]
    customConfig: any
}