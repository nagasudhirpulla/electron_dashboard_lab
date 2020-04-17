import { IFetcherOptions } from "../type_defs/IFetcherOptions";
import { VarTime } from "../../../../Time/VarTime";
import { IMeasurement } from "../../../../measurements/type_defs/IMeasurement";
import { DummyMeasurement } from "../../../../measurements/DummyMeasurement";
import { IDummyMeasurement } from "../../../../measurements/type_defs/IDummyMeasurement";
import { fetchDummyMeasData } from "./fetchDummyMeasData";
import { AdapterMeasurement } from "../../../../measurements/AdapterMeasurement";
import { fetchAdapterMeasData } from "./fetchAdapterMeasData";
import { IAdapterMeasurement } from "../../../../measurements/type_defs/IAdapterMeasurement";
import { IMeasData } from "../../type_defs/dashboard/IMeasData";
import { ApiMeasurement } from "../../../../measurements/ApiMeasurement";
import { fetchApiData } from "../../../../apiAdapters/queries/fetchApiData";
import { IApiMeasurement } from "../../../../measurements/type_defs/IApiMeasurement";

export const fetchMeasData = async (fromTime: Date, toTime: Date, meas: IMeasurement, options?: IFetcherOptions): Promise<IMeasData> => {
    let resultData: number[] = []
    if (meas.discriminator == DummyMeasurement.typename) {
        resultData = await fetchDummyMeasData(fromTime, toTime, meas as IDummyMeasurement, options)
    }
    if (meas.discriminator == AdapterMeasurement.typename) {
        resultData = await fetchAdapterMeasData(fromTime, toTime, meas as IAdapterMeasurement, options)
    }
    if (meas.discriminator == ApiMeasurement.typename) {
        resultData = await fetchApiData(fromTime, toTime, meas as IApiMeasurement, options)
    }
    return resultData
}
