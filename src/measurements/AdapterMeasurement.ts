import { IAdapterMeasurement } from "./type_defs/IAdapterMeasurement"
import { TimePeriod } from "../Time/TimePeriod"
import { ResamplingStrategy } from "./ResamplingStrategy"

export class AdapterMeasurement implements IAdapterMeasurement {
    static typename: string = "AdapterMeasurement"
    discriminator: string = AdapterMeasurement.typename
    meas_id: string = "MeasId"
    adapter_id: string = ""
    periodicity = new TimePeriod()
    resampling_strategy = ResamplingStrategy.Raw
}
