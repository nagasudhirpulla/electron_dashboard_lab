import { IDashboardState } from "../../../type_defs/dashboard/IDashboardState";
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

export const openDashboardDispatch = async (action: IOpenDashboardAction, pageState: IDashboardState, pageStateDispatch: React.Dispatch<IAction>): Promise<void> => {
    // TODO complete this
    const newState: IDashboardState = await openDashboardFromDialog()
    pageStateDispatch(setDashboardStateAction({ ...pageState, ...newState }))
}