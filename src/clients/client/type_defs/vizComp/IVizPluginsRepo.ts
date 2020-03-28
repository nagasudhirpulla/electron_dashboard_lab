import { IVizConfFormCompProps } from "./IVizConfFormCompProps";
import { IWidgetProps } from "../dashboard/IWidgetProps";
import { IVizCompMetadata } from "./IVizCompMetadata";
export interface IVizPluginsRepo {
    registerComp: (name: string, comp: React.FC<IWidgetProps>, configWidgetFormComp: React.FC<IVizConfFormCompProps>, configSeriesFormComp: React.FC<IVizConfFormCompProps>, metadata: IVizCompMetadata) => void;
    getComp: (name: string) => React.FC<IWidgetProps>;
    getCompWidgetConfigFormComp: (name: string) => React.FC<IVizConfFormCompProps>;
    getCompSeriesConfigFormComp: (name: string) => React.FC<IVizConfFormCompProps>;
    getCompMetadata: (name: string) => IVizCompMetadata;
    getInstalledPluginNames: () => string[];
}
