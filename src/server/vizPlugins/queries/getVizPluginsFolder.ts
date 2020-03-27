/**
 * Viz plugins will be stored as individual js files in a folder
 * Filename will be the unique identifier of the plugin which will be used through out the dashboard frontend
 */
import path from 'path'
const vizPluginsFolderName: string = 'vizPlugins'

export const getVizPluginsFolder = (): string => {
    return path.resolve(path.dirname(process.mainModule.filename), vizPluginsFolderName)
}