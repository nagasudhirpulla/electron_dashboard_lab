import React from 'react'
import { useForm } from "react-hook-form";
import { IAdapterMeasurement } from '../type_defs/IAdapterMeasurement';
import { ipcRenderer } from 'electron';
import { ChannelNames } from '../../ipc/ChannelNames';

export const AdapterMeasEditor: React.FC<{ value: IAdapterMeasurement, onChange: (m: IAdapterMeasurement) => void }> = ({ value, onChange }) => {
    const { register, watch, setValue } = useForm({ defaultValues: { ...value } })
    const onValChanged = () => {
        if (onChange) {
            const val = watch({ nest: true })
            onChange({ ...value, ...val } as IAdapterMeasurement)
        }
    }

    const onMeasPickerClick = () => {
        ipcRenderer.send('' + ChannelNames.openAdapterMeasPicker, { measName: name, adapterId: value.adapter_id })
    }

    ipcRenderer.once('' + ChannelNames.selectedMeas, (event, resp: { err?: string, measInfo: string[], measName: string }) => {
        if (resp.measName != name) {
            return;
        }
        if (resp.err != undefined) {
            console.log(resp.err);
            return;
        }
        console.log(`Obtained adapter meas from picker is ${resp.measInfo}`) // prints "pong"
        // set the measurement Id and measurement name
        setValue('meas_id', resp.measInfo[0])
        onValChanged()
    });

    return <>
        <span>Measurement Id{" "}</span>
        <input
            type="text"
            name={`meas_id`}
            onChange={onValChanged}
            ref={register}
        />
        <button type="button" onClick={onMeasPickerClick}>...</button>
        <br />
    </>
}