import { ChannelNames } from "../../../ipc/ChannelNames"
import { ipcRenderer } from "electron"
import { IOpenAdapterConfigWindowResp } from "../../../server/dataAdapters/dataAdaptersIpcManager"

export const configureDataAdapter = async (adapterId: string): Promise<{ err?: string }> => {
    return new Promise(function (resolve, reject) {
        ipcRenderer.send('' + ChannelNames.openAdapterConfigWindow, adapterId)
        ipcRenderer.once('' + ChannelNames.openAdapterConfigWindowResp, (event, obj: IOpenAdapterConfigWindowResp) => {
            resolve(obj)
        })
    })
}