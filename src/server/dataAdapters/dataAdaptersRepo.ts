import { AdapterManifest } from "../type_defs/AdapterManifest"
import { writeFileAsync, readFileAsync } from "../utils/fileUtils"
import { existsSync } from "fs"
import path from 'path'

let $adaptersRegistry: { [key: string]: AdapterManifest } = {}
const adaptersRegistryFilename: string = 'adapter_register.json'

export const persistAdapters = async () => {
    writeFileAsync(getAdapterRepoFilePath(), JSON.stringify($adaptersRegistry, null, 4))
    console.log(`Adapters Register created`)
};

export const initAdapters = async () => {
    const filePath = getAdapterRepoFilePath()
    if (!existsSync(filePath)) {
        console.log(`${filePath} file not present`)
        persistAdapters()
    } else {
        $adaptersRegistry = JSON.parse(await readFileAsync(filePath) as string)
    }
    return $adaptersRegistry
};

export const registerAdapter = async (manifestObj: AdapterManifest) => {
    $adaptersRegistry[manifestObj.app_id] = manifestObj
    await persistAdapters()
};

export const unRegisterAdapter = async (adapterId: string) => {
    delete $adaptersRegistry[adapterId]
    await persistAdapters()
};

export const getAdapter = (key: string) => {
    if (!['number', 'string'].includes(typeof key)) {
        return null
    }
    return $adaptersRegistry[key]
};

export const getAdapters = () => {
    return $adaptersRegistry
};

export const getAdapterRepoFilePath = (): string => {
    const filePath: string = path.resolve(path.dirname(process.mainModule.filename), adaptersRegistryFilename)
    return filePath
}