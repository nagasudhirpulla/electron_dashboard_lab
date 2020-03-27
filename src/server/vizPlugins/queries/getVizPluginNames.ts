import { getFileNamesInFolder } from "../../utils/fileUtils"
import path from 'path'
import { getVizPluginsFolder } from "./getVizPluginsFolder"

export const getVizPluginNames = async (): Promise<string[]> => {
    const filePaths = await getFileNamesInFolder(getVizPluginsFolder())
    const pluginNames = filePaths.map(p => path.basename(p))
    return pluginNames
}