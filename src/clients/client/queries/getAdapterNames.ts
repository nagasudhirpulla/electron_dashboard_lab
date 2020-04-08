import { ipcRenderer } from "electron"
import { ChannelNames } from "../../../ipc/ChannelNames"
import { IGetAdaptersListResp } from "../../../server/dataAdapters/dataAdaptersIpcManager"

export const getAdapterNames = async (): Promise<string[]> => {
    return new Promise(function (resolve, reject) {
        ipcRenderer.send('' + ChannelNames.getAdaptersList, 'ping')
        ipcRenderer.once('' + ChannelNames.getAdaptersListResp, (event, obj: IGetAdaptersListResp) => {
            resolve(obj.adapters.map(o => (o.name)))
        })
    })
}