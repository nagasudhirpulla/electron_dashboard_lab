export interface IWidgetsData {
    // widget data key is the series index, hence to retrieve a series data, access it by its key
    [key: number]: number[];
}
