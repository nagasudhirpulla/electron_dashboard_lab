import { Periodicity } from "../../Time/Periodicity"
import { IMeasurement } from "./IMeasurement"

export interface IDummyMeasurement extends IMeasurement {
    value1: number
    value2: number
    periodicity: Periodicity
}


