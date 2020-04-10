import React from 'react'
import { IDummyMeasurement } from '../type_defs/IDummyMeasurement';
import { TimePeriodEditor } from '../../Time/components/TimePeriodEditor/TimePeriodEditor';

export const DummyMeasEditor: React.FC<{ value: IDummyMeasurement, onChange: (m: IDummyMeasurement) => void }> = ({ value, onChange }) => {
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
    
    return <>
        <span>{'Value 1 '}</span>
        <input
            type='number'
            name='value1'
            value={propVal.value1}
            onChange={onInpValChanged}
        />

        <span>{'    Value 2 '}</span>
        <input
            type='number'
            name='value2'
            value={propVal.value2}
            onChange={onInpValChanged}
        />
        <br /><br />

        <span>Periodicity</span>
        <TimePeriodEditor
            value={propVal.periodicity}
            onChange={(t) => { onValChanged('periodicity', t) }} />
    </>
}