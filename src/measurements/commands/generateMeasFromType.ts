import { IMeasurement } from "../type_defs/IMeasurement";
import { DummyMeasurement } from "../DummyMeasurement";
import { AdapterMeasurement } from "../AdapterMeasurement";

export const generateMeasFromType = (typename: string): IMeasurement => {
    if (typename == DummyMeasurement.typename) {
        return new DummyMeasurement()
    }
    else if (typename.startsWith('adapter|')) {
        // it is an adapter measurement
        const adapterId = typename.substring(typename.indexOf('|') + 1)
        const adapterMeas = new AdapterMeasurement()
        adapterMeas.adapter_id = adapterId
        return adapterMeas
    }
    return null
}