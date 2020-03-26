import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { render } from 'react-dom'
import { VarTime } from '../Time/VarTime'
import { VarTimeEditor } from './components/VarTimeEditor/VarTimeEditor'
import { TimePeriodEditor } from './components/TimePeriodEditor/TimePeriodEditor'
import { TimePeriod } from '../Time/TimePeriod'

console.log("Hello World from client!!!")

const App: React.FC<{}> = () => {
    const { handleSubmit, watch, control } = useForm({ defaultValues: { time: new VarTime(), period: new TimePeriod() } })
    const onSubmit = (data: { time: VarTime, period: TimePeriod }) => { console.log(data) }

    console.log(watch('time')) // watch input value by passing the name of it
    console.log(watch('period')) // watch input value by passing the name of it

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input value={"asd"}/>
            
            <h4>Variable Time</h4>
            <Controller as={<VarTimeEditor />} name="time" control={control} onChange={([selected]) => { return selected }} />
            
            <h4>Time Period</h4>
            <Controller as={<TimePeriodEditor />} name="period" control={control} onChange={([selected]) => { return selected }} />
            <input type="submit" />
        </form>
    </>
}

render(
    <App></App>,
    document.getElementById('root')
);