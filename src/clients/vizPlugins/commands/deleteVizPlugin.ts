import { ipcRenderer } from "electron"
import { ChannelNames } from "../../../ipc/ChannelNames"
import { IDeleteVizPluginResp } from "../../../server/vizPlugins/vizPluginsIPCManager"

export const deleteVizPlugin = async (name: string): Promise<boolean> => {
    return new Promise(function (resolve, reject) {
        ipcRenderer.send('' + ChannelNames.deleteVizPlugin, name)
        ipcRenderer.once('' + ChannelNames.deleteVizPluginResp, (event, obj: IDeleteVizPluginResp) => {
            resolve(obj)
        })
    })
}