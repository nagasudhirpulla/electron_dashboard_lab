import { ICompositeMeasurement } from "./type_defs/ICompositeMeasurement";
import { IAdapterMeasurement } from "./type_defs/IAdapterMeasurement";
import { IMeasurement } from "./type_defs/IMeasurement";
import { IEquationMeasurement } from "./type_defs/IEquationMeasurement";

export class CompositeMeasurement implements ICompositeMeasurement {
    static typename: string = 'CompositeMeasurement';
    discriminator: string = CompositeMeasurement.typename;
    meas_id: string | number = "dummy";
    measurements: (IAdapterMeasurement | ICompositeMeasurement)[] = [];
    equation: string = null;
}

export class EqquationMeasurement implements IEquationMeasurement {
    static typename: string = 'EqquationMeasurement';
    discriminator: string = EqquationMeasurement.typename;
    meas_id: string | number = "dummy";
    measurements: IMeasurement[] = [];
    equation: string = null;
}
