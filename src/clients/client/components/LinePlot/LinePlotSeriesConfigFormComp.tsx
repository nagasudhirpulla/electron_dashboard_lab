import { IVizConfFormCompProps } from "../../type_defs/vizComp/IVizConfFormCompProps";
import React from 'react'
import { ILinePlotSeriesConfFormCompProps } from "./type_defs/ILinePlotSeriesConfFormCompProps";
import { useForm, Controller } from "react-hook-form";
import { ILinePlotSeriesConfig } from "./type_defs/ILinePlotSeriesConfig";
import { TimePeriodEditor } from "../TimePeriodEditor/TimePeriodEditor";
import { TslpSeriesStyle } from "./type_defs/TslpSeriesStyle";

const SeriesDivider: React.FC = () => (<div className="series_divider"><hr /></div>);

export const LinePlotSeriesConfigFormComp: React.FC<IVizConfFormCompProps> = ({ value, onChange }: ILinePlotSeriesConfFormCompProps) => {
    // TODO complete this
    const { register, watch, control } = useForm({ defaultValues: { ...value } })
    const onValChanged = () => {
        if (onChange) {
            const val = watch({ nest: true })
            onChange(val as ILinePlotSeriesConfig["customConfig"])
        }
    }

    return <>
        <span><b>Series Color{" "}</b></span>
        <input
            type="text"
            name={`color`}
            onChange={onValChanged}
            ref={register}
        />

        <SeriesDivider />
        <span><b>Display Time Shift</b></span>
        <Controller as={<TimePeriodEditor />}
            name="displayTimeShift"
            control={control}
            onChange={([selected]) => { return selected }} />


        <SeriesDivider />
        <span><b>Line Width{" "}</b></span>
        <input
            type="number"
            name={`size`}
            onChange={onValChanged}
            ref={register}
        />

        <SeriesDivider />
        <span><b>Visualization{" "}</b></span>
        <select
            name={`seriesStyle`}
            onChange={onValChanged}
            ref={register}
        >
            <option value={TslpSeriesStyle.line}>Normal Timeseries</option>
            <option value={TslpSeriesStyle.duration}>Duration Curve</option>
            <option value={TslpSeriesStyle.boxplot}>Box Plot</option>
        </select>

        <SeriesDivider />
        <span><b>Y Axis Number{" "}</b></span>
        <input
            type="number"
            onChange={onValChanged}
            name={`yAxisIndex`}
            ref={register}
            min="0"
        />

    </>
}