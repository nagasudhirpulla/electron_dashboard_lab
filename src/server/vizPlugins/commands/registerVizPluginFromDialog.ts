import { getFilePathFromDialog } from "../../utils/fileUtils"
import { registerVizPlugin } from "./registerVizPlugin"

export const registerVizPluginFromDialog = async (): Promise<string> => {
    // get the user selected viz plugin file path
    const pluginExtPath = await getFilePathFromDialog('Select New Visualization Plugin', [
        { name: 'JS Files', extensions: ['js'] },
    ])
    if (pluginExtPath == null) {
        return null
    }
    const pluginPath = await registerVizPlugin(pluginExtPath)
    return pluginPath
}