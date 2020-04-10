
import { IDashboardState } from "../../../type_defs/dashboard/IDashboardState"
import { ipcRenderer } from "electron"
import { ChannelNames } from "../../../../../ipc/ChannelNames"
import { IOpenDashboardFromDialogResp } from "../../../../../server/dashboard/dashboardIpcManager"

export const saveDashboardFromDialog = async (): Promise<IDashboardState> => {
    return new Promise(function (resolve, reject) {
        ipcRenderer.send('' + ChannelNames.saveDashboardFromDialog, 'ping')
        ipcRenderer.once('' + ChannelNames.saveDashboardFromDialogResp, (event, obj: ISaveDashboardFromDialogResp) => {
            resolve(obj.isSuccess)
        })
    })
}