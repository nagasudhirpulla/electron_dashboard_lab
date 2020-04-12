import { IAction } from "../type_defs/IAction";
import { ActionType } from "./ActionType";
import { IDashboardSettings } from "../../DashboardSettingsEditor/type_defs/IDashboardSettings";
import { IDashboardState } from "../type_defs/IDashboardState";

export interface ISetDashboardSettingsPayload {
    dashboardSettings: IDashboardSettings
}

export interface ISetDashboardSettingsAction extends IAction {
    type: ActionType.SET_DASHBOARD_SETIINGS,
    payload: ISetDashboardSettingsPayload
}

export function setDashboardSettingsAction(dashboardSettings: IDashboardSettings): ISetDashboardSettingsAction {
    return {
        type: ActionType.SET_DASHBOARD_SETIINGS,
        payload: { dashboardSettings }
    };
}

export const setDashboardSettingsReducer = (state: IDashboardState, action: ISetDashboardSettingsAction): IDashboardState => {
    return {
        ...state,
        gridConfig: {
            ...state.gridConfig,
            backgroundColor: action.payload.dashboardSettings.backgroundColor
        },
        timerSettings: {
            ...action.payload.dashboardSettings.timerSettings
        }
    } as IDashboardState;
}