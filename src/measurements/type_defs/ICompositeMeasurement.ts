import { IMeasurement } from "./IMeasurement";
import { IAdapterMeasurement } from "./IAdapterMeasurement";
export interface ICompositeMeasurement extends IMeasurement {
    measurements: IAdapterMeasurement | ICompositeMeasurement[];
    equation: string;
}
