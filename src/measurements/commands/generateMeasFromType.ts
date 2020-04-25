import { IMeasurement } from "../type_defs/IMeasurement";
import { DummyMeasurement } from "../DummyMeasurement";
import { AdapterMeasurement } from "../AdapterMeasurement";
import { ApiMeasurement } from "../ApiMeasurement";
import { EquationMeasurement } from "../EquationMeasurement";

export const generateMeasFromType = (typename: string): IMeasurement => {
    if (typename == DummyMeasurement.typename) {
        return new DummyMeasurement()
    }
    else if (typename == EquationMeasurement.typename) {
        return new EquationMeasurement()
    }
    else if (typename.startsWith('adapter|')) {
        // it is an adapter measurement
        const adapterId = typename.substring(typename.indexOf('|') + 1)
        const adapterMeas = new AdapterMeasurement()
        adapterMeas.adapter_id = adapterId
        return adapterMeas
    }
    else if (typename.startsWith('api|')) {
        // it is an adapter measurement
        const apiId = typename.substring(typename.indexOf('|') + 1)
        const apiMeas = new ApiMeasurement()
        apiMeas.api_id = apiId
        return apiMeas
    }
    return null
}