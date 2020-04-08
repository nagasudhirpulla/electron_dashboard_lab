import React, { useState, ChangeEvent, useEffect } from 'react'
import { DummyMeasurement } from '../DummyMeasurement'
import { loadDataAdapters } from '../../clients/adapters/queries/loadDataAdapters'

export interface IMeasurementSelectorProps {
    onMeasChanged: (measType: string) => void
}

export const MeasurementSelector: React.FC<IMeasurementSelectorProps> = ({ onMeasChanged }: IMeasurementSelectorProps) => {
    const [newMeasType, setNewMeasType] = useState(DummyMeasurement.typename)
    const [measOptionEls, setmeasOptionEls] = useState([])
    useEffect(() => {
        (async function () {
            setmeasOptionEls((await loadDataAdapters()).map(n => <option value={`adapter|${n.adapter_id}`}>{n.name}</option>))
        })()
    }, [])
    return <>
        <select
            value={newMeasType}
            onChange={(ev: ChangeEvent<HTMLSelectElement>) => {
                setNewMeasType(ev.target.value)
                if (onMeasChanged != null) { onMeasChanged(ev.target.value) }
            }}
        >
            <option value={DummyMeasurement.typename}>Dummy</option>
            {measOptionEls}
        </select>
    </>
}