import { IMeasurement } from "./IMeasurement";
export interface IEquationMeasurement extends IMeasurement {
    measurements: IMeasurement[];
    equation: string;
}
