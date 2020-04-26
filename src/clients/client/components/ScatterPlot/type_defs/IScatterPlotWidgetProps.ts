import { IWidgetProps } from "../../../type_defs/dashboard/IWidgetProps";
import { IScatterPlotWidgetConfig } from "./IScatterPlotWidgetConfig";
export interface IScatterPlotWidgetProps extends IWidgetProps {
    config: IScatterPlotWidgetConfig;
}
