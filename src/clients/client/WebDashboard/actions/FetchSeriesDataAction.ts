import { ActionType } from "../../ElectronDashboard/actions/ActionType";
import { IAction } from "../../ElectronDashboard/type_defs/IAction";
import { IElectronDashboardState } from "../../ElectronDashboard/type_defs/IDashboardState";
import { ISeriesConfig } from "../../type_defs/dashboard/ISeriesConfig";
import { ITimePeriod } from "../../../../Time/type_defs/ITimePeriod";
import { VarTime } from "../../../../Time/VarTime";
import { TimePeriod } from "../../../../Time/TimePeriod";
import { IMeasurement } from "../../../../measurements/type_defs/IMeasurement";
import { ISeriesData } from "../../type_defs/dashboard/ISeriesData";
import { setSeriesDataAction } from "../../ElectronDashboard/actions/SetSeriesDataAction";
import { fetchWebMeasData } from "../fetchWebMeasData";


export interface IFetchSeriesDataPayload {
    widgetIndex: number
    seriesIndex: number
}

export interface IFetchSeriesDataAction extends IAction {
    type: ActionType.FETCH_SERIES_DATA,
    payload: IFetchSeriesDataPayload
}

export function fetchWebSeriesDataAction(widgetIndex: number, seriesIndex: number): IFetchSeriesDataAction {
    return {
        type: ActionType.FETCH_SERIES_DATA,
        payload: { widgetIndex, seriesIndex }
    };
}


export const fetchWebSeriesDataDispatch = async (action: IFetchSeriesDataAction, pageState: IElectronDashboardState, pageStateDispatch: React.Dispatch<IAction>): Promise<void> => {
    const wInd = action.payload.widgetIndex
    const sInd = action.payload.seriesIndex
    // get series config
    const sConfig: ISeriesConfig = pageState.widgetProps[wInd].config.seriesConfigs[sInd]

    // get fetch windows
    const window: ITimePeriod = sConfig.fetchWindow
    const fetchStartTime = VarTime.getDateObj(sConfig.startTime)
    const fetchEndTime = VarTime.getDateObj(sConfig.endTime)
    const fetchWindows = TimePeriod.splitWindow(fetchStartTime, fetchEndTime, window)

    // fetch data for each window
    const measList: IMeasurement[] = sConfig.measurements
    for (const fWinInd in fetchWindows) {
        const fWin = fetchWindows[fWinInd]
        let seriesData: ISeriesData = []
        for (const measInd in measList) {
            let winData = await fetchWebMeasData(fWin[0], fWin[1], measList[measInd], {})
            if (+fWinInd > 0 && winData != null && winData.length > 2) {
                // remove 1st sample since we already fetched it as last sample in prev window
                winData = [...winData.slice(2)]
            }
            seriesData[measInd] = winData
        }
        let append = true
        if (+fWinInd == 0) {
            append = false
        }
        pageStateDispatch(setSeriesDataAction(wInd, sInd, seriesData, append))
    }
}