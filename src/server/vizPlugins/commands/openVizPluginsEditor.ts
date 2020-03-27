import { getVizPluginsEditorWin, setVizPluginsEditorWin } from "../../../main"
import { BrowserWindow } from "electron"
import path from 'path'

export const openVizPluginsEditor = (): void => {
    let vizPluginsEditorWin = getVizPluginsEditorWin()
    if (vizPluginsEditorWin != null && !vizPluginsEditorWin.isDestroyed) {
        vizPluginsEditorWin.reload()
        vizPluginsEditorWin.focus()
        return
    }
    vizPluginsEditorWin = new BrowserWindow({
        width: 700,
        height: 500,
        webPreferences: {
            nodeIntegration: true, webSecurity: false
        }
    })
    vizPluginsEditorWin.loadURL(`file://${path.resolve(path.dirname(process.mainModule.filename), 'vizPluginsEditor.html')}`)
    vizPluginsEditorWin.on("closed", () => {
        vizPluginsEditorWin = null
    })
    setVizPluginsEditorWin(vizPluginsEditorWin)
}