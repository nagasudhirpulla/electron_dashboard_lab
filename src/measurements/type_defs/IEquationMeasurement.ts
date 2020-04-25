import { IMeasurement } from "./IMeasurement";
import { Periodicity } from "../../Time/Periodicity";
import { ResamplingStrategy } from "../ResamplingStrategy";
export interface IEquationMeasurement extends IMeasurement {
    measurements: IMeasurement[]
    equation: string
}
