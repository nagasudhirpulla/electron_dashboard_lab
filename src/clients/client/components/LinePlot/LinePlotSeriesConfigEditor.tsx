import { IVizConfEditorProps } from "../../type_defs/vizComp/IVizConfEditorProps";
import React from 'react'
import { ILinePlotSeriesConfEditorProps } from "./type_defs/ILinePlotSeriesConfEditorProps";
import { useForm, Controller } from "react-hook-form";
import { ILinePlotSeriesConfig } from "./type_defs/ILinePlotSeriesConfig";
import { TimePeriodEditor } from "../../../../Time/components/TimePeriodEditor/TimePeriodEditor";
import { TslpSeriesStyle } from "./type_defs/TslpSeriesStyle";
import { YAxisSide } from "./type_defs/YAxisSide";
import { PlotlyRenderStrategy } from "./type_defs/PlotlyRenderStrategy";

const SeriesDivider: React.FC = () => (<div className="series_divider"><hr /></div>);

export const LinePlotSeriesConfigEditor: React.FC<IVizConfEditorProps> = ({ value, onChange }: ILinePlotSeriesConfEditorProps) => {
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

        <SeriesDivider />
        <span><b>Y Axis Side{" "}</b></span>
        <select
            onChange={onValChanged}
            name={`yAxisSide`}
            ref={register}
        >
            <option value={YAxisSide.left}>Left</option>
            <option value={YAxisSide.right}>Right</option>
        </select>

        <SeriesDivider />
        <span><b>Y Axis Offset{" "}</b></span>
        <input
            type="number"
            onChange={onValChanged}
            name={`yAxisOffset`}
            ref={register}
        />

        <SeriesDivider />
        <span><b>Plotly Render Strategy{" "}</b></span>
        <select
            onChange={onValChanged}
            name={`renderStrategy`}
            ref={register}
        >
            <option value={PlotlyRenderStrategy.scatter}>No GPU</option>
            <option value={PlotlyRenderStrategy.scattergl}>Use GPU</option>
        </select>
    </>
}