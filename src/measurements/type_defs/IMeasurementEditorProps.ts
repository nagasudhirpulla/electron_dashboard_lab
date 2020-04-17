import { IMeasurement } from "./IMeasurement";

export interface IMeasurementEditorProps {
    value?: IMeasurement, onChange?: (m: IMeasurement) => void
}