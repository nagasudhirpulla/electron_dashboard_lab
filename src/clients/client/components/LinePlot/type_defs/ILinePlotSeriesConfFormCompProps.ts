import { IVizConfFormCompProps } from "../../../type_defs/vizComp/IVizConfFormCompProps";
import { ILinePlotSeriesConfig } from "./ILinePlotSeriesConfig";
export interface ILinePlotSeriesConfFormCompProps extends IVizConfFormCompProps {
    value: ILinePlotSeriesConfig["customConfig"];
    onChange: (v: ILinePlotSeriesConfig["customConfig"]) => void;
}
