import { ipcRenderer } from "electron";
import { ChannelNames } from "../../../ipc/ChannelNames";
import { IAddDataAdapterResp } from "../../../server/dataAdapters/dataAdaptersIpcManager";
import { IAdapterManifest } from "../../../server/dataAdapters/type_defs/IAdapterManifest";

export const addDataAdapterFromDialog = async (): Promise<IAdapterManifest> => {
    return new Promise(function (resolve, reject) {
        ipcRenderer.send('' + ChannelNames.addDataAdapter, 'ping')
        ipcRenderer.once('' + ChannelNames.addDataAdapterResp, (event, obj: IAddDataAdapterResp) => {
            resolve(obj.newAdapter)
        })
    })
}