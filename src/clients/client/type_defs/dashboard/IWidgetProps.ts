import { IWidgetData } from "./IWidgetData";
import { IWidgetConfig } from "./IWidgetConfig";
import { ILayoutItem } from "../gridLayout/ILayout";

export interface IWidgetProps {
    config: IWidgetConfig
    data: IWidgetData
    layouts: {
        lg?: ILayoutItem
        md?: ILayoutItem
        sm?: ILayoutItem
    }
}
