import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { render } from 'react-dom';
import { VarTimeEditFormComp } from '../components/VarTimeEditFormComp';
import { VarTime } from '../Time/VarTime';
import { VarTimeEditComp } from '../components/VarTimeEditComp';

console.log("Hello World from client!!!")

const App: React.FC<{}> = () => {
    const { handleSubmit, watch, control } = useForm({ defaultValues: { timeEditComp: new VarTime() } })
    const onSubmit = (data: { timeEditComp: VarTime }) => { console.log(data) }

    console.log(watch('timeEditComp')) // watch input value by passing the name of it

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* <VarTimeEditFormComp name={'timeEditComp'} getValues={getValues} register={register} setValue={setValue} /> */}
            <Controller as={<VarTimeEditComp />} name="timeEditComp" control={control} onChange={([selected]) => {
                return selected;
            }} />
            <input type="submit" />
        </form>
    </>
}

render(
    <App></App>,
    document.getElementById('root')
);