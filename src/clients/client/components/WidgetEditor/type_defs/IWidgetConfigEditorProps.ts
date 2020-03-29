import { IWidgetConfig } from "../../../type_defs/dashboard/IWidgetConfig";

export interface IWidgetConfigEditorProps {
    value: IWidgetConfig
    onChange: (v: IWidgetConfig) => void
}