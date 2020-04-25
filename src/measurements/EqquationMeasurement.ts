import { IMeasurement } from "./type_defs/IMeasurement";
import { IEquationMeasurement } from "./type_defs/IEquationMeasurement";
export class EqquationMeasurement implements IEquationMeasurement {
    static typename: string = 'EqquationMeasurement';
    discriminator: string = EqquationMeasurement.typename;
    meas_id: string | number = "dummy";
    measurements: IMeasurement[] = [];
    equation: string = null;
}
