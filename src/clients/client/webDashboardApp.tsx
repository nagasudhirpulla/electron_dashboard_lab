import React, { createContext } from 'react'
import { render } from 'react-dom'
import { VizPluginsRepo } from './VizPluginsRepo'
import { LinePlot } from './components/LinePlot/LinePlot'
import { LinePlotWidgetConfigEditor } from './components/LinePlot/LinePlotWidgetConfigEditor'
import { LinePlotSeriesConfigEditor } from './components/LinePlot/LinePlotSeriesConfigEditor'
import { LinePlotMetadata } from './components/LinePlot/LinePlotMetadata'
import { WebDashboard } from './WebDashboard/WebDashboard'
import { setApiAdaptersRegistry } from '../../apiAdapters/ApiManifestRegistry'
import { IApiManifest } from '../../apiAdapters/type_defs/IApiManifest'
import { registerApiAdapter } from '../../apiAdapters/commands/registerApiAdapter'

// console.log("Hello World from client!!!")
// create a global variable for viz plugins repository as well make it a context for other components to access it
const $comps = VizPluginsRepo()
export const vizPluginsRepoContext = createContext($comps)
// register line plot
$comps.registerComp(LinePlotMetadata.discriminator, LinePlot, LinePlotWidgetConfigEditor, LinePlotSeriesConfigEditor, LinePlotMetadata)

//http://portal.wrldc.in/dashboard/api/wbesArchive/CGPL/Total/2020-04-15/2020-04-16
const WbesApi: IApiManifest = {
    name: 'Schedule_Archive',
    api_id: 'Schedule_Archive',
    baseUrl: '../api/wbesArchive',
    path: '${meas_id}/${start_time}/${end_time}',
    request_type: 'get',
    start_time_format: 'YYYY-MM-DD',
    end_time_format: 'YYYY-MM-DD',
    quality_option: false,
    is_resampling_present: false,
}
setApiAdaptersRegistry({})
registerApiAdapter(WbesApi)

const App: React.FC<{}> = () => {
    return <>
        <WebDashboard />
    </>
}

render(
    <App></App>,
    document.getElementById('root')
);