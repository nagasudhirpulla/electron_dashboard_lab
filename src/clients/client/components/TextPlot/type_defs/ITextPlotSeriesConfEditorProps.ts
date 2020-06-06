import { IVizConfEditorProps } from "../../../type_defs/vizComp/IVizConfEditorProps";
import { ITextPlotSeriesConfig } from "./ITextPlotSeriesConfig";
export interface ITextPlotSeriesConfEditorProps extends IVizConfEditorProps {
    value?: ITextPlotSeriesConfig["customConfig"]
    onChange?: (v: ITextPlotSeriesConfig["customConfig"]) => void
}
