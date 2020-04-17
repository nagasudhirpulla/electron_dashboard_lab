import React from 'react'
import { TimePeriodEditor } from '../../Time/components/TimePeriodEditor/TimePeriodEditor';
import { ResamplingStrategy } from '../ResamplingStrategy';
import { IApiMeasurement } from '../type_defs/IApiMeasurement';

export const ApiMeasEditor: React.FC<{ value: IApiMeasurement, onChange: (m: IApiMeasurement) => void }> = ({ value, onChange }) => {
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

    const onSelValChanged = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            const newVal = ev.target.value
            onChange({ ...propVal, [`${ev.target.name}`]: newVal })
        }
    }

    return <>
        <span>Measurement Id{' '}</span>
        <input
            type='text'
            name='meas_id'
            value={propVal.meas_id}
            onChange={onInpValChanged}
        />
        <br />

        <span><b>Sample Frequency</b></span>
        <TimePeriodEditor
            value={propVal.periodicity}
            onChange={(t) => { onValChanged('periodicity', t) }} />

        <br />
        <span><b>Sampling Mode{' '}</b></span>
        <select
            name={`resampling_strategy`}
            onChange={onSelValChanged}
            value={propVal.resampling_strategy}
        >
            <option value={ResamplingStrategy.Raw}>Raw</option>
            <option value={ResamplingStrategy.Average}>Average</option>
            <option value={ResamplingStrategy.Max}>Maximum</option>
            <option value={ResamplingStrategy.Min}>Minimum</option>
            <option value={ResamplingStrategy.Interpolated}>Interpolated</option>
        </select>
    </>
}