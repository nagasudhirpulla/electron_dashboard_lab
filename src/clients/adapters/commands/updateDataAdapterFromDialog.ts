import { ipcRenderer } from "electron";
import { ChannelNames } from "../../../ipc/ChannelNames";
import { IUpdateDataAdapterResp } from "../../../server/dataAdapters/dataAdaptersIpcManager";
import { AdapterManifest } from "../../../server/type_defs/AdapterManifest";

export const updateDataAdapterFromDialog = async (adapterId: string): Promise<AdapterManifest> => {
    return new Promise(function (resolve, reject) {
        ipcRenderer.send('' + ChannelNames.updateDataAdapter, adapterId)
        ipcRenderer.once('' + ChannelNames.updateDataAdapterResp, (event, obj: IUpdateDataAdapterResp) => {
            resolve(obj.adapter)
        })
    })
}