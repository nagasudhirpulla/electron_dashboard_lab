import { ipcRenderer } from "electron";
import { ChannelNames } from "../../../ipc/ChannelNames";
import { IUpdateDataAdapterResp } from "../../../server/dataAdapters/dataAdaptersIpcManager";
import { IAdapterManifest } from "../../../server/dataAdapters/type_defs/IAdapterManifest";

export const updateDataAdapterFromDialog = async (adapterId: string): Promise<IAdapterManifest> => {
    return new Promise(function (resolve, reject) {
        ipcRenderer.send('' + ChannelNames.updateDataAdapter, adapterId)
        ipcRenderer.once('' + ChannelNames.updateDataAdapterResp, (event, obj: IUpdateDataAdapterResp) => {
            resolve(obj.adapter)
        })
    })
}