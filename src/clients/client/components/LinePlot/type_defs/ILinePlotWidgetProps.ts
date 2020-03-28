import { IWidgetProps } from "../../../type_defs/dashboard/IWidgetProps";
import { ILinePlotWidgetConfig } from "./ILinePlotWidgetConfig";
export interface ILinePlotWidgetProps extends IWidgetProps {
    config: ILinePlotWidgetConfig
}
