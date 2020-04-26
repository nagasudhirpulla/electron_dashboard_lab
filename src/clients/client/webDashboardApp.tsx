import React from 'react'
import { render } from 'react-dom'
import { WebDashboard } from './WebDashboard/WebDashboard'
import { setApiAdaptersRegistry } from '../../apiAdapters/ApiManifestRegistry'
import { seedApiProviders } from './WebDashboard/commands/seedApiProviders'
import { setupFileDownloadHref } from './WebDashboard/commands/setupFileDownloadHref'
import { setupFileUploadBtn } from './WebDashboard/commands/setupFileUploadBtn'

// console.log("Hello World from client!!!")

setApiAdaptersRegistry({})
seedApiProviders()

// setup up hyperlink element for download purposes
export const fileDownloadBtnId = 'fileDownloadBtn'
export const fileUploadBtnId = 'fileUploadBtn'
setupFileDownloadHref(fileDownloadBtnId)
setupFileUploadBtn(fileUploadBtnId)

const App: React.FC<{}> = () => {
    return <>
        <WebDashboard />
    </>
}

render(
    <App></App>,
    document.getElementById('root')
);