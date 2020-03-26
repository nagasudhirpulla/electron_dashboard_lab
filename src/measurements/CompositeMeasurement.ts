import { ICompositeMeasurement } from "./type_defs/ICompositeMeasurement";
import { IAdapterMeasurement } from "./type_defs/IAdapterMeasurement";

export class CompositeMeasurement implements ICompositeMeasurement {
    static typename: string = 'CompositeMeasurement';
    discriminator: string = CompositeMeasurement.typename;
    meas_id: string | number = "dummy";
    measurements: IAdapterMeasurement[] = [];
    equation: string = null;
}
