import { BrowserWindow, BrowserView, IpcMainEvent } from "electron"
import path from 'path'
import { ChannelNames } from "../../ipc/ChannelNames"
import { registerVizPluginFromDialog } from "./commands/registerVizPluginFromDialog"
import { getVizPluginNames } from "./queries/getVizPluginNames"
import { deRegisterVizPlugin } from "./commands/deRegisterVizPlugin"
import { openVizPluginsEditor } from "./commands/openVizPluginsEditor"
import { getVizPluginScript } from "./queries/getVizPluginScript"

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

export type IGetVizPluginScriptResp = string
export const getVizPluginScriptIPCListener = () => {
    return (event: IpcMainEvent, name: string) => {
        (async function () {
            const pluginScript = await getVizPluginScript(name)
            // console.log(names)
            event.reply('' + ChannelNames.getVizPluginScriptResp, pluginScript as IGetVizPluginScriptResp)
        })()
    }
}