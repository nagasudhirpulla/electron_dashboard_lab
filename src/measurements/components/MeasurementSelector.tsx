import React, { useState, ChangeEvent, useEffect } from 'react'
import { DummyMeasurement } from '../DummyMeasurement'
import { loadDataAdapters } from '../../clients/adapters/queries/loadDataAdapters'
import { getApiAdaptersRegistry } from '../../apiAdapters/ApiManifestRegistry'

export interface IMeasurementSelectorProps {
    measTypes: { name: string, val: string }[]
    onMeasChanged: (measType: string) => void
}

export const MeasurementSelector: React.FC<IMeasurementSelectorProps> = ({ measTypes, onMeasChanged }: IMeasurementSelectorProps) => {
    // WEBTODO supply meas selector option values and texts from parent
    const [newMeasType, setNewMeasType] = useState(DummyMeasurement.typename)
    // const [measOptionEls, setmeasOptionEls] = useState([])
    // useEffect(() => {
    //     (async function () {
    //         const adapterOptEls = (await loadDataAdapters()).map(n => <option value={`adapter|${n.adapter_id}`}>{n.name}</option>)
    //         const apiOptEls = Object.values(getApiAdaptersRegistry()).map(n => <option value={`api|${n.api_id}`}>{n.name}</option>)
    //         setmeasOptionEls([...adapterOptEls, ...apiOptEls])
    //     })()
    // }, [])
    return <>
        <select
            value={newMeasType}
            onChange={(ev: ChangeEvent<HTMLSelectElement>) => {
                setNewMeasType(ev.target.value)
                if (onMeasChanged != null) { onMeasChanged(ev.target.value) }
            }}
        >
            {/* <option value={DummyMeasurement.typename}>Random</option>
            {measOptionEls} */}
            {measTypes.map(mt => <option value={mt.val}>{mt.name}</option>)}
        </select>
    </>
}