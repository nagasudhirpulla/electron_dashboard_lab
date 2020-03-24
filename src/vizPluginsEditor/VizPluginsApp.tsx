import React, { Component, useEffect, useState } from 'react';
import { ipcRenderer } from 'electron';
import { ChannelNames } from '../ipc/ChannelNames';
import { IPluginNamesResp, IRegisterVizPluginFromDialogResp } from '../server/vizComp/vizPluginEditorManager';

export interface IVizPluginsListItem {
    name: string,
}

export interface IVizPluginsAppProps {
    adapters: IVizPluginsListItem[]
}

const loadVizPlugins = async (): Promise<IVizPluginsListItem[]> => {
    return new Promise(function (resolve, reject) {
        ipcRenderer.send('' + ChannelNames.getVizPluginNames, 'ping')
        ipcRenderer.once('' + ChannelNames.getVizPluginNamesResp, (event, obj: IPluginNamesResp) => {
            let vizPluginsList: IVizPluginsListItem[] = []
            for (let pluginInd = 0; pluginInd < obj.length; pluginInd++) {
                vizPluginsList.push({ 'name': obj[pluginInd] })
            }
            resolve(vizPluginsList)
        })
    })
}

const addVizPluginFromDialog = async (): Promise<string> => {
    return new Promise(function (resolve, reject) {
        ipcRenderer.send('' + ChannelNames.registerVizPluginFromDialog, 'ping')
        ipcRenderer.once('' + ChannelNames.registerVizPluginFromDialogResp, (event, obj: IRegisterVizPluginFromDialogResp) => {
            resolve(obj)
        })
    })
}

export const VizPluginsApp: React.FC<IVizPluginsAppProps> = (props: IVizPluginsAppProps) => {
    const [plugins, setPlugins] = useState([] as IVizPluginsListItem[])
    useEffect(() => {
        (async function () {
            setPlugins(await loadVizPlugins())
        })()
    }, [])

    const onAddVizPluginClick = async () => {
        const newPlugin = await addVizPluginFromDialog()
        setPlugins(await loadVizPlugins())
    }

    return <>
        <table>
            <tr>
                <td>Adapter Name</td>
                <td>Actions</td>
            </tr>
            {plugins.map(plugin =>
                <tr>
                    <td>{plugin.name}</td>
                    <td></td>
                </tr>
            )}
        </table>
        <button onClick={onAddVizPluginClick}>Add Visualization Plugin</button>
    </>
}