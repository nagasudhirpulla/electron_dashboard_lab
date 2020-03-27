import { BrowserWindow, BrowserView, IpcMainEvent } from "electron"
import path from 'path'
import { registerVizPluginFromDialog, getVizPluginNames, deRegisterVizPlugin } from "./vizPluginsLibrary"
import { ChannelNames } from "../../ipc/ChannelNames"
import { getVizPluginsEditorWin, setVizPluginsEditorWin } from "../../main"

export const openVizPluginsEditor = (): void => {
    let vizPluginsEditorWin = getVizPluginsEditorWin()
    if (vizPluginsEditorWin != null && !vizPluginsEditorWin.isDestroyed) {
        vizPluginsEditorWin.reload()
        vizPluginsEditorWin.focus()
        return
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
    setVizPluginsEditorWin(vizPluginsEditorWin)
}

export const openVizPluginsEditorIPCListener = () => {
    return (event: IpcMainEvent, arg: any[]) => {
        openVizPluginsEditor()
    }
}

export type IRegisterVizPluginFromDialogResp = string
export const registerVizPluginFromDialogIPCListener = () => {
    return (event: IpcMainEvent, arg: any[]) => {
        (async function () {
            const plugin: IRegisterVizPluginFromDialogResp = await registerVizPluginFromDialog()
            event.reply('' + ChannelNames.registerVizPluginFromDialogResp, plugin)
        })()

    }
}

export type IPluginNamesResp = string[]
export const getVizPluginNamesIPCListener = () => {
    return (event: IpcMainEvent, arg: any[]) => {
        (async function () {
            const names: IPluginNamesResp = await getVizPluginNames()
            // console.log(names)
            event.reply('' + ChannelNames.getVizPluginNamesResp, names)
        })()
    }
}

export type IDeleteVizPluginResp = boolean
export const deleteVizPluginIPCListener = () => {
    return (event: IpcMainEvent, name: string) => {
        (async function () {
            const isSuccess = await deRegisterVizPlugin(name)
            event.reply('' + ChannelNames.deleteVizPluginResp, isSuccess as IDeleteVizPluginResp)
        })()
    }
}