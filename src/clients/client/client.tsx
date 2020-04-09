import React, { useEffect, useState } from 'react'
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
// register line plot
$comps.registerComp(LinePlotMetadata.discriminator, LinePlot, LinePlotWidgetConfigEditor, LinePlotSeriesConfigEditor, LinePlotMetadata)

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
    const [plotConfig, setPlotConfig] = useState(createNewWidgetConfig(LinePlotMetadata.discriminator))
    useEffect(() => {
        // eval("console.log($comps.getInstalledPluginNames())")
    }, [])

    return <>
        <button onClick={onOpenVizPluginsEditorClick}>Viz Plugins</button>
        <button onClick={onOpenDataAdaptersEditorClick}>Data Adapters</button>
        <br />
        <WidgetEditor
            value={plotConfig}
            onChange={(c) => { setPlotConfig(c) }}
        />
    </>
}

render(
    <App></App>,
    document.getElementById('root')
);