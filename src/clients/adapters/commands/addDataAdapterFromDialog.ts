import { ipcRenderer } from "electron";
import { ChannelNames } from "../../../ipc/ChannelNames";
import { IAddDataAdapterResp } from "../../../server/dataAdapters/dataAdaptersIpcManager";
import { AdapterManifest } from "../../../server/type_defs/AdapterManifest";

export const addDataAdapterFromDialog = async (): Promise<AdapterManifest> => {
    return new Promise(function (resolve, reject) {
        ipcRenderer.send('' + ChannelNames.addDataAdapter, 'ping')
        ipcRenderer.once('' + ChannelNames.addDataAdapterResp, (event, obj: IAddDataAdapterResp) => {
            resolve(obj.newAdapter)
        })
    })
}