import { IFetcherOptions } from "../type_defs/IFetcherOptions";
import { VarTime } from "../../../../Time/VarTime";
import { IMeasurement } from "../../../../measurements/type_defs/IMeasurement";
import { DummyMeasurement } from "../../../../measurements/DummyMeasurement";
import { IDummyMeasurement } from "../../../../measurements/type_defs/IDummyMeasurement";
import { fetchDummyMeasData } from "./fetchDummyMeasData";
import { AdapterMeasurement } from "../../../../measurements/AdapterMeasurement";
import { fetchAdapterMeasData } from "./fetchAdapterMeasData";
import { IAdapterMeasurement } from "../../../../measurements/type_defs/IAdapterMeasurement";

export const fetchMeasData = async (fromVarTime: VarTime, toVarTime: VarTime, meas: IMeasurement, options?: IFetcherOptions): Promise<number[]> => {
    let resultData: number[] = []
    if (meas.discriminator == DummyMeasurement.typename) {
        resultData = await fetchDummyMeasData(fromVarTime, toVarTime, meas as IDummyMeasurement, options)
    }
    if (meas.discriminator == AdapterMeasurement.typename) {
        resultData = await fetchAdapterMeasData(fromVarTime, toVarTime, meas as IAdapterMeasurement, options)
    }
    return resultData
}
