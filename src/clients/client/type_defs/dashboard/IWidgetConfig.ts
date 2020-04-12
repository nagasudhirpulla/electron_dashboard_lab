/**
 * discriminator - type of widget, example LinePlot, Scatter Plot etc
 */
import { ISeriesConfig } from "./ISeriesConfig";
import { IBorder } from "./IBorder";
export interface IWidgetConfig {
    vizType: string
    title: string
    border: IBorder
    seriesConfigs: ISeriesConfig[]
    customConfig: any
}
