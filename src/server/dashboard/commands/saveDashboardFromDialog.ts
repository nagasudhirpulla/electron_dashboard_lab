import { dialog } from 'electron'
import { writeFileAsync } from '../../utils/fileUtils'
import { IDashboardState } from '../../../clients/client/components/ElectronDashboard/type_defs/IDashboardState'

export const saveDashboardFromDialog = async (state: IDashboardState): Promise<boolean> => {
    const dialogRes = await dialog.showSaveDialog({
        filters: [
            { name: 'E-Dash', extensions: ['edash'] },
            { name: 'JSON', extensions: ['json'] },
            { name: 'All Files', extensions: ['*'] }
        ],
        title: 'Save Dashboard File'
    })
    if (!(dialogRes.canceled == true)) {
        const saveFilename: string = dialogRes.filePath
        console.log(`Saving state to ${saveFilename}`)
        const fileContents = JSON.stringify({ ...state, timer: { isOn: false, start: 0, busy: false } }, null, 2)
        const isSaved = await writeFileAsync(saveFilename, fileContents)
        console.log(`Save status = ${isSaved}`)
        return isSaved
    }
    return false
}