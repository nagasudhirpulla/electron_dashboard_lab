import { IMeasurement } from "../../../measurements/type_defs/IMeasurement"
import { IFetcherOptions } from "../fetchers/type_defs/IFetcherOptions"
import { IMeasData } from "../type_defs/dashboard/IMeasData"
import { DummyMeasurement } from "../../../measurements/DummyMeasurement"
import { fetchDummyMeasData } from "../fetchers/queries/fetchDummyMeasData"
import { IDummyMeasurement } from "../../../measurements/type_defs/IDummyMeasurement"
import { ApiMeasurement } from "../../../measurements/ApiMeasurement"
import { fetchApiData } from "../../../apiAdapters/queries/fetchApiData"
import { IApiMeasurement } from "../../../measurements/type_defs/IApiMeasurement"
import { EquationMeasurement } from "../../../measurements/EquationMeasurement"
import { IEquationMeasurement } from "../../../measurements/type_defs/IEquationMeasurement"
import { fetchEquationMeasData } from "./fetchEquationMeasData"

export const fetchWebMeasData = async (fromTime: Date, toTime: Date, meas: IMeasurement, options?: IFetcherOptions): Promise<IMeasData> => {
    let resultData: number[] = []
    if (meas.discriminator == DummyMeasurement.typename) {
        resultData = await fetchDummyMeasData(fromTime, toTime, meas as IDummyMeasurement, options)
    }
    else if (meas.discriminator == ApiMeasurement.typename) {
        resultData = await fetchApiData(fromTime, toTime, meas as IApiMeasurement, options)
    }
    else if (meas.discriminator == EquationMeasurement.typename) {
        resultData = await fetchEquationMeasData(fromTime, toTime, meas as IEquationMeasurement, options)
    }
    return resultData
}