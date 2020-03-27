import { AdapterManifest } from "../../type_defs/AdapterManifest"
import { getExesFolder } from "../queries/getExesFolderQuery"
import { ensureFolderAsync, copyFolderAsync } from "../../utils/fileUtils"
import path from 'path'

export const copyPluginFolder = async (pluginExternFoldPath: string, manifestJson: AdapterManifest): Promise<string> => {
    // copy plugin folder to app plugins directory
    const pluginFolderPath = path.join(getExesFolder(), manifestJson.app_id)
    console.log(`plugin folder path = ${pluginFolderPath}`)
    // // check if pluginFolderPath exists already in the adapter exes Location
    // if (existsSync(pluginFolderPath)) {
    //     console.log('pluginFolderPath already present')
    // }
    try {
        const ensFoldRes = await ensureFolderAsync(pluginFolderPath)
        const foldCopyRes = await copyFolderAsync(pluginExternFoldPath, pluginFolderPath)
        console.log('Plugin Folder copy completed!')
    } catch (err) {
        console.log(err)
        return null
    }
    return pluginFolderPath
}