import React from 'react'
import { ILinePlotWidgetConfEditorProps } from "./type_defs/ILinePlotWidgetConfEditorProps";
import { getDefaultCustomWidgetConfig } from "./queries/getDefaultCustomWidgetConfig";

const WidgetDivider: React.FC = () => (<div className="widget_divider"><hr /></div>);

export const LinePlotWidgetConfigEditor: React.FC<ILinePlotWidgetConfEditorProps> = ({ value, onChange }: ILinePlotWidgetConfEditorProps) => {
    const propVal = { ...getDefaultCustomWidgetConfig(), ...value }

    const onInpValChanged = (ev: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            const newVal = ev.target.type == "checkbox" ? ev.target.checked : ev.target.value
            onChange({ ...propVal, [`${ev.target.name}`]: newVal })
        }
    }

    return <>
        <span>Background Color{' '}</span>
        <input
            type='text'
            name='backgroundColor'
            onChange={onInpValChanged}
        />

        <WidgetDivider />
        <span>Text Color{' '}</span>
        <input
            type='text'
            name='titleColor'
            onChange={onInpValChanged}
        />


        <WidgetDivider />
        <span>Show Grid{' '}</span>
        <input
            type='checkbox'
            name='showGrid'
            onChange={onInpValChanged}
        />
    </>
}