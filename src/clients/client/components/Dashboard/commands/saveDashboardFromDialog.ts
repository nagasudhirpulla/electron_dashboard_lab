
import { IDashboardState } from "../../../type_defs/dashboard/IDashboardState"
import { ipcRenderer } from "electron"
import { ChannelNames } from "../../../../../ipc/ChannelNames"
import { ISaveDashboardFromDialogResp } from "../../../../../server/dashboard/dashboardIpcManager"

export const saveDashboardFromDialog = async (state: IDashboardState): Promise<boolean> => {
    return new Promise(function (resolve, reject) {
        ipcRenderer.send('' + ChannelNames.saveDashboardFromDialog, state)
        ipcRenderer.once('' + ChannelNames.saveDashboardFromDialogResp, (event, obj: ISaveDashboardFromDialogResp) => {
            resolve(obj.isSuccess)
        })
    })
}