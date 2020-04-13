import { IpcMainEvent } from "electron"
import { IAdapterManifest } from "./type_defs/IAdapterManifest"
import { ChannelNames } from "../../ipc/ChannelNames"
import { getAdaptersRegistry } from "./dataAdaptersRegistry"
import { registerPlugin } from "./commands/registerPluginCommand"
import { unRegisterPlugin } from "./commands/unRegisterPluginCommand"
import { updatePlugin } from "./commands/updatePluginCommand"
import { fetchFromAdapter, fetchMeasDataFromAdapter } from "./queries/fetchFromAdapterQuery"
import { getAdapterManifest } from "./queries/getAdapterManifestQuery"
import { openDataAdaptersEditor } from "./commands/openDataAdaptersEditor"
import { IAdapterMeasurement } from "../../measurements/type_defs/IAdapterMeasurement"
import { IMeasData } from "../../clients/client/type_defs/dashboard/IMeasData"

export const openDataAdaptersEditorIPCListener = () => {
    return (event: IpcMainEvent, arg: any[]) => {
        openDataAdaptersEditor()
    }
}

export interface IGetAdaptersListResp { adapters: IAdapterManifest[] }
export const getAdaptersListIPCListener = () => {
    return (event: IpcMainEvent, inpObj: any[]) => {
        const adapters: IAdapterManifest[] = Object.values(getAdaptersRegistry())
        event.reply('' + ChannelNames.getAdaptersListResp, { adapters: adapters } as IGetAdaptersListResp)
    }
}

export interface IAddDataAdapterResp { newAdapter: IAdapterManifest }
export const addDataAdapterIPCListener = () => {
    return (event: IpcMainEvent, inpObj: any[]) => {
        (async function () {
            const newAdapter = await registerPlugin()
            event.reply('' + ChannelNames.addDataAdapterResp, { newAdapter: newAdapter } as IAddDataAdapterResp)
        })()
    }
}

export interface IDeleteDataAdapterResp { isSuccess: boolean }
export const deleteDataAdapterIPCListener = () => {
    return (event: IpcMainEvent, adapterId: string) => {
        (async function () {
            const isSuccess = await unRegisterPlugin(adapterId)
            event.reply('' + ChannelNames.deleteDataAdapterResp, { isSuccess: isSuccess } as IDeleteDataAdapterResp)
        })()
    }
}

export interface IUpdateDataAdapterResp { adapter: IAdapterManifest }
export const updateDataAdapterIPCListener = () => {
    return (event: IpcMainEvent, adapterId: string) => {
        (async function () {
            const updatedAdapter: IAdapterManifest = await updatePlugin(adapterId)
            event.reply('' + ChannelNames.updateDataAdapterResp, { adapter: updatedAdapter } as IUpdateDataAdapterResp)
        })()
    }
}

export type IGetAdapterDataResp = IMeasData
export type IGetAdapterDataReq = { meas: IAdapterMeasurement, fromTime: Date, toTime: Date }
export const getAdapterDataIPCListener = () => {
    return (event: IpcMainEvent, { meas, fromTime, toTime }: IGetAdapterDataReq) => {
        (async function () {
            const resp = await fetchMeasDataFromAdapter(meas, fromTime, toTime)
            event.reply('' + ChannelNames.getAdapterDataResp, resp as IGetAdapterDataResp)
        })()
    }
}

export interface ISelectedMeas { err?: string, measInfo: any, measName: string }
export const openAdapterMeasPickerIPCListener = () => {
    return (event: IpcMainEvent, args: { adapterId: string, measName: string }) => {
        (async function () {
            const adapter: IAdapterManifest = getAdapterManifest(args.adapterId)
            if (adapter == undefined || adapter == null) {
                event.reply('' + ChannelNames.selectedMeas, { err: "This data adapter is not present. Please reload or check adapters list...", measName: args.measName } as ISelectedMeas)
                return
            }
            else if (adapter.is_meas_picker_present == false) {
                event.reply('' + ChannelNames.selectedMeas, { err: "Measurement picker is not supported in this adapter...", measName: args.measName } as ISelectedMeas)
                return
            }
            const cmdParams: string[] = ["--show_meas_picker"]
            const resp = await fetchFromAdapter(args.adapterId, cmdParams)
            event.reply('' + ChannelNames.selectedMeas, { measInfo: JSON.parse(resp), measName: args.measName } as ISelectedMeas)
        })()
    }
}

export interface IOpenAdapterConfigWindowResp { err?: string }
export const openAdapterConfigWindowIPCListener = () => {
    return (event: IpcMainEvent, adapterId: string) => {
        (async function () {
            const adapter: IAdapterManifest = getAdapterManifest(adapterId)
            if (adapter == undefined || adapter == null) {
                event.reply('' + ChannelNames.openAdapterConfigWindowResp, { err: "This data adapter is not present. Please reload or check adapters list..." } as IOpenAdapterConfigWindowResp)
                return
            }
            else if (adapter.is_meas_picker_present == false) {
                event.reply('' + ChannelNames.openAdapterConfigWindowResp, { err: "Adapter Configuration window is not supported in this adapter..." } as IOpenAdapterConfigWindowResp)
                return
            }
            const cmdParams: string[] = ["--config_adapter"]
            const resp = await fetchFromAdapter(adapterId, cmdParams)
            event.reply('' + ChannelNames.openAdapterConfigWindowResp, {} as IOpenAdapterConfigWindowResp)
        })()
    }
}
