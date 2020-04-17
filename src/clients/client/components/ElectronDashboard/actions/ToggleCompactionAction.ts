import { IElectronDashboardState } from "../type_defs/IDashboardState";
import { IAction } from "../type_defs/IAction";
import { ActionType } from "./ActionType";

export interface IToggleCompactionPayload {

}

export interface IToggleCompactionAction extends IAction {
    type: ActionType.TOGGLE_COMPACTION,
    payload: IToggleCompactionPayload
}

export function toggleCompactionAction(): IToggleCompactionAction {
    return {
        type: ActionType.TOGGLE_COMPACTION,
        payload: {}
    };
}

export const toggleCompactionReducer = (state: IElectronDashboardState, action: IToggleCompactionAction): IElectronDashboardState => {
    const oldCompactType = state.gridConfig.compactType;
    const compactType =
        oldCompactType === "horizontal"
            ? "vertical"
            : oldCompactType === "vertical" ? null : "horizontal"
    return { ...state, gridConfig: { ...state.gridConfig, compactType } } as IElectronDashboardState;
}