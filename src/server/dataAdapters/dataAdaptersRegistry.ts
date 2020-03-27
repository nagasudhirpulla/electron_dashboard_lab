import { AdapterManifest } from "../type_defs/AdapterManifest"

let $adaptersRegistry: { [key: string]: AdapterManifest } = {}
export const adaptersRegistryFilename: string = 'adapter_register.json'

export const getAdaptersRegistry = (): { [key: string]: AdapterManifest } => {
    return $adaptersRegistry
}

export const setAdaptersRegistry = (inp: { [key: string]: AdapterManifest }) => {
    $adaptersRegistry = inp;
}