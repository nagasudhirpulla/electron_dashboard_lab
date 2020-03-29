import React from 'react'
import { useForm, Controller } from "react-hook-form";
import { IDummyMeasurement } from '../type_defs/IDummyMeasurement';
import { TimePeriodEditor } from '../../Time/components/TimePeriodEditor/TimePeriodEditor';

export const DummyMeasEditor: React.FC<{ value: IDummyMeasurement, onChange: (m: IDummyMeasurement) => void }> = ({ value, onChange }) => {
    const { register, watch, control } = useForm({ defaultValues: { ...value } })
    const onValChanged = () => {
        if (onChange) {
            const val = watch({ nest: true })
            onChange(val as IDummyMeasurement)
        }
    }

    return <>
        <span>Measurement Id{" "}</span>
        <input
            type="text"
            name={`meas_id`}
            onChange={onValChanged}
            ref={register}
        />
        <br /><br />

        <span>{"Value 1 "}</span>
        <input
            type="number"
            name={`value1`}
            onChange={onValChanged}
            ref={register}
        />

        <span>{"    Value 2 "}</span>
        <input
            type="number"
            name={`value2`}
            onChange={onValChanged}
            ref={register}
        />
        <br /><br />

        <span>Periodicity</span>
        <Controller as={<TimePeriodEditor />}
            name="periodicity"
            control={control}
            onChange={([selected]) => { return selected }} />
    </>
}