import { IVizConfEditorProps } from "./IVizConfEditorProps";
import { IWidgetProps } from "../dashboard/IWidgetProps";
import { IVizCompMetadata } from "./IVizCompMetadata";
export interface IVizPluginsRepo {
    registerComp: (name: string, comp: React.FC<IWidgetProps>, configWidgetFormComp: React.FC<IVizConfEditorProps>, configSeriesFormComp: React.FC<IVizConfEditorProps>, metadata: IVizCompMetadata) => void;
    getComp: (name: string) => React.FC<IWidgetProps>;
    getCompWidgetConfigEditor: (name: string) => React.FC<IVizConfEditorProps>;
    getCompSeriesConfigEditor: (name: string) => React.FC<IVizConfEditorProps>;
    getCompMetadata: (name: string) => IVizCompMetadata;
    getInstalledPluginNames: () => string[];
}
