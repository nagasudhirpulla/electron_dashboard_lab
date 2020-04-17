import { IElectronDashboardState } from "../type_defs/IDashboardState";
import { IAction } from "../type_defs/IAction";
import { ActionType } from "./ActionType";

export interface ISetDashboardStatePayload {
    dashboardState: IElectronDashboardState
}

export interface ISetDashboardStateAction extends IAction {
    type: ActionType.SET_DASHBOARD_STATE,
    payload: ISetDashboardStatePayload
}

export function setDashboardStateAction(dashboardState: IElectronDashboardState): ISetDashboardStateAction {
    return {
        type: ActionType.SET_DASHBOARD_STATE,
        payload: { dashboardState }
    };
}

export const setDashboardStateReducer = (state: IElectronDashboardState, action: ISetDashboardStateAction): IElectronDashboardState => {
    return {
        ...state,
        ...action.payload.dashboardState
    } as IElectronDashboardState;
}