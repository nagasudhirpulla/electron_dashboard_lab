import { ChannelNames } from "../../../ipc/ChannelNames"
import { ipcRenderer } from "electron"
import { IDeleteDataAdapterResp } from "../../../server/dataAdapters/dataAdaptersIpcManager"

export const deleteDataAdapter = async (adapterId: string): Promise<boolean> => {
    return new Promise(function (resolve, reject) {
        ipcRenderer.send('' + ChannelNames.deleteDataAdapter, adapterId)
        ipcRenderer.once('' + ChannelNames.deleteDataAdapterResp, (event, obj: IDeleteDataAdapterResp) => {
            resolve(obj.isSuccess)
        })
    })
}