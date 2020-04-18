import { downloadStringAtClient } from "../commands/downloadStringAtClient";
import { IAction } from "../../ElectronDashboard/type_defs/IAction";
import { ActionType } from "../../ElectronDashboard/actions/ActionType";
import { IElectronDashboardState } from "../../ElectronDashboard/type_defs/IDashboardState";
import moment from "moment";


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

const stripDataFromAppState = (state: IElectronDashboardState): IElectronDashboardState => {
    const dataStrippedWidgetProps = state.widgetProps.map(wp => {
        return { ...wp, data: {} }
    })
    let newState = { ...state, widgetProps: dataStrippedWidgetProps }
    return newState
}

export const saveDashboardDispatch = async (action: ISaveDashboardAction, pageState: IElectronDashboardState, pageStateDispatch: React.Dispatch<IAction>): Promise<void> => {
    downloadStringAtClient(`dashboard_${moment(new Date).format('X')}.json`, JSON.stringify(stripDataFromAppState(pageState)))
    console.log(`Downloaded Dashboard!`)
}