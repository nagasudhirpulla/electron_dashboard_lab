import { persistAdaptersRegistry } from "./persistAdaptersRegistryCommand"
import { AdapterManifest } from "../../type_defs/AdapterManifest"
import { getAdaptersRegistry, setAdaptersRegistry } from "../dataAdaptersRegistry"

export const registerAdapterManifest = async (manifestObj: AdapterManifest) => {
    let adaptersRegistry = getAdaptersRegistry()
    adaptersRegistry[manifestObj.app_id] = manifestObj
    setAdaptersRegistry(adaptersRegistry)
    await persistAdaptersRegistry()
}
