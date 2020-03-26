import { Periodicity } from "../Time/Periodicity"
import { IDummyMeasurement } from "./type_defs/IDummyMeasurement"

export class DummyMeasurement implements IDummyMeasurement {
    value1: number = 0
    value2: number = 10
    static typename: string = 'DummyMeasurement'
    discriminator: string = DummyMeasurement.typename
    meas_id: string | number = "dummy"
    periodicity: Periodicity = new Periodicity()
}