import { IDashboardState } from "../type_defs/IDashboardState";
import { IAction } from "../type_defs/IAction";
import { ActionType } from "./ActionType";
import { saveDashboardFromDialog } from "../commands/saveDashboardFromDialog";

export interface ISaveDashboardPayload {

}

export interface ISaveDashboardAction extends IAction {
    type: ActionType.SAVE_DASHBOARD,
    payload: ISaveDashboardPayload
}

export function saveDashboardAction(): ISaveDashboardAction {
    return {
        type: ActionType.SAVE_DASHBOARD,
        payload: {}
    };
}

const stripDataFromAppState = (state: IDashboardState): IDashboardState => {
    const dataStrippedWidgetProps = state.widgetProps.map(wp => {
        return { ...wp, data: {} }
    })
    let newState = { ...state, widgetProps: dataStrippedWidgetProps }
    return newState
}

export const saveDashboardDispatch = async (action: ISaveDashboardAction, pageState: IDashboardState, pageStateDispatch: React.Dispatch<IAction>): Promise<void> => {
    const isSuccess = await saveDashboardFromDialog(stripDataFromAppState(pageState))
    console.log(`Save Dashboard = ${isSuccess}`)
}