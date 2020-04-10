import { IWidgetData } from "./IWidgetData";
import { IWidgetConfig } from "./IWidgetConfig";
import { Layout } from "react-grid-layout";

export interface IWidgetProps {
    config: IWidgetConfig
    data: IWidgetData
    layouts: {
        lg?: Layout
        md?: Layout
        sm?: Layout
    }
}
