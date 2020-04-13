import { IAdapterManifest } from "./type_defs/IAdapterManifest"

let $adaptersRegistry: { [key: string]: IAdapterManifest } = {}
export const adaptersRegistryFilename: string = 'adapter_register.json'

export const getAdaptersRegistry = (): { [key: string]: IAdapterManifest } => {
    return $adaptersRegistry
}

export const setAdaptersRegistry = (inp: { [key: string]: IAdapterManifest }) => {
    $adaptersRegistry = inp;
}