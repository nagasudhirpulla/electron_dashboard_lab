import { IEquationMeasurement } from "../../../measurements/type_defs/IEquationMeasurement"
import { IFetcherOptions } from "../fetchers/type_defs/IFetcherOptions"
import { IMeasData } from "../type_defs/dashboard/IMeasData"
import { fetchWebMeasData } from "./fetchWebMeasData"

export const fetchEquationMeasData = async (fromTime: Date, toTime: Date, meas: IEquationMeasurement, options?: IFetcherOptions): Promise<IMeasData> => {
    let resultData: IMeasData = []

    if (meas.measurements.length == 0) {
        return resultData
    }

    let measDataStore: IMeasData[] = []

    for (let mInd = 0; mInd < meas.measurements.length; mInd++) {
        const eqMeas = meas.measurements[mInd]
        const data = await fetchWebMeasData(fromTime, toTime, eqMeas, options)
        measDataStore.push(data)
    }

    // iterate through all samples
    for (let samplIter = 0; samplIter < measDataStore[0].length / 2; samplIter++) {
        // asumption - data of all measurements in time aligned 
        // hence length of all arrays in datastore should have same length
        let eq = meas.equation
        const ts: number = measDataStore[0][2 * samplIter]
        // iterate through all measurements in store
        for (let measIter = 0; measIter < measDataStore.length; measIter++) {
            eq = eq.replace(`{${measIter}}`, '' + measDataStore[measIter][2 * samplIter + 1])
        }
        let val: number = null
        try {
            val = eval(eq)
        } catch (err) {
            console.log(err)
        }
        resultData.push(ts)
        resultData.push(val)
    }
    return resultData
}