import { getAdaptersRegistry } from "../dataAdaptersRegistry"

export const isPluginNamePresent = (pluginName: string): boolean => {
    const adapters = getAdaptersRegistry()
    let pluginNameExists = false
    for (const app_id of Object.keys(adapters)) {
        if (adapters[app_id].name == pluginName) {
            pluginNameExists = true
            break
        }
    }
    return pluginNameExists;
}