import { dialog } from 'electron'
import { writeFileAsync } from '../../utils/fileUtils'
import { IDashboardState } from '../../../clients/client/type_defs/dashboard/IDashboardState'

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
        const fileContents = JSON.stringify(stripDataFromAppState({ ...state, timer: { isOn: false, start: 0, busy: false } }), null, 2)
        const isSaved = await writeFileAsync(saveFilename, fileContents)
        console.log(`Save status = ${isSaved}`)
        return isSaved
    }
    return false
}

const stripDataFromAppState = (state: IDashboardState): IDashboardState => {
    const dataStrippedWidgetProps = state.widgetProps.map(wp => {
        return { ...wp, data: {} }
    })
    let newState = { ...state, widgetProps: dataStrippedWidgetProps }
    return newState
}