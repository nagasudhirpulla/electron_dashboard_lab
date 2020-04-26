import { IVizConfEditorProps } from "../../../type_defs/vizComp/IVizConfEditorProps";
import { IScatterPlotWidgetConfig } from "./IScatterPlotWidgetConfig";
export interface IScatterPlotWidgetConfEditorProps extends IVizConfEditorProps {
    value: IScatterPlotWidgetConfig["customConfig"];
    onChange: (v: IScatterPlotWidgetConfig["customConfig"]) => void;
}
