import React from 'react';
import { IBorderEditorProps } from './type_defs/IBorderEditorProps';
import { IBorder } from '../../type_defs/dashboard/IBorder';
import { ColorPicker } from '../ColorPicker/ColorPicker';

export const BorderEditor: React.FC<IBorderEditorProps> = ({ value, onChange }) => {
    const defVal: IBorder = { color: 'black', size: 1, style: 'solid' }
    const propVal = { ...defVal, ...value }

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
        <input type='number' className='mr-1'
            style={{ textAlign: "center", width: "2.5em" }}
            value={propVal.size}
            onChange={onInpValChanged}
            name='size' />
        <span className="mr-1">px</span>
        <select className='mr-1' value={propVal.style} onChange={(ev) => { onValChanged('style', ev.target.value) }}>
            <option value="solid">solid</option>
            <option value="none">none</option>
            <option value="dashed">dashed</option>
            <option value="dotted">dotted</option>
            <option value="double">double</option>
            <option value="groove">groove</option>
            <option value="hidden">hidden</option>
            <option value="inset">inset</option>
            <option value="outset">outset</option>
            <option value="ridge">ridge</option>
        </select>
        <ColorPicker
            colorStr={propVal.color}
            onColorChange={(v) => { onValChanged('color', v) }}
        />
    </>
}