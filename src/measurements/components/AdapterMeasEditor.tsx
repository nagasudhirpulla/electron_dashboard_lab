import React from 'react'
import { IAdapterMeasurement } from '../type_defs/IAdapterMeasurement';
import { ipcRenderer } from 'electron';
import { ChannelNames } from '../../ipc/ChannelNames';
import { ISelectedMeas } from '../../server/dataAdapters/dataAdaptersIpcManager';
import { TimePeriodEditor } from '../../Time/components/TimePeriodEditor/TimePeriodEditor';

export const AdapterMeasEditor: React.FC<{ value: IAdapterMeasurement, onChange: (m: IAdapterMeasurement) => void }> = ({ value, onChange }) => {
    const propVal = { ...value }
    const onInpValChanged = (ev: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            const newVal = ev.target.type == 'checkbox' ? ev.target.checked : ev.target.value
            onChange({ ...propVal, [`${ev.target.name}`]: newVal })
        }
    }

    const onValChanged = (name: string, val: {}) => {
        if (onChange) {
            onChange({ ...propVal, [`${name}`]: val })
        }
    }

    const onMeasPickerClick = () => {
        ipcRenderer.send('' + ChannelNames.openAdapterMeasPicker, { measName: name, adapterId: propVal.adapter_id })
    }

    ipcRenderer.once('' + ChannelNames.selectedMeas, (event, resp: ISelectedMeas) => {
        if (resp.measName != name) {
            return;
        }
        if (resp.err != undefined) {
            console.log(resp.err);
            return;
        }
        console.log(`Obtained adapter meas from picker is ${resp.measInfo}`)
        // set the measurement Id and measurement name
        onChange({ ...propVal, 'meas_id': resp.measInfo[0] })
    });

    return <>
        <span>Measurement Id{' '}</span>
        <input
            type='text'
            name='meas_id'
            value={propVal.meas_id}
            onChange={onInpValChanged}
        />
        <button type='button' onClick={onMeasPickerClick}>...</button>
        <br />

        <span><b>Sample Frequency</b></span>
        <TimePeriodEditor
            value={propVal.periodicity}
            onChange={(t) => { onValChanged('periodicity', t) }} />
    </>
}