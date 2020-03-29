import React, { useEffect, useState } from 'react';
import { ipcRenderer } from 'electron';
import merge from 'lodash.merge';
import { loadDataAdapters } from './queries/loadDataAdapters';
import { addDataAdapterFromDialog } from './commands/addDataAdapterFromDialog';
import { deleteDataAdapter } from './commands/deleteDataAdapter';
import { updateDataAdapterFromDialog } from './commands/updateDataAdapterFromDialog';
import { configureDataAdapter } from './commands/configureDataAdapter';

export interface AdaptersListItem {
    name: string,
    adapter_id: string
}

export interface AdaptersEditorProps {
    adapters: AdaptersListItem[]
}

export const AdaptersEditor: React.FC<AdaptersEditorProps> = (props: AdaptersEditorProps) => {
    const [plugins, setPlugins] = useState([] as AdaptersListItem[])
    useEffect(() => {
        (async function () {
            setPlugins(await loadDataAdapters())
        })()
    }, [])

    const onAddDataAdapterClick = async () => {
        const newAdapter = await addDataAdapterFromDialog()
        console.log(`new data adapter ${JSON.stringify(newAdapter)} registered`)
        setPlugins(await loadDataAdapters())
    }

    const onDeleteDataAdapterClick = (adapter: AdaptersListItem) => {
        return () => {
            (async function () {
                if (confirm(`Delete Data Adapter ${adapter.name}?`)) {
                    const isSuccess = await deleteDataAdapter(adapter.adapter_id)
                    console.log(`delete data adapter ${adapter.name} result = ${isSuccess}`)
                    setPlugins(await loadDataAdapters())
                }
            })()
        }
    }

    const onUpdateDataAdapterClick = (adapter: AdaptersListItem) => {
        return () => {
            (async function () {
                const updatedAdapter = await updateDataAdapterFromDialog(adapter.adapter_id)
                if (updatedAdapter == null) {
                    alert(`Update of adapter with id = ${updatedAdapter.app_id}, name=${updatedAdapter.name} failed...`);
                } else {
                    alert(`Update of adapter with id = ${updatedAdapter.app_id}, name=${updatedAdapter.name} is success!`);
                }
                setPlugins(await loadDataAdapters())
            })()
        }
    }

    const onConfigureDataAdapterClick = (adapter: AdaptersListItem) => {
        return () => {
            (async function () {
                const errObj = await configureDataAdapter(adapter.adapter_id)
                if (errObj.err) { alert(errObj.err) }
            })()
        }
    }

    return <>
        <table>
            <tr>
                <td>Adapter Name</td>
                <td>Adapter Id</td>
                <td>Actions</td>
            </tr>
            {plugins.map((plugin, pluginInd) =>
                <tr key={`plugin_${pluginInd}`}>
                    <td>{plugin.name}</td>
                    <td>{plugin.adapter_id}</td>
                    <td>
                        <button onClick={onConfigureDataAdapterClick(plugin)}>Configure</button>
                        <button onClick={onDeleteDataAdapterClick(plugin)}>Delete</button>
                        <button onClick={onUpdateDataAdapterClick(plugin)}>Update</button>
                    </td>
                </tr>
            )}
        </table>
        <button onClick={onAddDataAdapterClick}>Add Data Adapter</button>
    </>
}