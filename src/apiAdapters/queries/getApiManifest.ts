import { IApiManifest } from "../type_defs/IApiManifest"
import { getApiAdaptersRegistry } from "../ApiManifestRegistry"

export const getApiManifest = (key: string): IApiManifest => {
    if (!['number', 'string'].includes(typeof key)) {
        return null
    }
    const apiRegistry = getApiAdaptersRegistry()
    return apiRegistry[key]
}