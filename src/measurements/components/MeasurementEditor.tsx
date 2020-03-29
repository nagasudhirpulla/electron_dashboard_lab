import React from 'react'
import { IMeasurement } from '../type_defs/IMeasurement';
import { DummyMeasurement } from '../DummyMeasurement';
import { DummyMeasEditor } from './DummyMeasEditor';
import { IDummyMeasurement } from '../type_defs/IDummyMeasurement';
import { AdapterMeasurement } from '../AdapterMeasurement';
import { IAdapterMeasurement } from '../type_defs/IAdapterMeasurement';
import { AdapterMeasEditor } from './AdapterMeasEditor';

export const MeasurementEditor: React.FC<{ value: IMeasurement, onChange: (m: IMeasurement) => void }> = ({ value, onChange }) => {
    if (value.discriminator == DummyMeasurement.typename) {
        return <DummyMeasEditor value={value as IDummyMeasurement} onChange={onChange} />
    }
    else if (value.discriminator == AdapterMeasurement.typename) {
        return <AdapterMeasEditor value={value as IAdapterMeasurement} onChange={onChange} />
    }
    else {
        return <></>
    }
}