import { IVizPluginsListItem } from "../VizPluginsEditor"
import { ipcRenderer } from "electron"
import { ChannelNames } from "../../../ipc/ChannelNames"
import { IPluginNamesResp } from "../../../server/vizPlugins/vizPluginsEditorIPCManager"

export const loadVizPlugins = async (): Promise<IVizPluginsListItem[]> => {
    return new Promise(function (resolve, reject) {
        ipcRenderer.send('' + ChannelNames.getVizPluginNames, 'ping')
        ipcRenderer.once('' + ChannelNames.getVizPluginNamesResp, (event, obj: IPluginNamesResp) => {
            resolve(obj.map(o => ({ name: o })))
        })
    })
}