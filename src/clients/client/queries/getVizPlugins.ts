import { ipcRenderer } from "electron"
import { ChannelNames } from "../../../ipc/ChannelNames"
import { IPluginNamesResp } from "../../../server/vizPlugins/vizPluginsIPCManager"

export const getVizPlugins = async (): Promise<string[]> => {
    return new Promise(function (resolve, reject) {
        ipcRenderer.send('' + ChannelNames.getVizPluginNames, 'ping')
        ipcRenderer.once('' + ChannelNames.getVizPluginNamesResp, (event, obj: IPluginNamesResp) => {
            resolve(obj)
        })
    })
}