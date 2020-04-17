import { ISeriesConfig } from "../../../type_defs/dashboard/ISeriesConfig";
import { IMeasurementEditorProps } from "../../../../../measurements/type_defs/IMeasurementEditorProps";

export interface ISeriesConfigEditorProps {
    value?: ISeriesConfig
    onChange?: (v: ISeriesConfig) => void
    MeasurementEditor: React.FC<IMeasurementEditorProps>
}