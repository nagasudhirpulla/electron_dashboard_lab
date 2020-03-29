import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { render } from 'react-dom'
import { VarTime } from '../../Time/VarTime'
import { VarTimeEditor } from '../../Time/components/VarTimeEditor/VarTimeEditor'
import { TimePeriodEditor } from '../../Time/components/TimePeriodEditor/TimePeriodEditor'
import { TimePeriod } from '../../Time/TimePeriod'
import { ipcRenderer } from 'electron'
import { ChannelNames } from '../../ipc/ChannelNames'
import { VizPluginsRepo } from './VizPluginsRepo'
import { LinePlot } from './components/LinePlot/LinePlot'
import { LinePlotWidgetConfigEditor } from './components/LinePlot/LinePlotWidgetConfigEditor'
import { LinePlotSeriesConfigEditor } from './components/LinePlot/LinePlotSeriesConfigEditor'
import { linePlotMetadata } from './components/LinePlot/LinePlotMetadata'
import { VizPluginsManager } from './vizPluginsManager'

// console.log("Hello World from client!!!")
const $comps = VizPluginsRepo()
const vizPluginsManager = VizPluginsManager()
const onOpenVizPluginsEditorClick = (e: any): void => {
    ipcRenderer.send('' + ChannelNames.openVizPluginsEditor, 'ping')
}

const onOpenDataAdaptersEditorClick = (e: any): void => {
    ipcRenderer.send('' + ChannelNames.openDataAdaptersEditor, 'ping')
}


const App: React.FC<{}> = () => {
    const { handleSubmit, watch, control } = useForm({ defaultValues: { time: new VarTime(), period: new TimePeriod() } })
    const onSubmit = (data: { time: VarTime, period: TimePeriod }) => { console.log(data) }

    console.log(watch('time')) // watch input value by passing the name of it
    console.log(watch('period')) // watch input value by passing the name of it

    useEffect(() => {
        // register line plot
        $comps.registerComp('Plot', LinePlot, LinePlotWidgetConfigEditor, LinePlotSeriesConfigEditor, linePlotMetadata)
        // eval("console.log($comps.getInstalledPluginNames())")
    }, [])

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h4>Variable Time</h4>
            <Controller as={<VarTimeEditor />} name="time" control={control} onChange={([selected]) => { return selected }} />

            <h4>Time Period</h4>
            <Controller as={<TimePeriodEditor />} name="period" control={control} onChange={([selected]) => { return selected }} />
            <input type="submit" />
        </form>
        <button onClick={onOpenVizPluginsEditorClick}>Viz Plugins</button>
        <button onClick={onOpenDataAdaptersEditorClick}>Data Adapters</button>
    </>
}

render(
    <App></App>,
    document.getElementById('root')
);