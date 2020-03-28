import { IVizCompLibrary } from "./type_defs/vizComp/IVizCompLibrary"
import { IVizConfFormCompLibrary } from "./type_defs/vizComp/IVizConfFormCompLibrary"
import { IVizCompMetadataLibrary } from "./type_defs/vizComp/IVizCompMetadataLibrary"
import { IWidgetProps } from "./type_defs/dashboard/IWidgetProps"
import { IVizConfFormCompProps } from "./type_defs/vizComp/IVizConfFormCompProps"
import { IVizCompMetadata } from "./type_defs/vizComp/IVizCompMetadata"
import { IVizPluginsRepo } from "./type_defs/vizComp/IVizPluginsRepo"

export const VizPluginsRepo = (): IVizPluginsRepo => {
    let comps: IVizCompLibrary = {}
    let compWidgetConfigFormComps: IVizConfFormCompLibrary = {}
    let compSeriesConfigFormComps: IVizConfFormCompLibrary = {}
    let compMetaDatas: IVizCompMetadataLibrary = {}
    return {
        registerComp: (name: string, comp: React.FC<IWidgetProps>, configWidgetFormComp: React.FC<IVizConfFormCompProps>, configSeriesFormComp: React.FC<IVizConfFormCompProps>, metadata: IVizCompMetadata) => {
            comps[name] = comp
            compWidgetConfigFormComps[name] = configWidgetFormComp
            compSeriesConfigFormComps[name] = configSeriesFormComp
            compMetaDatas[name] = metadata
        },
        getComp: (name: string): React.FC<IWidgetProps> => comps[name],
        getCompWidgetConfigFormComp: (name: string): React.FC<IVizConfFormCompProps> => compWidgetConfigFormComps[name],
        getCompSeriesConfigFormComp: (name: string): React.FC<IVizConfFormCompProps> => compSeriesConfigFormComps[name],
        getCompMetadata: (name: string): IVizCompMetadata => compMetaDatas[name],
        getInstalledPluginNames: (): string[] => Object.keys(comps)
    }
}