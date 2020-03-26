import { ITimeSeriesFetcher } from "../type_defs/ITimeSeriesFetcher";
import { IFetcherOptions } from "../type_defs/IFetcherOptions";
import { VarTime } from "../../Time/VarTime";
import { IMeasurement } from "../../measurements/type_defs/IMeasurement";
import { DummyMeasurement } from "../../measurements/DummyMeasurement";
import { DummyTimeSeriesFetcher } from "./DummyTimeSeriesFetcher";
import { IDummyMeasurement } from "../../measurements/type_defs/IDummyMeasurement";

export class TimeSeriesFetcher implements ITimeSeriesFetcher {
    dummyFetcher: DummyTimeSeriesFetcher = new DummyTimeSeriesFetcher();
    async fetchData(fromVarTime: VarTime, toVarTime: VarTime, meas: IMeasurement, options?: IFetcherOptions): Promise<number[]> {
        // Initialize results
        let resultData: number[] = [];

        if (meas.discriminator == DummyMeasurement.typename) {
            resultData = await this.dummyFetcher.fetchData(fromVarTime, toVarTime, meas as IDummyMeasurement, options)
        }
        
        return resultData;
    }
}
