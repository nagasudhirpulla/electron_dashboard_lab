import { IAction } from "../type_defs/IAction";
import { ActionType } from "./ActionType";
import { IDashboardSettings } from "../../components/DashboardSettingsEditor/type_defs/IDashboardSettings";
import { IElectronDashboardState } from "../type_defs/IDashboardState";

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

export const setDashboardSettingsReducer = (state: IElectronDashboardState, action: ISetDashboardSettingsAction): IElectronDashboardState => {
    return {
        ...state,
        gridConfig: {
            ...state.gridConfig,
            backgroundColor: action.payload.dashboardSettings.backgroundColor
        },
        timerSettings: {
            ...action.payload.dashboardSettings.timerSettings
        }
    } as IElectronDashboardState;
}