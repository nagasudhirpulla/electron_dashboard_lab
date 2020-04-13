import { existsSync } from "original-fs"
import { getAdapterRepoFilePath } from "../queries/getAdaptersRepoFilePathQuery"
import { persistAdaptersRegistry } from "./persistAdaptersRegistryCommand"
import { readFileAsync } from "../../utils/fileUtils"
import { setAdaptersRegistry, getAdaptersRegistry } from "../dataAdaptersRegistry"
import { IAdapterManifest } from "../type_defs/IAdapterManifest"

export const initAdaptersRegistry = async (): Promise<{ [key: string]: IAdapterManifest }> => {
    const filePath = getAdapterRepoFilePath()
    if (!existsSync(filePath)) {
        console.log(`${filePath} file not present`)
        persistAdaptersRegistry()
    } else {
        setAdaptersRegistry(JSON.parse(await readFileAsync(filePath) as string))
    }
    return getAdaptersRegistry()
}