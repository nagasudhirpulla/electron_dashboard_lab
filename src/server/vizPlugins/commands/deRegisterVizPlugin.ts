import { deleteFileAsync } from "../../utils/fileUtils"
import path from 'path'
import { getVizPluginsFolder } from "../queries/getVizPluginsFolder"

export const deRegisterVizPlugin = async (pluginId: string): Promise<boolean> => {
    const vizPluginPath = path.join(getVizPluginsFolder(), pluginId)
    const isSuccess = await deleteFileAsync(vizPluginPath)
    console.log(`successfully uninstalled plugin ${pluginId}`)
    return isSuccess
}