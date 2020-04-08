import { IMeasurement } from "../../../../measurements/type_defs/IMeasurement";
import { IVarTime } from "../../../../Time/type_defs/IVarTime";

export interface ISeriesConfig {
    title: string
    measurements: IMeasurement[]
    startTime: IVarTime
    endTime: IVarTime
    vizType: string
    customConfig: any
}
