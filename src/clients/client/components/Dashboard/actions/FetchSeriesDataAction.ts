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
    // TODO comple this
    const wInd = action.payload.widgetIndex
    const sInd = action.payload.seriesIndex
    // get series config
    const sConfig: ISeriesConfig = pageState.widgetProps[wInd].config.seriesConfigs[sInd]
    // get fetch window
    const fetchWindow: ITimePeriod = sConfig.fetchWindow
    const measList: IMeasurement[] = sConfig.measurements
    // get fetch times
    const fetchStartTime = VarTime.getDateObj(sConfig.startTime)
    const fetchEndTime = VarTime.getDateObj(sConfig.endTime)

    for (let currTime = fetchStartTime; currTime.getTime() <= fetchEndTime.getTime(); currTime = TimePeriod.addTimePeriod(currTime, fetchWindow)) {
        const element = array[index];

    }
}