import React from 'react'
import { ISeriesConfigEditorProps } from "./type_defs/ISeriesConfigEditorProps";
import { VarTimeEditor } from "../../../../Time/components/VarTimeEditor/VarTimeEditor";
import { SeriesCustomConfigEditor } from "../SeriesCustomConfigEditor/SeriesCustomConfigEditor";
import { MeasurementEditor } from "../../../../measurements/components/MeasurementEditor";

const SeriesDivider: React.FC = () => (<div className="series_divider"><hr /></div>);

export const SeriesEditor: React.FC<ISeriesConfigEditorProps> = ({ value, onChange }: ISeriesConfigEditorProps) => {
    const onInpValChanged = (ev: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange({ ...value, [`${ev.target.name}`]: ev.target.value })
        }
    }
    const onValChanged = (name: string, val: {}) => {
        if (onChange) {
            onChange({ ...value, [`${name}`]: val })
        }
    }
    return <>
        <span><b>Series Title{" "}</b></span>
        <input
            type="text"
            name="title"
            value={value.title}
            onChange={onInpValChanged}
        />

        <SeriesDivider />
        {value.measurements.map((meas, measInd) =>
            <div key={`meas_${measInd}`}>
                <span><b>Measurement{` ${(measInd + 1)} `}</b></span><br />
                <MeasurementEditor
                    value={meas}
                    onChange={(m) => {
                        onChange({
                            ...value, measurements: [
                                ...value.measurements.slice(0, measInd),
                                m,
                                ...value.measurements.slice(measInd + 1),
                            ]
                        })
                    }}
                />
            </div>
        )}

        <SeriesDivider />
        <span><b>Start Time{" "}</b></span><br />
        <VarTimeEditor
            value={value.startTime}
            onChange={(t) => { onValChanged("startTime", t) }} />

        <SeriesDivider />
        <span><b>End Time{" "}</b></span><br />
        <VarTimeEditor
            value={value.endTime}
            onChange={(t) => { onValChanged("endTime", t) }} />

        <SeriesDivider />
        <SeriesCustomConfigEditor vizType={value.vizType}
            value={value.customConfig}
            onChange={(t) => { onValChanged("customConfig", t) }} />
    </>
}