import { VarTime } from "../../../../Time/VarTime";
import { IMeasurement } from "../../../../measurements/type_defs/IMeasurement";
import { IFetcherOptions } from "./IFetcherOptions";

/**
 * fetcher will fetch data in the format [ts1, val1, ts2, val2, ...]
 * includeQuality is true, then output will be in the format of [ts1, val1, qual1, ts2, val2, qual2, ...]
 */
export interface ITimeSeriesFetcher {
    fetchData(fromVarTime: VarTime, toVarTime: VarTime, meas: IMeasurement, options?: IFetcherOptions): Promise<number[]>;
}