import { IElectronDashboardState } from "../../../clients/client/ElectronDashboard/type_defs/IDashboardState";
import { getFilePathFromDialog } from "../../utils/fileUtils";
import { openDashboard } from "./openDashboard";

export const openDashboardFromDialog = async (): Promise<IElectronDashboardState> => {
    // get the user selected folder path
    const filePath = await getFilePathFromDialog('Select Dashboard', [
        { name: 'E-Dash', extensions: ['edash'] },
        { name: 'JSON', extensions: ['json'] },
        { name: 'All Files', extensions: ['*'] }
    ])
    if (filePath == null) {
        return null
    }
    return openDashboard(filePath)
}
