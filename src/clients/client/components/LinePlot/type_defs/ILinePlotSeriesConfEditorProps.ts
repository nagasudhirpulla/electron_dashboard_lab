import { IVizConfEditorProps } from "../../../type_defs/vizComp/IVizConfEditorProps";
import { ILinePlotSeriesConfig } from "./ILinePlotSeriesConfig";
export interface ILinePlotSeriesConfEditorProps extends IVizConfEditorProps {
    value: ILinePlotSeriesConfig["customConfig"];
    onChange: (v: ILinePlotSeriesConfig["customConfig"]) => void;
}
