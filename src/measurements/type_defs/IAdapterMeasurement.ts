import { IMeasurement } from "./IMeasurement";
import { Periodicity } from "../../Time/Periodicity";
import { ResamplingStrategy } from "../ResamplingStrategy";
export interface IAdapterMeasurement extends IMeasurement {
    meas_id: string
    adapter_id: string
    periodicity: Periodicity
    resampling_strategy: ResamplingStrategy
}