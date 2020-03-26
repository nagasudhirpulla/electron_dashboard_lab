/**
 * Viz plugins will be stored as individual js files in a folder
 * Filename will be the unique identifier of the plugin which will be used through out the dashboard frontend
 */
import path from 'path'
import { copyFileAsync, getFilePathFromDialog, deleteFileAsync, getFileNamesInFolder, checkIfFileExists, readFileAsync, ensureFolderAsync } from "../utils/fileUtils"

const vizPluginsFolderName: string = 'vizPlugins'
const getVizPluginsFolder = (): string => {
    return path.resolve(path.dirname(process.mainModule.filename), vizPluginsFolderName)
}

const copyVizPlugin = async (pluginExternFilePath: string): Promise<string> => {
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

export const registerVizPluginFromDialog = async (): Promise<string> => {
    // get the user selected viz plugin file path
    const pluginExtPath = await getFilePathFromDialog()
    if (pluginExtPath == null) {
        return null
    }
    const pluginPath = await registerVizPlugin(pluginExtPath)
    return pluginPath
}

export const registerVizPlugin = async (pluginExtPath: string): Promise<string> => {
    const pluginPath: string = await copyVizPlugin(pluginExtPath)
    if (pluginPath == null) {
        return null
    }
    return path.basename(pluginPath)
}

export const deRegisterVizPlugin = async (pluginId: string): Promise<boolean> => {
    const vizPluginPath = path.join(getVizPluginsFolder(), pluginId)
    const isSuccess = await deleteFileAsync(vizPluginPath)
    console.log(`successfully uninstalled plugin ${pluginId}`)
    return isSuccess
}

export const getVizPluginNames = async (): Promise<string[]> => {
    const filePaths = await getFileNamesInFolder(getVizPluginsFolder())
    const pluginNames = filePaths.map(p => path.basename(p))
    return pluginNames
}

export const getVizPluginScript = async (pluginName: string): Promise<string> => {
    const vizPluginPath = path.join(getVizPluginsFolder(), pluginName)
    const vizPluginExists = await checkIfFileExists(vizPluginPath)
    if (!vizPluginExists) {
        return ''
    }
    const pluginScript = await readFileAsync(vizPluginPath)
    return pluginScript
}