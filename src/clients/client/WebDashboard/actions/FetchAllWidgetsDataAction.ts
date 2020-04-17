import { IAction } from "../../ElectronDashboard/type_defs/IAction";import { ActionType } from "../../ElectronDashboard/actions/ActionType";import { IElectronDashboardState } from "../../ElectronDashboard/type_defs/IDashboardState";import { IFetchWidgetDataAction } from "../../ElectronDashboard/actions/FetchWidgetDataAction";import { fetchWebWidgetDataDispatch } from "./FetchWidgetDataAction";


export interface IFetchAllWidgetsDataPayload {
}

export interface IFetchAllWidgetsDataAction extends IAction {
    type: ActionType.FETCH_ALL_WIDGETS_DATA,
    payload: IFetchAllWidgetsDataPayload
}

export function fetchAllWebWidgetsDataAction(): IFetchAllWidgetsDataAction {
    return {
        type: ActionType.FETCH_ALL_WIDGETS_DATA,
        payload: {}
    };
}


export const fetchAllWebWidgetsDataDispatch = async (action: IFetchAllWidgetsDataAction, pageState: IElectronDashboardState, pageStateDispatch: React.Dispatch<IAction>): Promise<void> => {
    // TODO set timer busy
    const numWidgets = pageState.widgetProps.length
    for (let wInd = 0; wInd < numWidgets; wInd++) {
        const widgetFetchAction: IFetchWidgetDataAction = {
            type: ActionType.FETCH_WIDGET_DATA,
            payload: { widgetIndex: wInd }
        }
        await fetchWebWidgetDataDispatch(widgetFetchAction, pageState, pageStateDispatch)
    }
    // TODO release timer busy
}