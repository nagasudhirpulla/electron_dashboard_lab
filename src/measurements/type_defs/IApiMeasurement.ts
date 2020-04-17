import { IMeasurement } from "./IMeasurement";
import { Periodicity } from "../../Time/Periodicity";
import { ResamplingStrategy } from "../ResamplingStrategy";
export interface IApiMeasurement extends IMeasurement {
    meas_id: string
    api_id: string
    periodicity: Periodicity
    resampling_strategy: ResamplingStrategy
}
