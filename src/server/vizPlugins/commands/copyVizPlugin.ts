import { ensureFolderAsync, copyFileAsync } from "../../utils/fileUtils"
import path from 'path'
import { getVizPluginsFolder } from "../queries/getVizPluginsFolder"

export const copyVizPlugin = async (pluginExternFilePath: string): Promise<string> => {
    const ensFoldRes = await ensureFolderAsync(getVizPluginsFolder())
    const vizPluginPath = path.join(getVizPluginsFolder(), path.basename(pluginExternFilePath))
    console.log(`viz plugin path = ${vizPluginPath}`)
    try {
        await copyFileAsync(pluginExternFilePath, vizPluginPath)
        console.log('Viz Plugin copy completed!')
    } catch (err) {
        console.log(err)
        return null
    }
    return vizPluginPath
}