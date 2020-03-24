import { app, BrowserWindow, ipcMain } from 'electron'
import path from "path";
import { ChannelNames } from './ipc/ChannelNames'
import { openVizPluginsEditor, openVizPluginsEditorIPCListener, registerVizPluginFromDialogIPCListener, getVizPluginNamesIPCListener } from './server/vizComp/vizPluginEditorManager';

let win: BrowserWindow;
let vizPluginsEditorWin: BrowserWindow

const onAppReady = () => {
    createWindow()
    openVizPluginsEditor(vizPluginsEditorWin)
}

const createWindow = () => {
    win = new BrowserWindow({
        width: 1340,
        height: 750,
        webPreferences: {
            nodeIntegration: true, webSecurity: false
        }
    })
    win.loadURL(`file://${path.resolve(path.dirname(process.mainModule.filename), 'client.html')}`)
    win.on("closed", () => {
        win = null
    })
}

ipcMain.on('' + ChannelNames.openVizPluginsEditor, openVizPluginsEditorIPCListener(vizPluginsEditorWin))
ipcMain.on('' + ChannelNames.registerVizPluginFromDialog, registerVizPluginFromDialogIPCListener())
ipcMain.on('' + ChannelNames.getVizPluginNames, getVizPluginNamesIPCListener())

app.on("ready", onAppReady)