import { IVizConfEditorProps } from "../../../type_defs/vizComp/IVizConfEditorProps";
import { ITextPlotWidgetConfig } from "./ITextPlotWidgetConfig";
export interface ITextPlotWidgetConfEditorProps extends IVizConfEditorProps {
    value: ITextPlotWidgetConfig["customConfig"];
    onChange: (v: ITextPlotWidgetConfig["customConfig"]) => void;
}