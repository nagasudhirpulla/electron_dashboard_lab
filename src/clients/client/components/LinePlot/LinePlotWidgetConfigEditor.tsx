import { IVizConfEditorProps } from "../../type_defs/vizComp/IVizConfEditorProps";
import React from 'react'
import { useForm } from "react-hook-form";
import { ILinePlotWidgetConfEditorProps } from "./type_defs/ILinePlotWidgetConfEditorProps";
import { ILinePlotWidgetConfig } from "./type_defs/ILinePlotWidgetConfig";

const WidgetDivider: React.FC = () => (<div className="widget_divider"><hr /></div>);

export const LinePlotWidgetConfigEditor: React.FC<ILinePlotWidgetConfEditorProps> = ({ value, onChange }: ILinePlotWidgetConfEditorProps) => {
    //TODO merge with default props
    const propVal = {...value}

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