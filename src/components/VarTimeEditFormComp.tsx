import React, { useState } from 'react'
import DateTime from 'react-datetime'
import moment from 'moment'
import { VarTime } from '../Time/VarTime'
import './react-datetime.css'

/**
 * This form component is designed to work with react-hook-form
 */
export const VarTimeEditFormComp = ({ name, register, setValue, getValues, ...props }: { register: any, setValue: any, getValues: any, name: string }) => {

    const onAllVarCheckChanged = (evnt: React.ChangeEvent<HTMLInputElement>) => {
        const newBool = evnt.target.checked ? true : false
        setValue(`${name}.isVarYears`, newBool)
        setValue(`${name}.isVarMonths`, newBool)
        setValue(`${name}.isVarDays`, newBool)
        setValue(`${name}.isVarHrs`, newBool)
        setValue(`${name}.isVarMins`, newBool)
        setValue(`${name}.isVarSecs`, newBool)
    }

    const isAllCompsVariable = (): boolean => {
        return getValues()[`${name}.isVarYears`] && getValues()[`${name}.isVarMonths`] && getValues()[`${name}.isVarDays`] && getValues()[`${name}.isVarHrs`] && getValues()[`${name}.isVarMins`] && getValues()[`${name}.isVarSecs`]
    }

    const onAbsTimeChange = (value: string | moment.Moment) => {
        console.log(value)
        if (value instanceof moment) {
            let dateVal = (moment(value).toDate()).getTime()
            setValue(`${name}.absoluteTime`, dateVal)
        }
    }
    console.log(getValues())
    return (
        <div>
            <div>
                <input type="number" name={`${name}.absoluteTime`} ref={register} style={{ display: 'none' }} />
                <DateTime
                    value={new Date()}
                    dateFormat={'DD-MM-YYYY'}
                    timeFormat={'HH:mm:ss'}
                    onChange={onAbsTimeChange}
                />
                <span>All Variable -{" "}</span>
                <input type="checkbox"
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
                                type="checkbox"
                                name={`${name}.isVarDays`}
                                ref={register}
                            />
                            <input
                                type="number"
                                className="num_input_width"
                                name={`${name}.offsetDays`}
                                ref={register}
                            />
                        </td>

                        <td>
                            <span>Offset Months</span>
                        </td>
                        <td>
                            <input
                                type="checkbox"
                                name={`${name}.isVarMonths`}
                                ref={register}
                            />

                            <input
                                type="number"
                                name={`${name}.offsetMonths`}
                                className="num_input_width"
                                ref={register}
                            />
                        </td>

                        <td>
                            <span>Offset Years</span>
                        </td>
                        <td>
                            <input
                                type="checkbox"
                                name={`${name}.isVarYears`}
                                ref={register}
                            />

                            <input
                                type="number"
                                className="num_input_width"
                                name={`${name}.offsetYears`}
                                ref={register}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Offset Hours</span>
                        </td>
                        <td>
                            <input
                                type="checkbox"
                                name={`${name}.isVarHrs`}
                                ref={register}
                            />

                            <input
                                type="number"
                                className="num_input_width"
                                name={`${name}.offsetHrs`}
                                ref={register}
                            />
                        </td>

                        <td>
                            <span>Offset Minutes</span>
                        </td>
                        <td>
                            <input
                                type="checkbox"
                                name={`${name}.isVarMins`}
                                ref={register}
                            />

                            <input
                                type="number"
                                className="num_input_width"
                                name={`${name}.offsetMins`}
                                ref={register}
                            />
                        </td>

                        <td>
                            <span>Offset Seconds</span>
                        </td>
                        <td>
                            <input
                                type="checkbox"
                                name={`${name}.isVarSecs`}
                                ref={register}
                            />

                            <input
                                type="number"
                                className="num_input_width"
                                name={`${name}.offsetSecs`}
                                ref={register}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}