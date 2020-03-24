import { ISeriesConfig } from "./ISeriesConfig";
export interface IWidgetConfig {
    discriminator: string;
    border: string;
    seriesConfigs: ISeriesConfig[];
    customConfig: any;
}
