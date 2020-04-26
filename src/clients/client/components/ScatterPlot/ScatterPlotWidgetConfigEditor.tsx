import React from 'react'
import { ColorPicker } from '../ColorPicker/ColorPicker';
import { getDefaultCustomWidgetConfig } from './queries/getDefaultCustomWidgetConfig';
import { IScatterPlotWidgetConfEditorProps } from './type_defs/IScatterPlotWidgetConfEditorProps';

const WidgetDivider: React.FC = () => (<div className="widget_divider"><hr /></div>);

export const ScatterPlotWidgetConfigEditor: React.FC<IScatterPlotWidgetConfEditorProps> = ({ value, onChange }: IScatterPlotWidgetConfEditorProps) => {
    const propVal = { ...getDefaultCustomWidgetConfig(), ...value }

    const onInpValChanged = (ev: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            const newVal = ev.target.type == "checkbox" ? ev.target.checked : ev.target.value
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
        <span><b>Background{' '}</b></span>
        <ColorPicker colorStr={propVal.backgroundColor + ""}
            onColorChange={(c) => { onValChanged('backgroundColor', c) }} />

        <WidgetDivider />
        <span><b>Text Color{' '}</b></span>
        <ColorPicker colorStr={propVal.titleColor + ""}
            onColorChange={(c) => { onValChanged('titleColor', c) }} />

        <WidgetDivider />
        <span><b>Show Grid{' '}</b></span>
        <input
            type='checkbox'
            name='showGrid'
            checked={propVal.showGrid}
            onChange={onInpValChanged}
        />
    </>
}