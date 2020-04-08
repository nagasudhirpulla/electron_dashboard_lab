import React from 'react'
import DateTime from 'react-datetime'
import moment from 'moment'
import './react-datetime.css'
import { VarTime } from '../../VarTime'

/**
 * This is controlled component. 
 * It exposes value, onChange for controlling the state
 */
export const VarTimeEditor = ({ value, onChange }: { value?: VarTime, onChange?: (v: VarTime) => void }) => {

    const propTimeVal = value ? value : new VarTime()

    const onInpValChanged = (ev: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            const newVal = ev.target.type == "checkbox" ? ev.target.checked : ev.target.value
            onChange({ ...propTimeVal, [`${ev.target.name}`]: newVal })
        }
    }

    const onAllVarCheckChanged = (evnt: React.ChangeEvent<HTMLInputElement>) => {
        const newBool = evnt.target.checked ? true : false
        onChange({
            ...propTimeVal, isVarYears: newBool, isVarMonths: newBool,
            isVarDays: newBool, isVarHrs: newBool, isVarMins: newBool,
            isVarSecs: newBool
        })
    }

    const onValChanged = (name: string, val: {}) => {
        if (onChange) {
            onChange({ ...propTimeVal, [`${name}`]: val })
        }
    }

    const isAllCompsVariable = (): boolean => {
        return propTimeVal.isVarYears && propTimeVal.isVarMonths && propTimeVal.isVarDays && propTimeVal.isVarHrs && propTimeVal.isVarMins && propTimeVal.isVarSecs
    }

    const onAbsTimeChange = (value: string | moment.Moment) => {
        // console.log(value)
        if (value instanceof moment) {
            let dateVal = (moment(value).toDate()).getTime()
            onValChanged('absoluteTime', dateVal)
        }
    }

    return (
        <div>
            <div>
                <DateTime
                    value={new Date(propTimeVal.absoluteTime)}
                    dateFormat={'DD-MM-YYYY'}
                    timeFormat={'HH:mm:ss'}
                    onChange={onAbsTimeChange}
                />
                <span>All Variable -{' '}</span>
                <input type='checkbox'
                    checked={isAllCompsVariable()}
                    onChange={onAllVarCheckChanged}
                />
            </div>

            <table>
                <tbody>
                    <tr>
                        <td>
                            <span>Offset Days</span>
                        </td>
                        <td>
                            <input
                                type='checkbox'
                                name={'isVarDays'}
                                checked={propTimeVal.isVarDays}
                                onChange={onInpValChanged}
                            />
                            <input
                                type='number'
                                className='var_time_num_input'
                                name={'offsetDays'}
                                value={propTimeVal.offsetDays}
                                onChange={onInpValChanged}
                            />
                        </td>

                        <td>
                            <span>Offset Months</span>
                        </td>
                        <td>
                            <input
                                type='checkbox'
                                name={'isVarMonths'}
                                checked={propTimeVal.isVarMonths}
                                onChange={onInpValChanged}
                            />

                            <input
                                type='number'
                                name={'offsetMonths'}
                                className='var_time_num_input'
                                value={propTimeVal.offsetMonths}
                                onChange={onInpValChanged}
                            />
                        </td>

                        <td>
                            <span>Offset Years</span>
                        </td>
                        <td>
                            <input
                                type='checkbox'
                                name={'isVarYears'}
                                checked={propTimeVal.isVarYears}
                                onChange={onInpValChanged}
                            />

                            <input
                                type='number'
                                className='var_time_num_input'
                                name={'offsetYears'}
                                value={propTimeVal.offsetYears}
                                onChange={onInpValChanged}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Offset Hours</span>
                        </td>
                        <td>
                            <input
                                type='checkbox'
                                name={'isVarHrs'}
                                checked={propTimeVal.isVarHrs}
                                onChange={onInpValChanged}
                            />

                            <input
                                type='number'
                                className='var_time_num_input'
                                name={'offsetHrs'}
                                value={propTimeVal.offsetHrs}
                                onChange={onInpValChanged}
                            />
                        </td>

                        <td>
                            <span>Offset Minutes</span>
                        </td>
                        <td>
                            <input
                                type='checkbox'
                                name={'isVarMins'}
                                checked={propTimeVal.isVarMins}
                                onChange={onInpValChanged}
                            />

                            <input
                                type='number'
                                className='var_time_num_input'
                                name={'offsetMins'}
                                value={propTimeVal.offsetMins}
                                onChange={onInpValChanged}
                            />
                        </td>

                        <td>
                            <span>Offset Seconds</span>
                        </td>
                        <td>
                            <input
                                type='checkbox'
                                name={'isVarSecs'}
                                checked={propTimeVal.isVarSecs}
                                onChange={onInpValChanged}
                            />

                            <input
                                type='number'
                                className='var_time_num_input'
                                name={'offsetSecs'}
                                value={propTimeVal.offsetSecs}
                                onChange={onInpValChanged}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}