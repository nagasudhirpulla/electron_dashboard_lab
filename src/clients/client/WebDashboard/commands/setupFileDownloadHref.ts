export const setupFileDownloadHref = (fileDownloadBtnId: string) => {
    const downloadRef = document.createElement('a')
    downloadRef.style.display = 'none'
    downloadRef.href = ''
    downloadRef.id = fileDownloadBtnId
    downloadRef.download = "data_export.csv"
    document.body.appendChild(downloadRef)
}