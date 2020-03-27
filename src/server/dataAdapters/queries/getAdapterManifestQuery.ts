import { getAdaptersRegistry } from "../dataAdaptersRegistry";
import { AdapterManifest } from "../../type_defs/AdapterManifest";

export const getAdapterManifest = (key: string): AdapterManifest => {
    if (!['number', 'string'].includes(typeof key)) {
        return null
    }
    const adaptersRegistry = getAdaptersRegistry()
    return adaptersRegistry[key]
};