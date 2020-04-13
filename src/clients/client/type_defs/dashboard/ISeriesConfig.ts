import { IMeasurement } from "../../../../measurements/type_defs/IMeasurement";
import { IVarTime } from "../../../../Time/type_defs/IVarTime";
import { ITimePeriod } from "../../../../Time/type_defs/ITimePeriod";

export interface ISeriesConfig {
    title: string
    measurements: IMeasurement[]
    startTime: IVarTime
    endTime: IVarTime
    fetchWindow: ITimePeriod
    vizType: string
    customConfig: any
}
