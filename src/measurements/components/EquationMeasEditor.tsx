import React, { useState, useEffect } from 'react'
import { IEquationMeasurement } from '../type_defs/IEquationMeasurement';
import { DummyMeasurement } from '../DummyMeasurement';
import { MeasurementSelector } from './MeasurementSelector';
import { getApiAdaptersRegistry } from '../../apiAdapters/ApiManifestRegistry';
import { generateMeasFromType } from '../commands/generateMeasFromType';
import { MeasurementEditor } from './MeasurementEditor';
import { loadDataAdapters } from '../../clients/adapters/queries/loadDataAdapters';

export const EquationMeasEditor: React.FC<{ value: IEquationMeasurement, onChange: (m: IEquationMeasurement) => void }> = ({ value, onChange }) => {
    const propVal = { ...value }
    const [measTypes, setMeasTypes] = useState([] as { val: string, name: string }[])
    const [newMeasType, setNewMeasType] = useState(DummyMeasurement.typename)

    useEffect(() => {
        (async function () {
            const dataAdapters = (await loadDataAdapters()).map(n => ({ val: `adapter|${n.adapter_id}`, name: n.name }))
            const apiAdapters = Object.values(getApiAdaptersRegistry()).map(n => ({ val: `api|${n.api_id}`, name: n.name }))
            setMeasTypes([{ val: DummyMeasurement.typename, name: 'Random' }, ...dataAdapters, ...apiAdapters])
        })()
    }, [])

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

    const onEqMeasDel = (mInd: number) => {
        return (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            onValChanged('measurements', [...propVal.measurements.slice(0, mInd), ...propVal.measurements.slice(mInd + 1)])
        }
    }

    const onAddNewMeasClick = () => {
        onValChanged('measurements', [...propVal.measurements, generateMeasFromType(newMeasType)])
    }

    return <>
        <div>
            <MeasurementSelector measTypes={measTypes} onMeasChanged={(measType: string) => { setNewMeasType(measType) }} />
            <button type="button" onClick={(ev: any) => { onAddNewMeasClick() }} className={"btn btn-sm btn-outline-success ml-1"}>Add Measurement</button>
        </div>
        {propVal.measurements.map((meas, mInd) =>
            <>
                <button className={'btn btn-sm btn-outline-danger'} onClick={onEqMeasDel(mInd)}>Delete Measurement{` ${mInd}`}</button>
                <br />
                <MeasurementEditor value={meas}
                    onChange={(m) => {
                        onValChanged('measurements', [...propVal.measurements.slice(0, mInd), m, ...propVal.measurements.slice(mInd + 1)])
                    }} />
                <br />
            </>
        )}

        <br />
        <span><b>{'Equation '}</b></span>
        <input
            type='text'
            name='equation'
            value={propVal.equation}
            onChange={onInpValChanged}
        />
    </>
}