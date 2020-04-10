import { IpcMainEvent } from "electron"
import { IDashboardState } from "../../clients/client/type_defs/dashboard/IDashboardState"
import { ChannelNames } from "../../ipc/ChannelNames"
import { openDashboardFromDialog } from "./commands/openDashboardFromDialog"

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