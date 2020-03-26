import { IWidgetConfig } from "../dashboard/IWidgetConfig";

export interface IVizCompLibrary {
    [key: string]: React.FunctionComponent<IWidgetConfig>
}