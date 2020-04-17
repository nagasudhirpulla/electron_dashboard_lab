import { IElectronDashboardState } from "../type_defs/IDashboardState";
import { IAction } from "../type_defs/IAction";
import { ActionType } from "./ActionType";

export interface IToggleAutofetchPayload {
}

export interface IToggleAutofetchAction extends IAction {
    type: ActionType.TOGGLE_AUTOFETCH,
    payload: IToggleAutofetchPayload
}

export function toggleAutofetchAction(): IToggleAutofetchAction {
    return {
        type: ActionType.TOGGLE_AUTOFETCH,
        payload: {}
    };
}

export const toggleAutofetchReducer = (state: IElectronDashboardState, action: IToggleAutofetchAction): IElectronDashboardState => {
    return {
        ...state,
        timerSettings: {
            ...state.timerSettings,
            timerOn: !state.timerSettings.timerOn
        }
    } as IElectronDashboardState;
}