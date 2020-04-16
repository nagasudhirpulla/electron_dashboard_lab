import { getApiAdaptersRegistry, setApiAdaptersRegistry } from "../ApiManifestRegistry"
import { IApiManifest } from "../type_defs/IApiManifest"

export const registerApiAdapter = async (manifestObj: IApiManifest) => {
    let apiAdaptersRegistry = getApiAdaptersRegistry()
    apiAdaptersRegistry[manifestObj.api_id] = manifestObj
    setApiAdaptersRegistry(apiAdaptersRegistry)
}