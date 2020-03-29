import { IVizCompLibrary } from "./type_defs/vizComp/IVizCompLibrary"
import { IVizConfEditorLibrary } from "./type_defs/vizComp/IVizConfEditorLibrary"
import { IVizCompMetadataLibrary } from "./type_defs/vizComp/IVizCompMetadataLibrary"
import { IWidgetProps } from "./type_defs/dashboard/IWidgetProps"
import { IVizConfEditorProps } from "./type_defs/vizComp/IVizConfEditorProps"
import { IVizCompMetadata } from "./type_defs/vizComp/IVizCompMetadata"
import { IVizPluginsRepo } from "./type_defs/vizComp/IVizPluginsRepo"

export const VizPluginsRepo = (): IVizPluginsRepo => {
    let comps: IVizCompLibrary = {}
    let compWidgetConfigEditors: IVizConfEditorLibrary = {}
    let compSeriesConfigEditors: IVizConfEditorLibrary = {}
    let compMetaDatas: IVizCompMetadataLibrary = {}
    return {
        registerComp: (name: string, comp: React.FC<IWidgetProps>, configWidgetEditor: React.FC<IVizConfEditorProps>, configSeriesEditor: React.FC<IVizConfEditorProps>, metadata: IVizCompMetadata) => {
            comps[name] = comp
            compWidgetConfigEditors[name] = configWidgetEditor
            compSeriesConfigEditors[name] = configSeriesEditor
            compMetaDatas[name] = metadata
        },
        getComp: (name: string): React.FC<IWidgetProps> => comps[name],
        getCompWidgetConfigEditor: (name: string): React.FC<IVizConfEditorProps> => compWidgetConfigEditors[name],
        getCompSeriesConfigEditor: (name: string): React.FC<IVizConfEditorProps> => compSeriesConfigEditors[name],
        getCompMetadata: (name: string): IVizCompMetadata => compMetaDatas[name],
        getInstalledPluginNames: (): string[] => Object.keys(comps)
    }
}