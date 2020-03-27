import { existsSync } from "original-fs"
import { getAdapterRepoFilePath } from "../queries/getAdaptersRepoFilePathQuery"
import { persistAdaptersRegistry } from "./persistAdaptersRegistryCommand"
import { readFileAsync } from "../../utils/fileUtils"
import { setAdaptersRegistry, getAdaptersRegistry } from "../dataAdaptersRegistry"
import { AdapterManifest } from "../../type_defs/AdapterManifest"

export const initAdaptersRegistry = async (): Promise<{ [key: string]: AdapterManifest }> => {
    const filePath = getAdapterRepoFilePath()
    if (!existsSync(filePath)) {
        console.log(`${filePath} file not present`)
        persistAdaptersRegistry()
    } else {
        setAdaptersRegistry(JSON.parse(await readFileAsync(filePath) as string))
    }
    return getAdaptersRegistry()
}