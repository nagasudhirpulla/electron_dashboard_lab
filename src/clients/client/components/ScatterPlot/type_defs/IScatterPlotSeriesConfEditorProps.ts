import { IVizConfEditorProps } from "../../../type_defs/vizComp/IVizConfEditorProps";
import { IScatterPlotSeriesConfig } from "./IScatterPlotSeriesConfig";

export interface IScatterPlotSeriesConfEditorProps extends IVizConfEditorProps {
    value?: IScatterPlotSeriesConfig["customConfig"]
    onChange?: (v: IScatterPlotSeriesConfig["customConfig"]) => void
}