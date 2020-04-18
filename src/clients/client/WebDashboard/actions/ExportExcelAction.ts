
// import * as XLSX from 'xlsx';
import { ActionType } from '../../ElectronDashboard/actions/ActionType';
import { IElectronDashboardState } from '../../ElectronDashboard/type_defs/IDashboardState';
import { IAction } from '../../ElectronDashboard/type_defs/IAction';
import moment from 'moment';
import { downloadStringAtClient } from '../commands/downloadStringAtClient';

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
    let wb: string = ''
    const tzOffset = (new Date()).getTimezoneOffset()
    for (const sInd in data) {
        for (const measInd in data[sInd]) {
            const title = `${pageState.widgetProps[wInd].config.seriesConfigs[sInd].title}_${measInd}`
            let valsStr: string = `${title}`
            let timeStr: string = `Time_${title}`
            for (let rowInd = 0; rowInd < data[sInd][measInd].length / 2; rowInd++) {
                timeStr += `,${moment(new Date(data[sInd][measInd][2 * rowInd])).format('YYYY-MM-DD HH:mm:ss.SSS')}`
                valsStr += `,${data[sInd][measInd][2 * rowInd + 1]}`
            }
            wb += `${timeStr}\n${valsStr}\n`
        }
    }
    downloadStringAtClient(`export_${moment(new Date()).format('X')}.csv`, wb)
}