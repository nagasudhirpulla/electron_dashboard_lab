import { IMeasurement } from "./IMeasurement";
import { Periodicity } from "../../Time/Periodicity";
export interface IAdapterMeasurement extends IMeasurement {
    meas_id: string
    adapter_id: string,
    periodicity: Periodicity
}
