import { copyVizPlugin } from "./copyVizPlugin"
import path from 'path'

export const registerVizPlugin = async (pluginExtPath: string): Promise<string> => {
    const pluginPath: string = await copyVizPlugin(pluginExtPath)
    if (pluginPath == null) {
        return null
    }
    return path.basename(pluginPath)
}