import { IElectronDashboardState } from "../type_defs/IDashboardState";
import { IAction } from "../type_defs/IAction";
import { ActionType } from "./ActionType";
import { ITimePeriod } from "../../../../../Time/type_defs/ITimePeriod";
import { IMeasurement } from "../../../../../measurements/type_defs/IMeasurement";
import { ISeriesConfig } from "../../../type_defs/dashboard/ISeriesConfig";
import { VarTime } from "../../../../../Time/VarTime";
import { TimePeriod } from "../../../../../Time/TimePeriod";
import { fetchMeasData } from "../../../fetchers/queries/fetchMeasData";
import { ISeriesData } from "../../../type_defs/dashboard/ISeriesData";
import { setSeriesDataAction } from "./SetSeriesDataAction";
import { fetchSeriesDataDispatch, IFetchSeriesDataAction, IFetchSeriesDataPayload } from "./FetchSeriesDataAction";

export interface IFetchWidgetDataPayload {
    widgetIndex: number
}

export interface IFetchWidgetDataAction extends IAction {
    type: ActionType.FETCH_WIDGET_DATA,
    payload: IFetchWidgetDataPayload
}

export function fetchWidgetDataAction(widgetIndex: number): IFetchWidgetDataAction {
    return {
        type: ActionType.FETCH_WIDGET_DATA,
        payload: { widgetIndex }
    };
}


export const fetchWidgetDataDispatch = async (action: IFetchWidgetDataAction, pageState: IElectronDashboardState, pageStateDispatch: React.Dispatch<IAction>): Promise<void> => {
    const wInd = action.payload.widgetIndex
    const wConfig = pageState.widgetProps[wInd].config
    for (const sInd in wConfig.seriesConfigs) {
        const seriesFetchAction: IFetchSeriesDataAction = {
            type: ActionType.FETCH_SERIES_DATA,
            payload: { widgetIndex: wInd, seriesIndex: +sInd }
        }
        await fetchSeriesDataDispatch(seriesFetchAction, pageState, pageStateDispatch)
    }
}