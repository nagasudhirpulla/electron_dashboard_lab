import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TimePeriod } from '../../TimePeriod'
import './time-period-editor.css'

/**
 * This is controlled component. 
 * It exposes value, onChange for controlling the state
 */
export const TimePeriodEditor = ({ value, onChange }: { value?: TimePeriod, onChange?: (v: TimePeriod) => void }) => {

    const propTimeVal = value ? value : new TimePeriod()
    const { register, watch } = useForm({ defaultValues: propTimeVal })

    const onValChanged = () => {
        if (onChange) {
            const val = watch({ nest: true })
            onChange(
                {
                    years: +val.years,
                    months: +val.months,
                    days: +val.days,
                    hrs: +val.hrs,
                    mins: +val.mins,
                    secs: +val.secs,
                    millis: 0
                })
        }
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <span>Days -</span>
                        </td>
                        <td>
                            <input
                                type='number'
                                name={'days'}
                                onChange={onValChanged}
                                ref={register}
                                className='time_period_num_input'
                            />
                        </td>
                        <td>
                            <span>Months -</span>
                        </td>
                        <td>
                            <input
                                type='number'
                                name={'months'}
                                onChange={onValChanged}
                                ref={register}
                                className='time_period_num_input'
                            />
                        </td>
                        <td>
                            <span>Years -</span>
                        </td>
                        <td>
                            <input
                                type='number'
                                name={'years'}
                                onChange={onValChanged}
                                ref={register}
                                className='time_period_num_input'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Hours -</span>
                        </td>
                        <td>
                            <input
                                type='number'
                                name={'hrs'}
                                onChange={onValChanged}
                                ref={register}
                                className='time_period_num_input'
                            />
                        </td>
                        <td>
                            <span>Mins -</span>
                        </td>
                        <td>
                            <input
                                type='number'
                                name={'mins'}
                                onChange={onValChanged}
                                ref={register}
                                className='time_period_num_input'
                            />
                        </td>
                        <td>
                            <span>Secs -</span>
                        </td>
                        <td>
                            <input
                                type='number'
                                name={'secs'}
                                onChange={onValChanged}
                                ref={register}
                                className='time_period_num_input'
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </ >
    )
}