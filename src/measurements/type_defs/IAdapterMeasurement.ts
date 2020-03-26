import { IMeasurement } from "./IMeasurement";
export interface IAdapterMeasurement extends IMeasurement {
    meas_id: string
    adapter_id: string
}
