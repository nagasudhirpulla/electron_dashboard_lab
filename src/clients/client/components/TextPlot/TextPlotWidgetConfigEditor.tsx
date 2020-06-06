import React from 'react'
import { ITextPlotWidgetConfEditorProps } from "./type_defs/ITextPlotWidgetConfEditorProps";
import { getDefaultCustomWidgetConfig } from "./queries/getDefaultCustomWidgetConfig";
import { ColorPicker } from '../ColorPicker/ColorPicker';

const WidgetDivider: React.FC = () => (<div className="widget_divider"><hr /></div>);

export const TextPlotWidgetConfigEditor: React.FC<ITextPlotWidgetConfEditorProps> = ({ value, onChange }: ITextPlotWidgetConfEditorProps) => {
    const propVal = { ...getDefaultCustomWidgetConfig(), ...value }

    const onInpValChanged = (ev: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            const newVal = ev.target.type == "checkbox" ? ev.target.checked : ev.target.value
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
        <span><b>Series Separator Text{' '}</b></span>
        <input
            onChange={onInpValChanged}
            name={`seriesSeparator`}
            value={propVal.seriesSeparator}
        />
    </>
}