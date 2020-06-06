import React from 'react'
import { ITextPlotSeriesConfEditorProps } from "./type_defs/ITextPlotSeriesConfEditorProps";
import { getDefaultCustomSeriesConfig } from './queries/getDefaultCustomSeriesConfig';
import { ColorPicker } from '../ColorPicker/ColorPicker';
import { TextComputationStrategy } from "./type_defs/TextComputationStrategy";

const SeriesDivider: React.FC = () => (<div className="series_divider"><hr /></div>);

export const TextPlotSeriesConfigEditor: React.FC<ITextPlotSeriesConfEditorProps> = ({ value, onChange }: ITextPlotSeriesConfEditorProps) => {
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
        <span><b>Prefix text{" "}</b></span>
        <input
            onChange={onInpValChanged}
            name={`prefixText`}
            value={propVal.prefixText}
        />

        <SeriesDivider />
        <span><b>Suffix text{" "}</b></span>
        <input
            onChange={onInpValChanged}
            name={`suffixText`}
            value={propVal.suffixText}
        />

        <SeriesDivider />
        <span><b>Font Color{" "}</b></span>
        <ColorPicker colorStr={propVal.color + ""}
            onColorChange={(c) => { onValChanged('color', c) }} />

        <SeriesDivider />
        <span><b>Background Color{" "}</b></span>
        <ColorPicker colorStr={propVal.backgroundColor + ""}
            onColorChange={(c) => { onValChanged('backgroundColor', c) }} />

        <SeriesDivider />
        <span><b>Computation Strategy{" "}</b></span>
        <select
            name={`textComputationStrategy`}
            onChange={onSelValChanged}
            value={propVal.textComputationStrategy}
        >
            <option value={TextComputationStrategy.firstSample}>First Sample</option>
            <option value={TextComputationStrategy.lastSample}>Last Sample</option>
            <option value={TextComputationStrategy.average}>Average</option>
            <option value={TextComputationStrategy.max}>Max value</option>
            <option value={TextComputationStrategy.min}>Min value</option>
            <option value={TextComputationStrategy.sum}>Sum of samples</option>
            <option value={TextComputationStrategy.percentile}>Percentile</option>
            <option value={TextComputationStrategy.firstTimestamp}>First Timestamp</option>
            <option value={TextComputationStrategy.lastTimestamp}>Last Timestamp</option>
            <option value={TextComputationStrategy.maxValTimestamp}>Max Value Timestamp</option>
            <option value={TextComputationStrategy.minValTimestamp}>Min Value Timestamp</option>
            <option value={TextComputationStrategy.noData}>No Data</option>
        </select>

        {(propVal.textComputationStrategy == TextComputationStrategy.percentile) &&
            <>
                <SeriesDivider />
                <span><b>Percentile{" "}</b></span>
                <input
                    type="number"
                    onChange={onInpValChanged}
                    name={`percentile`}
                    value={propVal.percentile}
                    min="0"
                />
            </>
        }

        {([TextComputationStrategy.firstTimestamp, TextComputationStrategy.lastTimestamp,
        TextComputationStrategy.maxValTimestamp,
        TextComputationStrategy.minValTimestamp].includes(propVal.textComputationStrategy)) &&
            <>
                <SeriesDivider />
                <span><b>Format String{" "}</b></span>
                <input
                    onChange={onInpValChanged}
                    name={`format`}
                    value={propVal.format}
                />
            </>
        }

        <SeriesDivider />
        <span><b>Font size{" "}</b></span>
        <input
            type="number"
            name={`size`}
            onChange={onInpValChanged}
            value={propVal.size}
        />

        <SeriesDivider />
        <span><b>Font Style{" "}</b></span>
        <select
            name={`fontStyle`}
            onChange={onSelValChanged}
            value={propVal.fontStyle}
        >
            <option value={'normal'}>normal</option>
            <option value={'italic'}>italic</option>
            <option value={'oblique'}>oblique</option>
        </select>

        <SeriesDivider />
        <span><b>Font Weight{" "}</b></span>
        <input
            onChange={onInpValChanged}
            name={`fontWeight`}
            value={propVal.fontWeight}
        />

        <SeriesDivider />
        <span><b>Font Family{" "}</b></span>
        <input
            onChange={onInpValChanged}
            name={`fontFamily`}
            value={propVal.fontFamily}
        />

        <SeriesDivider />
        <span><b>Decimal Precision{" "}</b></span>
        <input
            type="number"
            onChange={onInpValChanged}
            name={`decimalPrecision`}
            value={propVal.decimalPrecision}
            min="0"
        />
    </>
}