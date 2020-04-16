import React from 'react'
import { ILinePlotSeriesConfEditorProps } from "./type_defs/ILinePlotSeriesConfEditorProps";
import { TimePeriodEditor } from "../../../../Time/components/TimePeriodEditor/TimePeriodEditor";
import { TslpSeriesStyle } from "./type_defs/TslpSeriesStyle";
import { YAxisSide } from "./type_defs/YAxisSide";
import { PlotlyRenderStrategy } from "./type_defs/PlotlyRenderStrategy";
import { getDefaultCustomSeriesConfig } from './queries/getDefaultCustomSeriesConfig';
import { ColorPicker } from '../ColorPicker/ColorPicker';

const SeriesDivider: React.FC = () => (<div className="series_divider"><hr /></div>);

export const LinePlotSeriesConfigEditor: React.FC<ILinePlotSeriesConfEditorProps> = ({ value, onChange }: ILinePlotSeriesConfEditorProps) => {
    const propVal = { ...getDefaultCustomSeriesConfig(), ...value }

    const onInpValChanged = (ev: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            const newVal = ev.target.type == 'checkbox' ? ev.target.checked : ev.target.value
            onChange({ ...propVal, [`${ev.target.name}`]: newVal })
        }
    }

    const onSelValChanged = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            const newVal = ev.target.value
            onChange({ ...propVal, [`${ev.target.name}`]: newVal })
        }
    }

    const onValChanged = (name: string, val: {}) => {
        if (onChange) {
            onChange({ ...propVal, [`${name}`]: val })
        }
    }

    return <>
        <span><b>Series Color{" "}</b></span>
        <ColorPicker colorStr={propVal.color + ""}
            onColorChange={(c) => { onValChanged('color', c) }} />

        <SeriesDivider />
        <span><b>Display Time Shift</b></span>
        <TimePeriodEditor
            value={propVal.displayTimeShift}
            onChange={(t) => { onValChanged('displayTimeShift', t) }} />



        <SeriesDivider />
        <span><b>Visualization{" "}</b></span>
        <select
            name={`seriesStyle`}
            onChange={onSelValChanged}
            value={propVal.seriesStyle}
        >
            <option value={TslpSeriesStyle.line}>Normal Timeseries</option>
            <option value={TslpSeriesStyle.lollipop}>Lollipop Chart</option>
            <option value={TslpSeriesStyle.duration}>Duration Curve</option>
            <option value={TslpSeriesStyle.boxplot}>Box Plot</option>
        </select>

        {((propVal.seriesStyle == TslpSeriesStyle.line) || (propVal.seriesStyle == TslpSeriesStyle.lollipop)) &&
            <>
                {(propVal.seriesStyle == TslpSeriesStyle.line) &&
                    <>
                        <SeriesDivider />
                        <span><b>Line Mode{" "}</b></span>
                        <select
                            name={`lineMode`}
                            onChange={onSelValChanged}
                            value={propVal.lineMode}
                        >
                            <option value={'lines'}>Line</option>
                            <option value={'markers'}>Dots</option>
                            <option value={'lines+markers'}>Line and Dots</option>
                        </select>

                        <SeriesDivider />
                        <span><b>Line Dash{" "}</b></span>
                        <select
                            name={`lineDash`}
                            onChange={onSelValChanged}
                            value={propVal.lineDash}
                        >
                            <option value={'solid'}>Solid</option>
                            <option value={'dot'}>Dots</option>
                            <option value={'dash'}>Dash</option>
                            <option value={'dashdot'}>DashDot</option>
                            <option value={'longdash'}>LongDash</option>
                            <option value={'longdashdot'}>LongDashDot</option>
                        </select>

                        <SeriesDivider />
                        <span><b>Line Shape{" "}</b></span>
                        <select
                            name={`lineShape`}
                            onChange={onSelValChanged}
                            value={propVal.lineShape}
                        >
                            <option value={'linear'}>Linear</option>
                            <option value={'spline'}>Spline</option>
                            <option value={'hv'}>hv</option>
                            <option value={'vh'}>vh</option>
                            <option value={'hvh'}>hvh</option>
                            <option value={'vhv'}>vhv</option>
                        </select>
                    </>
                }

                {(propVal.lineMode.includes('lines') || (propVal.seriesStyle == TslpSeriesStyle.lollipop)) &&
                    <>
                        <SeriesDivider />
                        <span><b>Line Width{" "}</b></span>
                        <input
                            type="number"
                            name={`size`}
                            onChange={onInpValChanged}
                            value={propVal.size}
                        />
                    </>
                }

                {(propVal.lineMode.includes('markers') || (propVal.seriesStyle == TslpSeriesStyle.lollipop)) &&
                    <>
                        <SeriesDivider />
                        <span><b>Marker Color{" "}</b></span>
                        <ColorPicker colorStr={propVal.markerColor + ""}
                            onColorChange={(c) => { onValChanged('markerColor', c) }} />

                        <SeriesDivider />
                        <span><b>Marker Size{" "}</b></span>
                        <input
                            type="number"
                            name={`markerSize`}
                            onChange={onInpValChanged}
                            value={propVal.markerSize}
                        />
                    </>
                }

            </>
        }

        <SeriesDivider />
        <span><b>Y Axis Number{" "}</b></span>
        <input
            type="number"
            onChange={onInpValChanged}
            name={`yAxisIndex`}
            value={propVal.yAxisIndex}
            min="0"
        />

        <SeriesDivider />
        <span><b>Y Axis Side{" "}</b></span>
        <select
            onChange={onSelValChanged}
            name={`yAxisSide`}
            value={propVal.yAxisSide}
        >
            <option value={YAxisSide.left}>Left</option>
            <option value={YAxisSide.right}>Right</option>
        </select>

        <SeriesDivider />
        <span><b>Y Axis Offset{" "}</b></span>
        <input
            type="number"
            onChange={onInpValChanged}
            name={`yAxisOffset`}
            value={propVal.yAxisOffset}
        />

        <SeriesDivider />
        <span><b>Plotly Render Strategy{" "}</b></span>
        <select
            onChange={onSelValChanged}
            name={`renderStrategy`}
            value={propVal.renderStrategy}
        >
            <option value={PlotlyRenderStrategy.scatter}>No GPU</option>
            <option value={PlotlyRenderStrategy.scattergl}>Use GPU</option>
        </select>
    </>
}