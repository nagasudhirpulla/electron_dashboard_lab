import { app, BrowserWindow, ipcMain } from 'electron'
import path from "path";
import { ChannelNames } from './ipc/ChannelNames'
import { openVizPluginsEditorIPCListener, registerVizPluginFromDialogIPCListener, getVizPluginNamesIPCListener, deleteVizPluginIPCListener, getVizPluginScriptIPCListener } from './server/vizPlugins/vizPluginsIPCManager';
import { openDataAdaptersEditorIPCListener, getAdaptersListIPCListener, addDataAdapterIPCListener, deleteDataAdapterIPCListener, updateDataAdapterIPCListener, getAdapterDataIPCListener, openAdapterMeasPickerIPCListener, openAdapterConfigWindowIPCListener } from './server/dataAdapters/dataAdaptersIpcManager';
import { initAdaptersRegistry } from './server/dataAdapters/commands/initAdaptersRegistryCommand';
import { saveDashboardFromDialogIPCListener, openDashboardFromDialogIPCListener } from './server/dashboard/dashboardIpcManager';

let win: BrowserWindow
let vizPluginsEditorWin: BrowserWindow
export const getVizPluginsEditorWin = (): BrowserWindow => { return vizPluginsEditorWin }
export const setVizPluginsEditorWin = (win: BrowserWindow) => { vizPluginsEditorWin = win }
let dataAdaptersEditorWin: BrowserWindow
export const getDataAdaptersEditorWin = (): BrowserWindow => { return dataAdaptersEditorWin }
export const setDataAdaptersEditorWin = (win: BrowserWindow) => { dataAdaptersEditorWin = win }

const onAppReady = async () => {
    //initialize existing data adapters
    const _ = await initAdaptersRegistry()
    createWindow()
    // openVizPluginsEditor(vizPluginsEditorWin)
}

const createWindow = () => {
    win = new BrowserWindow({
        width: 1340,
        height: 750,
        webPreferences: {
            nodeIntegration: true, webSecurity: true
        }
    })
    win.loadURL(`file://${path.resolve(path.dirname(process.mainModule.filename), 'client.html')}`)
    win.on("closed", () => {
        win = null
    })
}

// Dashboard IPC listeners setup
ipcMain.on('' + ChannelNames.saveDashboardFromDialog, saveDashboardFromDialogIPCListener())
ipcMain.on('' + ChannelNames.openDashboardFromDialog, openDashboardFromDialogIPCListener())

// Viz Plugins IPC listeners setup
ipcMain.on('' + ChannelNames.openVizPluginsEditor, openVizPluginsEditorIPCListener())
ipcMain.on('' + ChannelNames.registerVizPluginFromDialog, registerVizPluginFromDialogIPCListener())
ipcMain.on('' + ChannelNames.getVizPluginNames, getVizPluginNamesIPCListener())
ipcMain.on('' + ChannelNames.deleteVizPlugin, deleteVizPluginIPCListener())
ipcMain.on('' + ChannelNames.getVizPluginScript, getVizPluginScriptIPCListener())

// Data Adapters IPC listeners setup
ipcMain.on('' + ChannelNames.openDataAdaptersEditor, openDataAdaptersEditorIPCListener())
ipcMain.on('' + ChannelNames.addDataAdapter, addDataAdapterIPCListener())
ipcMain.on('' + ChannelNames.getAdaptersList, getAdaptersListIPCListener())
ipcMain.on('' + ChannelNames.deleteDataAdapter, deleteDataAdapterIPCListener())
ipcMain.on('' + ChannelNames.updateDataAdapter, updateDataAdapterIPCListener())
ipcMain.on('' + ChannelNames.getAdapterData, getAdapterDataIPCListener())
ipcMain.on('' + ChannelNames.openAdapterMeasPicker, openAdapterMeasPickerIPCListener())
ipcMain.on('' + ChannelNames.openAdapterConfigWindow, openAdapterConfigWindowIPCListener())

app.on("ready", onAppReady)