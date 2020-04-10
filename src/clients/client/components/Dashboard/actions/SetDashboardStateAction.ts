import { IDashboardState } from "../../../type_defs/dashboard/IDashboardState";
import { IAction } from "../type_defs/IAction";
import { ActionType } from "./ActionType";

export interface ISetDashboardStatePayload {
    dashboardState: IDashboardState
}

export interface ISetDashboardStateAction extends IAction {
    type: ActionType.SET_DASHBOARD_STATE,
    payload: ISetDashboardStatePayload
}

export function setDashboardStateAction(dashboardState: IDashboardState): ISetDashboardStateAction {
    return {
        type: ActionType.SET_DASHBOARD_STATE,
        payload: { dashboardState }
    };
}

export const setDashboardStateReducer = (state: IDashboardState, action: ISetDashboardStateAction): IDashboardState => {
    return {
        ...state,
        ...action.payload.dashboardState
    } as IDashboardState;
}