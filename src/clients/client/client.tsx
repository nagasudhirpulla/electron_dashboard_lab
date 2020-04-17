import React, { createContext } from 'react'
import { render } from 'react-dom'
import { VizPluginsRepo } from './VizPluginsRepo'
import { LinePlot } from './components/LinePlot/LinePlot'
import { LinePlotWidgetConfigEditor } from './components/LinePlot/LinePlotWidgetConfigEditor'
import { LinePlotSeriesConfigEditor } from './components/LinePlot/LinePlotSeriesConfigEditor'
import { LinePlotMetadata } from './components/LinePlot/LinePlotMetadata'
import { VizPluginsManager } from './vizPluginsManager'
import { ElectronDashboard } from './components/ElectronDashboard/ElectronDashboard'

// console.log("Hello World from client!!!")
// create a global variable for viz plugins repository as well make it a context for other components to access it
const $comps = VizPluginsRepo()
export const vizPluginsRepoContext = createContext($comps)
// register line plot
$comps.registerComp(LinePlotMetadata.discriminator, LinePlot, LinePlotWidgetConfigEditor, LinePlotSeriesConfigEditor, LinePlotMetadata)

const vizPluginsManager = VizPluginsManager()

const App: React.FC<{}> = () => {
    // WEBTODO move app logic from dashboard to here
    return <>
        <ElectronDashboard />
    </>
}

render(
    <App></App>,
    document.getElementById('root')
);