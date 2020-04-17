import React from 'react'
import { IDashboardSettingsEditorProps } from './type_defs/IDashboardSettingsEditorProps'
import { ColorPicker } from '../ColorPicker/ColorPicker'
import { TimePeriodEditor } from '../../../../Time/components/TimePeriodEditor/TimePeriodEditor'
import { getDefaultDashboardState } from '../ElectronDashboard/queries/getDefaultDashboardState'
import { IDashboardSettings } from './type_defs/IDashboardSettings'
export const DashboardSettingsEditor: React.FC<IDashboardSettingsEditorProps> = ({ value, onChange }) => {
    const defDashState = getDefaultDashboardState()
    const defDashSettings: IDashboardSettings = {
        backgroundColor: defDashState.gridConfig.backgroundColor,
        timerSettings: defDashState.timerSettings
    }
    const propVal = { ...defDashSettings, ...value }
    // const onInpValChanged = (ev: React.ChangeEvent<HTMLInputElement>) => {
    //     if (onChange) {
    //         const newVal = ev.target.type == "checkbox" ? ev.target.checked : ev.target.value
    //         onChange({ ...propVal, [`${ev.target.name}`]: newVal })
    //     }
    // }

    const onValChanged = (name: string, val: {}) => {
        if (onChange) {
            onChange({ ...propVal, [`${name}`]: val })
        }
    }
    return <>
        <span><b>Background{' '}</b></span>
        <ColorPicker colorStr={propVal.backgroundColor + ""}
            onColorChange={(c) => { onValChanged('backgroundColor', c) }} />

        <hr />
        <span><b>Timer ON{' '}</b></span>
        <input type='checkbox'
            onChange={(ev) => { onValChanged('timerSettings', { ...propVal.timerSettings, timerOn: ev.target.checked }) }}
            checked={propVal.timerSettings.timerOn} />

        {propVal.timerSettings.timerOn &&
            <>
                <hr />
                <span><b>Refresh Timer Period</b></span>
                <TimePeriodEditor
                    value={propVal.timerSettings.timerPeriodicity}
                    onChange={(t) => { onValChanged('timerSettings', { ...propVal.timerSettings, timerPeriodicity: t }) }} />
            </>
        }
    </>
}