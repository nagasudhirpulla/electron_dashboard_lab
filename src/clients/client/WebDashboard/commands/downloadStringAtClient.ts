import { fileDownloadBtnId } from "../../webDashboardApp";

export const downloadStringAtClient = (fName: string, fContents: string) => {
    var data = new Blob([fContents], { type: 'text/plain' })
    var url = window.URL.createObjectURL(data)
    const hrefEl = (document.getElementById(fileDownloadBtnId) as HTMLAnchorElement)
    hrefEl.href = url
    hrefEl.download = fName
    hrefEl.click()
}