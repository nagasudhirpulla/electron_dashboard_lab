import { ISeriesConfig } from "../../../type_defs/dashboard/ISeriesConfig";

export interface ISeriesConfigEditorProps {
    value?: ISeriesConfig
    onChange?: (v: ISeriesConfig) => void
}