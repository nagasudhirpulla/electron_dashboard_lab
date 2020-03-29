const showOpenDialog = require('electron').dialog.showOpenDialog

export const getExtPluginFoldPathFromDialog = async (): Promise<string> => {
    const dialogRes = await showOpenDialog({
        properties: ['openDirectory'],
        title: 'Select New Plugin Folder'
    }) as any
    let pluginExternFoldPath: string = null
    // console.log(dialogRes)
    if (dialogRes.canceled == true) {
        return null
    }
    else if (dialogRes.filePaths.length == 0) {
        return null
    }
    else {
        pluginExternFoldPath = dialogRes.filePaths[0]
    }
    // console.log(pluginExternFoldPath);
    return pluginExternFoldPath
}