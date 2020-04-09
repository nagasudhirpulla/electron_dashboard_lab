import React from 'react'
import { ISeriesConfigEditorProps } from "./type_defs/ISeriesConfigEditorProps";
import { VarTimeEditor } from "../../../../Time/components/VarTimeEditor/VarTimeEditor";
import { SeriesCustomConfigEditor } from "../SeriesCustomConfigEditor/SeriesCustomConfigEditor";
import { MeasurementEditor } from "../../../../measurements/components/MeasurementEditor";
import { getDefaultSeriesConfig } from './queries/getDefautSeriesConfig';

const SeriesDivider: React.FC = () => (<div className="series_divider"><hr /></div>);

export const SeriesEditor: React.FC<ISeriesConfigEditorProps> = ({ value, onChange }: ISeriesConfigEditorProps) => {
    const propVal = { ...getDefaultSeriesConfig(), ...value }
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
        <span><b>Series Title{' '}</b></span>
        <input
            type='text'
            name='title'
            value={propVal.title}
            onChange={onInpValChanged}
        />

        <SeriesDivider />
        {propVal.measurements.map((meas, measInd) =>
            <div key={`meas_${measInd}`}>
                <span><b>Measurement{` ${(measInd + 1)} `}</b></span><br />
                <MeasurementEditor
                    value={meas}
                    onChange={(m) => {
                        onValChanged('measurements', [
                            ...propVal.measurements.slice(0, measInd),
                            m,
                            ...propVal.measurements.slice(measInd + 1),
                        ]
                        )
                    }}
                />
            </div>
        )}

        <SeriesDivider />
        <span><b>Start Time{' '}</b></span><br />
        <VarTimeEditor
            value={propVal.startTime}
            onChange={(t) => { onValChanged('startTime', t) }} />

        <SeriesDivider />
        <span><b>End Time{' '}</b></span><br />
        <VarTimeEditor
            value={propVal.endTime}
            onChange={(t) => { onValChanged('endTime', t) }} />

        <SeriesDivider />
        <SeriesCustomConfigEditor
            vizType={propVal.vizType} value={propVal.customConfig}
            onChange={(t) => { onValChanged('customConfig', t) }} />
    </>
}