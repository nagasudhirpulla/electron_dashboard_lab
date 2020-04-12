import { IDashboardState } from "../type_defs/IDashboardState";
import { IAction } from "../type_defs/IAction";
import { ActionType } from "./ActionType";

export interface IDeleteWidgetPayload {
    widgetIndex: number
}

export interface IDeleteWidgetAction extends IAction {
    type: ActionType.DELETE_WIDGET,
    payload: IDeleteWidgetPayload
}

export function deleteWidgetAction(widgetIndex: number): IDeleteWidgetAction {
    return {
        type: ActionType.DELETE_WIDGET,
        payload: { widgetIndex }
    };
}

export const deleteWidgetReducer = (state: IDashboardState, action: IDeleteWidgetAction): IDashboardState => {
    const wInd = action.payload.widgetIndex
    return {
        ...state,
        widgetProps: [
            ...state.widgetProps.slice(0, wInd),
            ...state.widgetProps.slice(wInd + 1)]
    } as IDashboardState;
}