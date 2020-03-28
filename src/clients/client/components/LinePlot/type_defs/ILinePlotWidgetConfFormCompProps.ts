import { IVizConfFormCompProps } from "../../../type_defs/vizComp/IVizConfFormCompProps";
import { ILinePlotWidgetConfig } from "./ILinePlotWidgetConfig";
export interface ILinePlotWidgetConfFormCompProps extends IVizConfFormCompProps {
    value: ILinePlotWidgetConfig["customConfig"];
    onChange: (v: ILinePlotWidgetConfig["customConfig"]) => void;
}
