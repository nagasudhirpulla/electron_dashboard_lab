import { IpcMainEvent, BrowserWindow } from "electron"
import { getDataAdaptersEditorWin, setDataAdaptersEditorWin } from "../../../main"
import path from 'path'

export const openDataAdaptersEditor = (): void => {
    let dataAdaptersEditorWin = getDataAdaptersEditorWin()
    if (dataAdaptersEditorWin != null && !dataAdaptersEditorWin.isDestroyed) {
        dataAdaptersEditorWin.reload()
        dataAdaptersEditorWin.focus()
        return
    }
    dataAdaptersEditorWin = new BrowserWindow({
        width: 600,
        height: 500,
        webPreferences: {
            nodeIntegration: true, webSecurity: false
        }
    })
    dataAdaptersEditorWin.loadURL(`file://${path.resolve(path.dirname(process.mainModule.filename), 'adapters.html')}`)
    dataAdaptersEditorWin.on("closed", () => {
        dataAdaptersEditorWin = null
    })
    setDataAdaptersEditorWin(dataAdaptersEditorWin)
}