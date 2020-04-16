import { IMeasurement } from "./IMeasurement";
import { Periodicity } from "../../Time/Periodicity";
export interface IApiMeasurement extends IMeasurement {
    meas_id: string
    api_type_id: string
    periodicity: Periodicity
}
