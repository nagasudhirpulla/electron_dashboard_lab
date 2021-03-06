import { IElectronDashboardState } from "../type_defs/IDashboardState";
import { IAction } from "../type_defs/IAction";
import { ActionType } from "./ActionType";
import { fetchWidgetDataDispatch, IFetchWidgetDataAction } from "./FetchWidgetDataAction";

export interface IFetchAllWidgetsDataPayload {
}

export interface IFetchAllWidgetsDataAction extends IAction {
    type: ActionType.FETCH_ALL_WIDGETS_DATA,
    payload: IFetchAllWidgetsDataPayload
}

export function fetchAllWidgetsDataAction(): IFetchAllWidgetsDataAction {
    return {
        type: ActionType.FETCH_ALL_WIDGETS_DATA,
        payload: {}
    };
}


export const fetchAllWidgetsDataDispatch = async (action: IFetchAllWidgetsDataAction, pageState: IElectronDashboardState, pageStateDispatch: React.Dispatch<IAction>): Promise<void> => {
    // TODO set timer busy
    const numWidgets = pageState.widgetProps.length
    for (let wInd = 0; wInd < numWidgets; wInd++) {
        const widgetFetchAction: IFetchWidgetDataAction = {
            type: ActionType.FETCH_WIDGET_DATA,
            payload: { widgetIndex: wInd }
        }
        await fetchWidgetDataDispatch(widgetFetchAction, pageState, pageStateDispatch)
    }
    // TODO release timer busy
}