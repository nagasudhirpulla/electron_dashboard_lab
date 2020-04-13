import { persistAdaptersRegistry } from "./persistAdaptersRegistryCommand"
import { IAdapterManifest } from "../type_defs/IAdapterManifest"
import { getAdaptersRegistry, setAdaptersRegistry } from "../dataAdaptersRegistry"

export const registerAdapterManifest = async (manifestObj: IAdapterManifest) => {
    let adaptersRegistry = getAdaptersRegistry()
    adaptersRegistry[manifestObj.app_id] = manifestObj
    setAdaptersRegistry(adaptersRegistry)
    await persistAdaptersRegistry()
}
