import { IAdapterMeasurement } from "./type_defs/IAdapterMeasurement"

export class AdapterMeasurement implements IAdapterMeasurement {
    static typename: string = "AdapterMeasurement"
    discriminator: string = AdapterMeasurement.typename
    meas_id: string = "MeasId"
    adapter_id: string = ""
}
