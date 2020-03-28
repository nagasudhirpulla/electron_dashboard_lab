import { ISeriesData } from "./ISeriesData";

export interface IWidgetData {
    // key is series index
    [key: number]: ISeriesData
}
