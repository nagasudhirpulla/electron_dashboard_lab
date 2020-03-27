import React, { useEffect, useState } from 'react';
import { loadVizPlugins } from './queries/loadVizPlugins';
import { addVizPluginFromDialog } from './commands/addVizPluginFromDialog';
import { deleteVizPlugin } from './commands/deleteVizPlugin';

export interface IVizPluginsListItem {
    name: string,
}

export interface IVizPluginsAppProps {
    adapters: IVizPluginsListItem[]
}

export const VizPluginsEditor: React.FC<IVizPluginsAppProps> = (props: IVizPluginsAppProps) => {
    const [plugins, setPlugins] = useState([] as IVizPluginsListItem[])
    useEffect(() => {
        (async function () {
            setPlugins(await loadVizPlugins())
        })()
    }, [])

    const onAddVizPluginClick = async () => {
        const newPlugin = await addVizPluginFromDialog()
        console.log(`new visualization plugin ${newPlugin} registered`)
        setPlugins(await loadVizPlugins())
    }

    const onDeleteVizPluginClick = (plugin: IVizPluginsListItem) => {
        return () => {
            (async function () {
                if (confirm(`Delete Plugin ${plugin.name}?`)) {
                    const isSuccess = await deleteVizPlugin(plugin.name)
                    console.log(`delete visualization plugin ${plugin.name} result = ${isSuccess}`)
                    setPlugins(await loadVizPlugins())
                }
            })()
        }
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
                    <td>
                        <button onClick={onDeleteVizPluginClick(plugin)}>Delete Plugin</button>
                    </td>
                </tr>
            )}
        </table>
        <button onClick={onAddVizPluginClick}>Add Visualization Plugin</button>
    </>
}