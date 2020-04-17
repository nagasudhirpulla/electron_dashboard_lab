import { IWidgetConfig } from "../../../type_defs/dashboard/IWidgetConfig";
import { IMeasurementEditorProps } from "../../../../../measurements/type_defs/IMeasurementEditorProps";

export interface IWidgetConfigEditorProps {
    value?: IWidgetConfig
    onChange?: (v: IWidgetConfig) => void
    measTypes: { name: string, val: string }[]
    MeasurementEditor: React.FC<IMeasurementEditorProps>
}