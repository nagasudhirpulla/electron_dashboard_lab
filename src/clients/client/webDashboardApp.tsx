import React, { createContext } from 'react'
import { render } from 'react-dom'
import { VizPluginsRepo } from './VizPluginsRepo'
import { LinePlot } from './components/LinePlot/LinePlot'
import { LinePlotWidgetConfigEditor } from './components/LinePlot/LinePlotWidgetConfigEditor'
import { LinePlotSeriesConfigEditor } from './components/LinePlot/LinePlotSeriesConfigEditor'
import { LinePlotMetadata } from './components/LinePlot/LinePlotMetadata'
import { WebDashboard } from './WebDashboard/WebDashboard'
import { setApiAdaptersRegistry } from '../../apiAdapters/ApiManifestRegistry'
import { seedApiProviders } from './WebDashboard/commands/seedApiProviders'
import { setupFileDownloadHref } from './WebDashboard/commands/setupFileDownloadHref'

// console.log("Hello World from client!!!")
// create a global variable for viz plugins repository as well make it a context for other components to access it
const $comps = VizPluginsRepo()
export const vizPluginsRepoContext = createContext($comps)
// register line plot
$comps.registerComp(LinePlotMetadata.discriminator, LinePlot, LinePlotWidgetConfigEditor, LinePlotSeriesConfigEditor, LinePlotMetadata)

setApiAdaptersRegistry({})
seedApiProviders()

// setup up hyperlink element for download purposes
export const fileDownloadBtnId = 'fileDownloadBtn'
setupFileDownloadHref(fileDownloadBtnId)

const App: React.FC<{}> = () => {
    return <>
        <WebDashboard />
    </>
}

render(
    <App></App>,
    document.getElementById('root')
);