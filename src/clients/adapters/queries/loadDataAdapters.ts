import { AdaptersListItem } from "../AdaptersEditor"
import { ChannelNames } from "../../../ipc/ChannelNames"
import { ipcRenderer } from "electron"
import { IGetAdaptersListResp } from "../../../server/dataAdapters/dataAdaptersIpcManager"

export const loadDataAdapters = async (): Promise<AdaptersListItem[]> => {
    return new Promise(function (resolve, reject) {
        ipcRenderer.send('' + ChannelNames.getAdaptersList, 'ping')
        ipcRenderer.once('' + ChannelNames.getAdaptersListResp, (event, obj: IGetAdaptersListResp) => {
            resolve(obj.adapters.map(o => ({ name: o.name, adapter_id: o.app_id })))
        })
    })
}