import { getAdaptersRegistry } from "../dataAdaptersRegistry";
import { IAdapterManifest } from "../type_defs/IAdapterManifest";

export const getAdapterManifest = (key: string): IAdapterManifest => {
    if (!['number', 'string'].includes(typeof key)) {
        return null
    }
    const adaptersRegistry = getAdaptersRegistry()
    return adaptersRegistry[key]
};