import { IVizCompLibrary } from "./IVizCompLibrary";
import { IVizConfFormCompLibrary } from "./IVizConfFormCompLibrary";
import { IWidgetConfig } from "../dashboard/IWidgetConfig";
import { IVizConfFormCompProps } from "./IVizConfFormCompProps";

export interface IVizPluginsManager {
    /**
    * id - unique id of the component
    * name - unique name of the component
     */
    registerComp: (name: string, comp: React.FC<IWidgetConfig>, configFormComp: React.FC<IVizConfFormCompProps>) => void
    getCompLibrary: () => IVizCompLibrary
    getCompConfigFormCompLibrary: () => IVizConfFormCompLibrary
    addCompFromScript: (scriptStr: string) => void
}