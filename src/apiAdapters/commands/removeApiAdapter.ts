import { getApiAdaptersRegistry, setApiAdaptersRegistry } from "../ApiManifestRegistry"

export const removeApiAdapter = async (apiId: string) => {
    let apiAdaptersRegistry = getApiAdaptersRegistry()
    delete apiAdaptersRegistry[apiId]
    setApiAdaptersRegistry(apiAdaptersRegistry)
}