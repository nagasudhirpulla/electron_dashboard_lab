import { IDashboardState } from "../type_defs/IDashboardState";
import { IAction } from "../type_defs/IAction";
import { ActionType } from "./ActionType";

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

export const fetchSeriesDataReducer = (state: IDashboardState, action: IFetchSeriesDataAction): IDashboardState => {
    // TODO comple this
    const wInd = action.payload.widgetIndex
    const sInd = action.payload.seriesIndex
    return state
}