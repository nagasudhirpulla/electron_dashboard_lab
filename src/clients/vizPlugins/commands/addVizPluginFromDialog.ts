import { ipcRenderer } from "electron"
import { ChannelNames } from "../../../ipc/ChannelNames"
import { IRegisterVizPluginFromDialogResp } from "../../../server/vizPlugins/vizPluginsEditorIPCManager"

export const addVizPluginFromDialog = async (): Promise<string> => {
    return new Promise(function (resolve, reject) {
        ipcRenderer.send('' + ChannelNames.registerVizPluginFromDialog, 'ping')
        ipcRenderer.once('' + ChannelNames.registerVizPluginFromDialogResp, (event, obj: IRegisterVizPluginFromDialogResp) => {
            resolve(obj)
        })
    })
}