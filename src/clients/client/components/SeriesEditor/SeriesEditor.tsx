import { ISeriesConfig } from "../../type_defs/dashboard/ISeriesConfig";
import React from 'react'
import { useForm, Controller } from "react-hook-form";
import { ISeriesConfigEditorProps } from "./type_defs/ISeriesConfigEditorProps";
import { VarTimeEditor } from "../../../../Time/components/VarTimeEditor/VarTimeEditor";
import { SeriesCustomConfigEditor } from "../SeriesCustomConfigEditor/SeriesCustomConfigEditor";
import { MeasurementEditor } from "../../../../measurements/components/MeasurementEditor";

const SeriesDivider: React.FC = () => (<div className="series_divider"><hr /></div>);

export const SeriesEditor: React.FC<ISeriesConfigEditorProps> = ({ value, onChange }: ISeriesConfigEditorProps) => {
    const { register, watch, control } = useForm({ defaultValues: { ...value } })
    const onValChanged = () => {
        if (onChange) {
            const val = watch({ nest: true })
            onChange(val as ISeriesConfig)
        }
    }
    return <>
        <span><b>Series Title{" "}</b></span>
        <input
            type="text"
            name={`title`}
            onChange={onValChanged}
            ref={register}
        />

        <SeriesDivider />
        {value.measurements.map((meas, measInd) =>
            <div key={`meas_${measInd}`}>
                <span><b>Measurement{` ${(measInd + 1)} `}</b></span><br />
                <Controller as={<MeasurementEditor />}
                    name={`measurements[${measInd}]`}
                    control={control}
                    defaultValue={meas}
                    onChange={([selected]) => { return selected }} />
            </div>
        )}

        <SeriesDivider />
        <span><b>Start Time{" "}</b></span><br />
        <Controller as={<VarTimeEditor />}
            name="startTime"
            control={control}
            onChange={([selected]) => { return selected }} />

        <SeriesDivider />
        <span><b>End Time{" "}</b></span><br />
        <Controller as={<VarTimeEditor />}
            name="endTime"
            control={control}
            onChange={([selected]) => { return selected }} />

        <SeriesDivider />
        <Controller as={<SeriesCustomConfigEditor vizType={value.vizType} />}
            name="customConfig"
            control={control}
            onChange={([selected]) => { return selected }} />

    </>
}