import { getVizPlugins } from "./queries/getVizPlugins";
import { getVizPluginScript } from "./queries/getVizPluginScript";

export const VizPluginsManager = () => {
    const installPlugin = async (pluginName: string): Promise<void> => {
        const pluginScript = await getVizPluginScript(pluginName)
        eval(pluginScript)
    }

    return {
        getVizPluginNames: async (): Promise<string[]> => { return (await getVizPlugins()) },

        installPlugin: installPlugin,

        installAllPlugins: async () => {
            const pluginNames = await getVizPlugins()
            pluginNames.forEach(p => (async function () { await installPlugin(p) })())
        }
    }
}