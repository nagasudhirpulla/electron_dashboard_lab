import React from 'react'
import { DummyMeasurement } from '../DummyMeasurement';
import { DummyMeasEditor } from './DummyMeasEditor';
import { IDummyMeasurement } from '../type_defs/IDummyMeasurement';
import { ApiMeasurement } from '../ApiMeasurement';
import { ApiMeasEditor } from './ApiMeasEditor';
import { IApiMeasurement } from '../type_defs/IApiMeasurement';
import { IMeasurementEditorProps } from '../type_defs/IMeasurementEditorProps';

export const WebMeasurementEditor: React.FC<IMeasurementEditorProps> = ({ value, onChange }) => {
    if (value.discriminator == DummyMeasurement.typename) {
        return <DummyMeasEditor value={value as IDummyMeasurement} onChange={onChange} />
    }
    else if (value.discriminator == ApiMeasurement.typename) {
        return <ApiMeasEditor value={value as IApiMeasurement} onChange={onChange} />
    }
    else {
        return <></>
    }
}