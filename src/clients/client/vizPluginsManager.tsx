import { IVizPluginsManager } from "./type_defs/vizComp/IVizPluginsManager";
import { IWidgetConfig } from "./type_defs/dashboard/IWidgetConfig";
import React from 'react'
import { IVizConfFormCompProps } from "./type_defs/vizComp/IVizConfFormCompProps";
import { IVizCompLibrary } from "./type_defs/vizComp/IVizCompLibrary";
import { IVizConfFormCompLibrary } from "./type_defs/vizComp/IVizConfFormCompLibrary";
import { getVizPlugins } from "./queries/getVizPlugins";
import { getVizPluginScript } from "./queries/getVizPluginScript";

let $Comps: IVizCompLibrary = {}
let $CompConfigFormComps: IVizConfFormCompLibrary = {}

export class VizPluginsManager implements IVizPluginsManager {
    registerComp = (name: string, comp: React.FC<IWidgetConfig>, configFormComp: React.FC<IVizConfFormCompProps>) => {
        $Comps[name] = comp
        $CompConfigFormComps[name] = configFormComp
    }

    getCompLibrary = () => $Comps

    getCompConfigFormCompLibrary = () => $CompConfigFormComps

    addCompFromScript = (scriptStr: string) => { eval(scriptStr) }

    getVizPluginNames = async (): Promise<string[]> => { return (await getVizPlugins()) }

    installPlugin = async (pluginName: string): Promise<void> => {
        const pluginScript = await getVizPluginScript(pluginName)
        this.addCompFromScript(pluginScript)
    }

    installAllPlugins = async () => {
        const pluginNames = await this.getVizPluginNames()
        pluginNames.forEach(p => this.installPlugin(p))
    }
}