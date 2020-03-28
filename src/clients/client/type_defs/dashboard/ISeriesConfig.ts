import { IMeasurement } from "../../../../measurements/type_defs/IMeasurement";

export interface ISeriesConfig {
    title: string
    measurements: IMeasurement[]
    startTime: Date
    endTime: Date
    customConfig: any
}
