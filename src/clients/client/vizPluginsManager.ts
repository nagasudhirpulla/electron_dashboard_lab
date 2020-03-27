import { IVizPluginsManager } from "./type_defs/vizComp/IVizPluginsManager";

export class VizPluginsManager implements IVizPluginsManager {
    // TODO complete this
    registerComp: (name: string, comp: import("react").FunctionComponent<import("./type_defs/dashboard/IWidgetConfig").IWidgetConfig>, configFormComp: import("react").FunctionComponent<import("./type_defs/vizComp/IVizConfFormCompProps").IVizConfFormCompProps>) => void;
    compLibrary: import("./type_defs/vizComp/IVizCompLibrary").IVizCompLibrary;
    compConfFormCompLibrary: import("./type_defs/vizComp/IVizConfFormCompLibrary").IVizConfFormCompLibrary;
}