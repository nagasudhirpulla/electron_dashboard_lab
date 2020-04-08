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
import { LinePlotMetadata } from './components/LinePlot/LinePlotMetadata'
import { VizPluginsManager } from './vizPluginsManager'
import { IWidgetConfig } from './type_defs/dashboard/IWidgetConfig'
import { WidgetEditor } from './components/WidgetEditor/WidgetEditor'

// console.log("Hello World from client!!!")
// create a global variable for viz plugins repository as well make it a context for other components to access it
const $comps = VizPluginsRepo()
export const vizPluginsRepoContext = React.createContext($comps)
const vizPluginsManager = VizPluginsManager()
const onOpenVizPluginsEditorClick = (e: any): void => {
    ipcRenderer.send('' + ChannelNames.openVizPluginsEditor, 'ping')
}

const onOpenDataAdaptersEditorClick = (e: any): void => {
    ipcRenderer.send('' + ChannelNames.openDataAdaptersEditor, 'ping')
}

const createNewWidgetConfig = (vizType: string): IWidgetConfig => {
    const widgetConfig: IWidgetConfig = {
        vizType: vizType,
        title: "",
        border: "1px solid black",
        seriesConfigs: [],
        customConfig: {},
    }
    return widgetConfig
}

const App: React.FC<{}> = () => {
    const { handleSubmit, watch, control } = useForm({ defaultValues: { time: new VarTime(), period: new TimePeriod(), plotConfig: createNewWidgetConfig(LinePlotMetadata.discriminator) } })
    const onSubmit = (data: { time: VarTime, period: TimePeriod, plotConfig: IWidgetConfig }) => { console.log(data) }

    //console.log(watch('time')) // watch input value by passing the name of it
    //console.log(watch('period')) // watch input value by passing the name of it
    console.log(watch('plotConfig')) // watch input value by passing the name of it

    useEffect(() => {
        // register line plot
        $comps.registerComp('Plot', LinePlot, LinePlotWidgetConfigEditor, LinePlotSeriesConfigEditor, LinePlotMetadata)
        // eval("console.log($comps.getInstalledPluginNames())")
    }, [])

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h4>Variable Time</h4>
            <Controller as={<VarTimeEditor />} name="time" control={control} onChange={([selected]) => { return selected }} />

            <h4>Time Period</h4>
            <Controller as={<TimePeriodEditor />} name="period" control={control} onChange={([selected]) => { return selected }} />

            <h4>Widget Config</h4>
            <Controller as={<WidgetEditor />} name="plotConfig" control={control} />
            <br />
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