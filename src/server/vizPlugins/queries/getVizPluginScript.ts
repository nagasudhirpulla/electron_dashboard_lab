import { checkIfFileExists, readFileAsync } from "../../utils/fileUtils"
import path from 'path'
import { getVizPluginsFolder } from "./getVizPluginsFolder"

export const getVizPluginScript = async (pluginName: string): Promise<string> => {
    const vizPluginPath = path.join(getVizPluginsFolder(), pluginName)
    const vizPluginExists = await checkIfFileExists(vizPluginPath)
    if (!vizPluginExists) {
        return ''
    }
    const pluginScript = await readFileAsync(vizPluginPath)
    return pluginScript
}