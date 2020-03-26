import { ITimeSeriesFetcher } from "../type_defs/ITimeSeriesFetcher";
import { IFetcherOptions } from "../type_defs/IFetcherOptions";
import { VarTime } from "../../Time/VarTime";
import { IDummyMeasurement } from "../../measurements/type_defs/IDummyMeasurement";
import { TimePeriod } from "../../Time/TimePeriod";
import { DataQuality } from "../type_defs/DataQuality";

export class DummyTimeSeriesFetcher implements ITimeSeriesFetcher {
    async fetchData(fromVarTime: VarTime, toVarTime: VarTime, meas: IDummyMeasurement, options?: IFetcherOptions): Promise<number[]> {
        // Initialize results
        let resultData: number[] = []
        let fromTime: Date = VarTime.getDateObj(fromVarTime)
        let toTime: Date = VarTime.getDateObj(toVarTime)
        let periodicityMillis: number = TimePeriod.getSeconds(meas.periodicity) * 1000
        const includeQuality = options ? options.includeQuality : false

        // Generate random values as per periodicity
        for (let currTime: Date = new Date(fromTime.getTime()); currTime.getTime() <= toTime.getTime(); currTime = new Date(currTime.getTime() + periodicityMillis)) {
            let timeStamp = currTime.getTime()
            let vals = [meas.value1, meas.value2]
            let val = vals[0]
            if (vals[0] != vals[1]) {
                vals.sort()
                val = vals[0] + Math.random() * (vals[1] - vals[0])
            }
            resultData.push(timeStamp)
            resultData.push(val)
            if (includeQuality) {
                resultData.push(DataQuality.GOOD)
            }
        }
        return resultData
    }
}