import { IDashboardState } from "../type_defs/IDashboardState";
import { IAction } from "../type_defs/IAction";
import { ActionType } from "./ActionType";
import { ITimePeriod } from "../../../../../Time/type_defs/ITimePeriod";
import { IMeasurement } from "../../../../../measurements/type_defs/IMeasurement";
import { ISeriesConfig } from "../../../type_defs/dashboard/ISeriesConfig";
import { VarTime } from "../../../../../Time/VarTime";
import { TimePeriod } from "../../../../../Time/TimePeriod";

export interface IFetchSeriesDataPayload {
    widgetIndex: number
    seriesIndex: number
}

export interface IFetchSeriesDataAction extends IAction {
    type: ActionType.FETCH_SERIES_DATA,
    payload: IFetchSeriesDataPayload
}

export function fetchSeriesDataAction(widgetIndex: number, seriesIndex: number): IFetchSeriesDataAction {
    return {
        type: ActionType.FETCH_SERIES_DATA,
        payload: { widgetIndex, seriesIndex }
    };
}


export const fetchSeriesDataDispatch = async (action: IFetchSeriesDataAction, pageState: IDashboardState, pageStateDispatch: React.Dispatch<IAction>): Promise<void> => {
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
    for (const fWin of fetchWindows) {
        // TODO comple this

    }
}