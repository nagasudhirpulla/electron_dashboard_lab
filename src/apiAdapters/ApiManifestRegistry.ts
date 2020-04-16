import { IApiManifest } from "./type_defs/IApiManifest"

let $apiAdaptersRegistry: { [key: string]: IApiManifest } = {}

export const getApiAdaptersRegistry = (): { [key: string]: IApiManifest } => {
    return $apiAdaptersRegistry
}

export const setApiAdaptersRegistry = (inp: { [key: string]: IApiManifest }) => {
    $apiAdaptersRegistry = inp;
}