import { IWidgetsData } from "./IWidgetsData";
import { IWidgetConfig } from "./IWidgetConfig";

export interface IDashboardConfig {
    widgetConfigs: IWidgetConfig[],
    widgetsData: IWidgetsData
}
