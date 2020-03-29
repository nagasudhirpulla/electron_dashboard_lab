import React, { useState } from 'react'
import DateTime from 'react-datetime'
import moment from 'moment'
import './react-datetime.css'
import { useForm } from 'react-hook-form'
import { VarTime } from '../../VarTime'

/**
 * This is controlled component. 
 * It exposes value, onChange for controlling the state
 */
export const VarTimeEditor = ({ value, onChange }: { value?: VarTime, onChange?: (v: VarTime) => void }) => {

    const propTimeVal = value ? value : new VarTime()
    const { register, setValue, watch } = useForm({ defaultValues: propTimeVal })

    const onValChanged = () => {
        if (onChange) {
            const val = watch({ nest: true })
            onChange(
                {
                    ...val,
                    offsetYears: +val.offsetYears,
                    offsetMonths: +val.offsetMonths,
                    offsetDays: +val.offsetDays,
                    offsetHrs: +val.offsetHrs,
                    offsetMins: +val.offsetMins,
                    offsetSecs: +val.offsetSecs,
                    absoluteTime: +val.absoluteTime
                } as VarTime)
        }
    }

    const onAllVarCheckChanged = (evnt: React.ChangeEvent<HTMLInputElement>) => {
        const newBool = evnt.target.checked ? true : false
        setValue('isVarYears', newBool)
        setValue('isVarMonths', newBool)
        setValue('isVarDays', newBool)
        setValue('isVarHrs', newBool)
        setValue('isVarMins', newBool)
        setValue('isVarSecs', newBool)
        onValChanged()
    }

    const isAllCompsVariable = (): boolean => {
        const val = watch({ nest: true }) as VarTime
        return val['isVarYears'] && val['isVarMonths'] && val['isVarDays'] && val['isVarHrs'] && val['isVarMins'] && val['isVarSecs']
    }

    const onAbsTimeChange = (value: string | moment.Moment) => {
        // console.log(value)
        if (value instanceof moment) {
            let dateVal = (moment(value).toDate()).getTime()
            setValue('absoluteTime', dateVal)
            onValChanged()
        }
    }

    return (
        <div>
            <div>
                <input type='number' name={'absoluteTime'} ref={register({ min: '0' })} style={{ display: 'none' }} />
                <DateTime
                    value={new Date(+(watch({ nest: true }) as VarTime).absoluteTime)}
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
                                ref={register}
                                onChange={onValChanged}
                            />
                            <input
                                type='number'
                                className='var_time_num_input'
                                name={'offsetDays'}
                                ref={register}
                                onChange={onValChanged}
                            />
                        </td>

                        <td>
                            <span>Offset Months</span>
                        </td>
                        <td>
                            <input
                                type='checkbox'
                                name={'isVarMonths'}
                                ref={register}
                                onChange={onValChanged}
                            />

                            <input
                                type='number'
                                name={'offsetMonths'}
                                className='var_time_num_input'
                                ref={register}
                                onChange={onValChanged}
                            />
                        </td>

                        <td>
                            <span>Offset Years</span>
                        </td>
                        <td>
                            <input
                                type='checkbox'
                                name={'isVarYears'}
                                ref={register}
                                onChange={onValChanged}
                            />

                            <input
                                type='number'
                                className='var_time_num_input'
                                name={'offsetYears'}
                                ref={register}
                                onChange={onValChanged}
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
                                ref={register}
                                onChange={onValChanged}
                            />

                            <input
                                type='number'
                                className='var_time_num_input'
                                name={'offsetHrs'}
                                ref={register}
                                onChange={onValChanged}
                            />
                        </td>

                        <td>
                            <span>Offset Minutes</span>
                        </td>
                        <td>
                            <input
                                type='checkbox'
                                name={'isVarMins'}
                                ref={register}
                                onChange={onValChanged}
                            />

                            <input
                                type='number'
                                className='var_time_num_input'
                                name={'offsetMins'}
                                ref={register}
                                onChange={onValChanged}
                            />
                        </td>

                        <td>
                            <span>Offset Seconds</span>
                        </td>
                        <td>
                            <input
                                type='checkbox'
                                name={'isVarSecs'}
                                ref={register}
                                onChange={onValChanged}
                            />

                            <input
                                type='number'
                                className='var_time_num_input'
                                name={'offsetSecs'}
                                ref={register}
                                onChange={onValChanged}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}