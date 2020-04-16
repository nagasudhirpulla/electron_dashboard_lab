import { IApiManifest } from "../type_defs/IApiManifest"
import { getApiAdaptersRegistry, setApiAdaptersRegistry } from "../ApiManifestRegistry"

export const registerApiAdapter = async (apiId: string) => {
    let apiAdaptersRegistry = getApiAdaptersRegistry()
    delete apiAdaptersRegistry[apiId]
    setApiAdaptersRegistry(apiAdaptersRegistry)
}