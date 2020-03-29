import React from 'react'
import { useForm, Controller } from "react-hook-form";
import { VarTimeEditor } from "../../../../Time/components/VarTimeEditor/VarTimeEditor";
import { SeriesCustomConfigEditor } from "../SeriesCustomConfigEditor/SeriesCustomConfigEditor";
import { MeasurementEditor } from "../../../../measurements/components/MeasurementEditor";
import { IWidgetConfigEditorProps } from "./type_defs/IWidgetConfigEditorProps";
import { IWidgetConfig } from "../../type_defs/dashboard/IWidgetConfig";
import { SeriesEditor } from '../SeriesEditor/SeriesEditor';

const WidgetDivider: React.FC = () => (<div className="series_divider"><hr /></div>);

export const WidgetEditor: React.FC<IWidgetConfigEditorProps> = ({ value, onChange }: IWidgetConfigEditorProps) => {
    const { register, watch, control } = useForm({ defaultValues: { ...value } })
    const onValChanged = () => {
        if (onChange) {
            const val = watch({ nest: true })
            onChange(val as IWidgetConfig)
        }
    }
    return <>
        <span><b>Widget Title{" "}</b></span>
        <input
            type="text"
            name={`title`}
            onChange={onValChanged}
            ref={register}
        />

        <WidgetDivider />
        <span><b>Border{" "}</b></span><br />
        <input
            type="text"
            name={`border`}
            onChange={onValChanged}
            ref={register}
        />

        {value.seriesConfigs.map((meas, measInd) =>
            <div key={`seriesConfigs_${measInd}`}>
                <WidgetDivider />
                <Controller as={<SeriesEditor />}
                    name={`seriesConfigs[${measInd}]`}
                    control={control}
                    onChange={([selected]) => { return selected }} />
            </div>
        )}
        {/* TODO create  WidgetCustomConfigEditor*/}
    </>
}