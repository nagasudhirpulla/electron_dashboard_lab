import { IVizConfEditorProps } from "../../../type_defs/vizComp/IVizConfEditorProps";
import { ILinePlotWidgetConfig } from "./ILinePlotWidgetConfig";
export interface ILinePlotWidgetConfEditorProps extends IVizConfEditorProps {
    value: ILinePlotWidgetConfig["customConfig"]
    onChange: (v: ILinePlotWidgetConfig["customConfig"]) => void
}
