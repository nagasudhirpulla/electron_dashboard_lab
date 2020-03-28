import { ipcRenderer } from "electron"
import { ChannelNames } from "../../../ipc/ChannelNames"
import { IPluginNamesResp, IGetVizPluginScriptResp } from "../../../server/vizPlugins/vizPluginsIPCManager"

export const getVizPluginScript = async (name: string): Promise<string> => {
    return new Promise(function (resolve, reject) {
        ipcRenderer.send('' + ChannelNames.getVizPluginScript, name)
        ipcRenderer.once('' + ChannelNames.getVizPluginScriptResp, (event, obj: IGetVizPluginScriptResp) => {
            resolve(obj)
        })
    })
}