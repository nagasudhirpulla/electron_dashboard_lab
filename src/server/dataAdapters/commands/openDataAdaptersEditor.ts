import { IpcMainEvent, BrowserWindow } from "electron"
import { getDataAdaptersEditorWin, setDataAdaptersEditorWin } from "../../../main"
import path from 'path'

export const openDataAdaptersEditor = () => {
    return (event: IpcMainEvent, arg: any[]) => {
        let dataAdaptersEditorWin = getDataAdaptersEditorWin()
        if (dataAdaptersEditorWin != null) {
            dataAdaptersEditorWin.reload()
            dataAdaptersEditorWin.focus()
            return
        }
        dataAdaptersEditorWin = new BrowserWindow({
            width: 450,
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
}