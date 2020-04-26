import React from 'react'
import { DummyMeasurement } from '../DummyMeasurement';
import { DummyMeasEditor } from './DummyMeasEditor';
import { EquationMeasEditor } from './EquationMeasEditor';
import { IDummyMeasurement } from '../type_defs/IDummyMeasurement';
import { AdapterMeasurement } from '../AdapterMeasurement';
import { IAdapterMeasurement } from '../type_defs/IAdapterMeasurement';
import { AdapterMeasEditor } from './AdapterMeasEditor';
import { ApiMeasurement } from '../ApiMeasurement';
import { ApiMeasEditor } from './ApiMeasEditor';
import { IApiMeasurement } from '../type_defs/IApiMeasurement';
import { IMeasurementEditorProps } from '../type_defs/IMeasurementEditorProps';
import { EquationMeasurement } from '../EquationMeasurement';
import { IEquationMeasurement } from '../type_defs/IEquationMeasurement';

export const MeasurementEditor: React.FC<IMeasurementEditorProps> = ({ value, onChange }) => {
    if (value.discriminator == DummyMeasurement.typename) {
        return <DummyMeasEditor value={value as IDummyMeasurement} onChange={onChange} />
    }
    else if (value.discriminator == AdapterMeasurement.typename) {
        return <AdapterMeasEditor value={value as IAdapterMeasurement} onChange={onChange} />
    }
    else if (value.discriminator == ApiMeasurement.typename) {
        return <ApiMeasEditor value={value as IApiMeasurement} onChange={onChange} />
    }
    else if (value.discriminator == EquationMeasurement.typename) {
        return <EquationMeasEditor value={value as IEquationMeasurement} onChange={onChange} />
    }
    else {
        return <></>
    }
}