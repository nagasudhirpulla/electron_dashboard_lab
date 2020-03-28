import { IWidgetProps } from "../dashboard/IWidgetProps";

export interface IVizCompLibrary {
    [key: string]: React.FC<IWidgetProps>
}