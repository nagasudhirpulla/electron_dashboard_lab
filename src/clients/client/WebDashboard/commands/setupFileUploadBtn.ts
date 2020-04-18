export const setupFileUploadBtn = (fileDownloadBtnId: string) => {
    const uploadBtn = document.createElement('input')
    uploadBtn.style.display = 'none'
    uploadBtn.type = 'file'
    uploadBtn.id = fileDownloadBtnId
    uploadBtn.multiple = false
    document.body.appendChild(uploadBtn)
}