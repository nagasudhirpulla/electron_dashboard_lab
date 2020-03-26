import { IMeasurement } from "../../../measurements/type_defs/IMeasurement"
import { VarTime } from "../../../Time/VarTime";

export interface ITsDataFetcher {
    fetchData(fromVarTime: VarTime, toVarTime: VarTime, meas: IMeasurement): Promise<number[]>
}