import { IMeasurement } from "../../../../measurements/type_defs/IMeasurement";
import { VarTime } from "../../../../Time/VarTime";

export interface ISeriesConfig {
    title: string
    measurements: IMeasurement[]
    startTime: VarTime
    endTime: VarTime
    vizType: string
    customConfig: any
}
