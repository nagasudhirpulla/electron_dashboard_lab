import { IVizConfEditorProps } from "../../type_defs/vizComp/IVizConfEditorProps";
import React from 'react'
import { useForm } from "react-hook-form";
import { ILinePlotWidgetConfEditorProps } from "./type_defs/ILinePlotWidgetConfEditorProps";
import { ILinePlotWidgetConfig } from "./type_defs/ILinePlotWidgetConfig";

const WidgetDivider: React.FC = () => (<div className="widget_divider"><hr /></div>);

export const LinePlotWidgetConfigEditor: React.FC<ILinePlotWidgetConfEditorProps> = ({ value, onChange }: ILinePlotWidgetConfEditorProps) => {
    const { register, watch } = useForm({ defaultValues: { ...value } })
    const onValChanged = () => {
        if (onChange) {
            const val = watch({ nest: true })
            onChange(val as ILinePlotWidgetConfig["customConfig"])
        }
    }

    return <>
        <span>Background Color{" "}</span>
        <input
            type="text"
            name={`backgroundColor`}
            onChange={onValChanged}
            ref={register}
        />

        <WidgetDivider />
        <span>Text Color{" "}</span>
        <input
            type="text"
            name={`titleColor`}
            onChange={onValChanged}
            ref={register}
        />


        <WidgetDivider />
        <span>Show Grid{" "}</span>
        <input
            type="checkbox"
            name={`showGrid`}
            onChange={onValChanged}
            ref={register}
        />
    </>
}