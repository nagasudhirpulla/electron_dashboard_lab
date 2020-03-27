import { IVizCompLibrary } from "./IVizCompLibrary";
import { IVizConfFormCompLibrary } from "./IVizConfFormCompLibrary";
import { IWidgetConfig } from "../dashboard/IWidgetConfig";
import { IVizConfFormCompProps } from "./IVizConfFormCompProps";

export interface IVizPluginsManager {
    /**
    * id - unique id of the component
    * name - unique name of the component
     */
    registerComp: (name: string, comp: React.FunctionComponent<IWidgetConfig>, configFormComp: React.FunctionComponent<IVizConfFormCompProps>) => void
    compLibrary: IVizCompLibrary
    compConfFormCompLibrary: IVizConfFormCompLibrary
}