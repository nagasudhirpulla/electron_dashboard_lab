import { IpcMainEvent } from "electron"
import { IDashboardState } from "../../clients/client/components/ElectronDashboard/type_defs/IDashboardState"
import { ChannelNames } from "../../ipc/ChannelNames"
import { openDashboardFromDialog } from "./commands/openDashboardFromDialog"
import { saveDashboardFromDialog } from "./commands/saveDashboardFromDialog"

export interface IOpenDashboardFromDialogResp { dashboard: IDashboardState }
export const openDashboardFromDialogIPCListener = () => {
    return (event: IpcMainEvent, inpObj: any[]) => {
        (async function () {
            const dashboard = await openDashboardFromDialog()
            // console.log(names)
            event.reply('' + ChannelNames.openDashboardFromDialogResp, { dashboard } as IOpenDashboardFromDialogResp)
        })()
    }
}

export interface ISaveDashboardFromDialogResp { isSuccess: boolean }
export const saveDashboardFromDialogIPCListener = () => {
    return (event: IpcMainEvent, state: IDashboardState) => {
        (async function () {
            const isSuccess = await saveDashboardFromDialog(state)
            // console.log(names)
            event.reply('' + ChannelNames.saveDashboardFromDialogResp, { isSuccess } as ISaveDashboardFromDialogResp)
        })()
    }
}