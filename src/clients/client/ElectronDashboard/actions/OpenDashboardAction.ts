import { IElectronDashboardState } from "../type_defs/IDashboardState";
import { IAction } from "../type_defs/IAction";
import { ActionType } from "./ActionType";
import { setDashboardStateAction } from "./SetDashboardStateAction";
import { openDashboardFromDialog } from "../commands/openDashboardFromDialog";

export interface IOpenDashboardPayload {
}

export interface IOpenDashboardAction extends IAction {
    type: ActionType.OPEN_DASHBOARD,
    payload: IOpenDashboardPayload
}

export function openDashboardAction(): IOpenDashboardAction {
    return {
        type: ActionType.OPEN_DASHBOARD,
        payload: {}
    };
}

export const openDashboardDispatch = async (action: IOpenDashboardAction, pageState: IElectronDashboardState, pageStateDispatch: React.Dispatch<IAction>): Promise<void> => {
    const newState: IElectronDashboardState = await openDashboardFromDialog()
    pageStateDispatch(setDashboardStateAction({ ...pageState, ...newState }))
}