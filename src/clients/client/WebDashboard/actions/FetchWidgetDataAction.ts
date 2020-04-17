import { ActionType } from "../../ElectronDashboard/actions/ActionType";
import { IAction } from "../../ElectronDashboard/type_defs/IAction";
import { IElectronDashboardState } from "../../ElectronDashboard/type_defs/IDashboardState";
import { IFetchSeriesDataAction } from "../../ElectronDashboard/actions/FetchSeriesDataAction";
import { fetchWebSeriesDataDispatch } from "./FetchSeriesDataAction";


export interface IFetchWidgetDataPayload {
    widgetIndex: number
}

export interface IFetchWidgetDataAction extends IAction {
    type: ActionType.FETCH_WIDGET_DATA,
    payload: IFetchWidgetDataPayload
}

export function fetchWebWidgetDataAction(widgetIndex: number): IFetchWidgetDataAction {
    return {
        type: ActionType.FETCH_WIDGET_DATA,
        payload: { widgetIndex }
    };
}


export const fetchWebWidgetDataDispatch = async (action: IFetchWidgetDataAction, pageState: IElectronDashboardState, pageStateDispatch: React.Dispatch<IAction>): Promise<void> => {
    const wInd = action.payload.widgetIndex
    const wConfig = pageState.widgetProps[wInd].config
    for (const sInd in wConfig.seriesConfigs) {
        const seriesFetchAction: IFetchSeriesDataAction = {
            type: ActionType.FETCH_SERIES_DATA,
            payload: { widgetIndex: wInd, seriesIndex: +sInd }
        }
        await fetchWebSeriesDataDispatch(seriesFetchAction, pageState, pageStateDispatch)
    }
}