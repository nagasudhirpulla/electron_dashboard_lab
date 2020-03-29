import { IVizConfFormCompProps } from "../../type_defs/vizComp/IVizConfFormCompProps";
import React from 'react'
import { useForm } from "react-hook-form";
import { ILinePlotWidgetConfFormCompProps } from "./type_defs/ILinePlotWidgetConfFormCompProps";
import { ILinePlotWidgetConfig } from "./type_defs/ILinePlotWidgetConfig";

const WidgetDivider: React.FC = () => (<div className="widget_divider"><hr /></div>);

export const LinePlotWidgetConfigFormComp: React.FC<IVizConfFormCompProps> = ({ value, onChange }: ILinePlotWidgetConfFormCompProps) => {
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