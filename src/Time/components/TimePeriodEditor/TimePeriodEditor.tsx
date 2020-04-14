import React from 'react'
import { TimePeriod } from '../../TimePeriod'
import './time-period-editor.css'

/**
 * This is controlled component. 
 * It exposes value, onChange for controlling the state
 */
export const TimePeriodEditor = ({ value, onChange }: { value?: TimePeriod, onChange?: (v: TimePeriod) => void }) => {

    const propVal = value ? value : new TimePeriod()

    const onInpValChanged = (ev: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            const newVal = ev.target.type == "checkbox" ? ev.target.checked : +ev.target.value
            onChange({ ...propVal, [`${ev.target.name}`]: newVal })
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
                                name='days'
                                className='time_period_num_input'
                                value={propVal.days}
                                onChange={onInpValChanged}
                            />
                        </td>
                        <td>
                            <span>Months -</span>
                        </td>
                        <td>
                            <input
                                type='number'
                                name='months'
                                className='time_period_num_input'
                                value={propVal.months}
                                onChange={onInpValChanged}
                            />
                        </td>
                        <td>
                            <span>Years -</span>
                        </td>
                        <td>
                            <input
                                type='number'
                                name={'years'}
                                className='time_period_num_input'
                                value={propVal.years}
                                onChange={onInpValChanged}
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
                                name='hrs'
                                className='time_period_num_input'
                                value={propVal.hrs}
                                onChange={onInpValChanged}
                            />
                        </td>
                        <td>
                            <span>Mins -</span>
                        </td>
                        <td>
                            <input
                                type='number'
                                name='mins'
                                className='time_period_num_input'
                                value={propVal.mins}
                                onChange={onInpValChanged}
                            />
                        </td>
                        <td>
                            <span>Secs -</span>
                        </td>
                        <td>
                            <input
                                type='number'
                                name={'secs'}
                                className='time_period_num_input'
                                value={propVal.secs}
                                onChange={onInpValChanged}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </ >
    )
}