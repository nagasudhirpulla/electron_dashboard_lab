import { IMeasurement } from "./type_defs/IMeasurement";
import { IEquationMeasurement } from "./type_defs/IEquationMeasurement";
import { TimePeriod } from "../Time/TimePeriod";
import { ResamplingStrategy } from "./ResamplingStrategy";
export class EquationMeasurement implements IEquationMeasurement {
    static typename: string = 'EquationMeasurement';
    discriminator: string = EquationMeasurement.typename;
    meas_id: string | number = "dummy";
    measurements: IMeasurement[] = [];
    equation: string = null;
}
