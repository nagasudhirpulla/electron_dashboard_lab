import { IElectronDashboardState } from "../type_defs/IDashboardState";
import { IAction } from "../type_defs/IAction";
import { ActionType } from "./ActionType";
// import * as XLSX from 'xlsx';
import { Workbook } from 'exceljs';
import { saveExcelAsync } from "../../../../../server/utils/fileUtils";

export interface IExportExcelPayload {
    widgetIndex: number
}

export interface IExportExcelAction extends IAction {
    type: ActionType.EXPORT_EXCEL,
    payload: IExportExcelPayload
}

export function exportExcelAction(widgetIndex: number): IExportExcelAction {
    return {
        type: ActionType.EXPORT_EXCEL,
        payload: { widgetIndex }
    };
}

export const ExportExcelDispatch = async (action: IExportExcelAction, pageState: IElectronDashboardState, pageStateDispatch: React.Dispatch<IAction>): Promise<void> => {
    const wInd = action.payload.widgetIndex
    const data = pageState.widgetProps[wInd].data
    // use this for excel js implementation
    let wb = new Workbook()
    // Add Worksheets to the workbook
    let ws = wb.addWorksheet('Sheet1')
    let currCol = 1
    for (const sInd in data) {
        for (const measInd in data[sInd]) {
            const title = `${pageState.widgetProps[wInd].config.seriesConfigs[sInd].title}_${measInd}`
            // ws.getRow(1).getCell(currCol).value
            ws.getRow(1).getCell(currCol).value = `Time_${title}`
            ws.getRow(1).getCell(currCol + 1).value = title
            for (let rowInd = 0; rowInd < data[sInd][measInd].length / 2; rowInd++) {
                ws.getRow(rowInd + 2).getCell(currCol).value = new Date(data[sInd][measInd][2 * rowInd] + 5.5 * 60 * 60 * 1000)
                ws.getRow(rowInd + 2).getCell(currCol + 1).value = data[sInd][measInd][2 * rowInd + 1]
            }
            currCol += 2
        }
    }
    await saveExcelAsync(wb)

    // https://techoverflow.net/2018/05/28/how-to-set-cell-value-to-string-using-js-xlsx/
    // https://github.com/SheetJS/sheetjs/issues/1124
    // let wb = XLSX.utils.book_new();
    // const range_add_cell = (range, cell) => {
    //     var rng = XLSX.utils.decode_range(range);
    //     var c = typeof cell == 'string' ? XLSX.utils.decode_cell(cell) : cell;
    //     console.log(rng, c);
    //     if (rng.s.r > c.r) rng.s.r = c.r;
    //     if (rng.s.c > c.c) rng.s.c = c.c;

    //     if (rng.e.r < c.r) rng.e.r = c.r;
    //     if (rng.e.c < c.c) rng.e.c = c.c;
    //     return XLSX.utils.encode_range(rng);
    // }

    // const add_to_sheet = (sheet, cell) => {
    //     sheet['!ref'] = range_add_cell(sheet['!ref'], cell);
    // }
    // wb.Props = {
    //     Title: "Data Export",
    //     Subject: "Electron Dashboard Excel Export",
    //     Author: "Electron Dashboard",
    //     CreatedDate: new Date()
    // };

    // wb.SheetNames.push("Sheet1")
    // var ws = XLSX.utils.aoa_to_sheet([[]])
    // ws['!ref'] = range_add_cell("A1:A2", "B10")
    // let currCol = 0
    // for (const sInd in data) {
    //     // https://techoverflow.net/2018/05/28/how-to-set-cell-value-to-string-using-js-xlsx/
    //     // https://github.com/SheetJS/sheetjs/issues/1124
    //     for (const measInd in data[sInd]) {
    //         const title = `${pageState.widgetProps[wInd].config.seriesConfigs[sInd].title}_measInd`
    //         add_to_sheet(ws, XLSX.utils.encode_cell({ r: 0, c: currCol }))
    //         add_to_sheet(ws, XLSX.utils.encode_cell({ r: 0, c: currCol + 1 }))
    //         ws[XLSX.utils.encode_cell({ r: 0, c: currCol })] = { v: `Time_${title}` }
    //         ws[XLSX.utils.encode_cell({ r: 0, c: currCol + 1 })] = { v: title }
    //         for (let rowInd = 0; rowInd < data[sInd][measInd].length / 2; rowInd++) {
    //             add_to_sheet(ws, XLSX.utils.encode_cell({ r: rowInd + 1, c: currCol }))
    //             add_to_sheet(ws, XLSX.utils.encode_cell({ r: rowInd + 1, c: currCol + 1 }))
    //             ws[XLSX.utils.encode_cell({ r: rowInd + 1, c: currCol })] = { v: new Date(data[sInd][measInd][2 * rowInd] + 5.5 * 60 * 60 * 1000) }
    //             ws[XLSX.utils.encode_cell({ r: rowInd + 1, c: currCol + 1 })] = { v: data[sInd][measInd][2 * rowInd + 1] }
    //         }
    //         currCol += 2
    //     }
    // }
    // // wb.Sheets["Sheet1"] = ws;
    // const showSaveDialog = require('electron').remote.dialog.showSaveDialog
    // const dialogRes = await showSaveDialog({
    //     filters: [
    //         { name: 'Excel Workbook', extensions: ['xlsx'] },
    //         { name: 'All Files', extensions: ['*'] }
    //     ],
    //     title: 'Export Widget Excel Data'
    // }) as any
    // if (!(dialogRes.cancelled == true)) {
    //     const saveFilename: string = dialogRes.filePath
    //     console.log(`Saving excel to ${saveFilename}`)
    //     await XLSX.writeFile(wb, saveFilename)
    //     console.log(`Excel Saved!`)
    // }

    // use this for browser app
    // XLSX.writeFile(wb, `data_export_${(new Date()).getTime()}.xlsx`);
}