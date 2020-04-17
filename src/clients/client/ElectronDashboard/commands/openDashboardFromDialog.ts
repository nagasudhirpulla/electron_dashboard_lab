import { IElectronDashboardState } from "../type_defs/IDashboardState"
import { ipcRenderer } from "electron"
import { ChannelNames } from "../../../../ipc/ChannelNames"
import { IOpenDashboardFromDialogResp } from "../../../../server/dashboard/dashboardIpcManager"

export const openDashboardFromDialog = async (): Promise<IElectronDashboardState> => {
    return new Promise(function (resolve, reject) {
        ipcRenderer.send('' + ChannelNames.openDashboardFromDialog, 'ping')
        ipcRenderer.once('' + ChannelNames.openDashboardFromDialogResp, (event, obj: IOpenDashboardFromDialogResp) => {
            resolve(obj.dashboard)
        })
    })
}