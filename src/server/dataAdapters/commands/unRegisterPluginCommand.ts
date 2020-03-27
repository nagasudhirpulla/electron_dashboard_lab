import { initAdaptersRegistry } from "./initAdaptersRegistryCommand"
import { getExesFolder } from "../queries/getExesFolderQuery"
import { removeFolderAsync } from "../../utils/fileUtils"
import path from 'path'
import { getAdaptersRegistry, setAdaptersRegistry } from "../dataAdaptersRegistry"
import { persistAdaptersRegistry } from "./persistAdaptersRegistryCommand"

const unRegisterFromAdaptersRegistry = async (adapterId: string) => {
    let adaptersRegistry = getAdaptersRegistry()
    delete adaptersRegistry[adapterId]
    setAdaptersRegistry(adaptersRegistry)
    await persistAdaptersRegistry()
}

export const unRegisterPlugin = async (adapterId: string): Promise<boolean> => {
    // refresh adapters list from file
    const adapters = await initAdaptersRegistry()
    // check if adapterId exists in the app registry object
    if (!Object.keys(adapters).includes(adapterId)) {
        console.log(`${adapterId} is not present in adapters registry of this app`)
    } else {
        // remove app_id object from app registry object
        unRegisterFromAdaptersRegistry(adapterId)
    }
    // delete the app_id folder
    const pluginFolderPath = path.join(getExesFolder(), adapterId)
    const isSuccess = await removeFolderAsync(pluginFolderPath)
    console.log(`successfully uninstalled plugin ${adapterId}`)
    return isSuccess;
}