import { BrowserWindow, BrowserView, IpcMainEvent } from "electron"
import path from 'path'
import { registerVizPluginFromDialog, getVizPluginNames } from "./vizPluginsLibrary"
import { ChannelNames } from "../../ipc/ChannelNames"

export const openVizPluginsEditor = (vizPluginsEditorWin: BrowserWindow): BrowserWindow => {
    if (vizPluginsEditorWin != null) {
        vizPluginsEditorWin.reload()
        vizPluginsEditorWin.focus()
        return vizPluginsEditorWin
    }
    vizPluginsEditorWin = new BrowserWindow({
        width: 700,
        height: 500,
        webPreferences: {
            nodeIntegration: true, webSecurity: false
        }
    })
    vizPluginsEditorWin.loadURL(`file://${path.resolve(path.dirname(process.mainModule.filename), 'vizPluginsEditor.html')}`)
    vizPluginsEditorWin.on("closed", () => {
        vizPluginsEditorWin = null
    })
    return vizPluginsEditorWin
}

export const openVizPluginsEditorIPCListener = (vizPluginsEditorWin: BrowserWindow) => {
    return (event: IpcMainEvent, arg: any) => {
        vizPluginsEditorWin = openVizPluginsEditor(vizPluginsEditorWin)
    }
}

export type IRegisterVizPluginFromDialogResp = string
export const registerVizPluginFromDialogIPCListener = () => {
    return (event: IpcMainEvent, arg: any) => {
        (async function () {
            const plugin: IRegisterVizPluginFromDialogResp = await registerVizPluginFromDialog()
            event.reply('' + ChannelNames.registerVizPluginFromDialogResp, plugin)
        })()

    }
}

export type IPluginNamesResp = string[]
export const getVizPluginNamesIPCListener = () => {
    return (event: IpcMainEvent, arg: any) => {
        (async function () {
            const names: IPluginNamesResp = await getVizPluginNames()
            // console.log(names)
            event.reply('' + ChannelNames.getVizPluginNamesResp, names)
        })()
    }
}