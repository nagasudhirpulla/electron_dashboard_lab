// // TODO complete this
// import { IDashboardState } from "../type_defs/IDashboardState";
// import { IAction } from "../type_defs/IAction";
// import { ActionType } from "./ActionType";
// import { setDashboardStateAction } from "./SetDashboardStateAction";

// export interface IStopAutoFetchPayload { }

// export interface IStopAutoFetchAction extends IAction {
//     type: ActionType.STOP_AUTOFETCH,
//     payload: IStopAutoFetchPayload
// }

// export function stopAutoFetchAction(): IStopAutoFetchAction {
//     return {
//         type: ActionType.STOP_AUTOFETCH,
//         payload: {}
//     };
// }

// export const stopAutoFetchDispatch = async (action: IStopAutoFetchAction, pageState: IDashboardState, pageStateDispatch: React.Dispatch<IAction>): Promise<void> => {
//     window.clearInterval(pageState.timer.id)
//     // set timer as Off and not busy 
//     pageStateDispatch(setDashboardStateAction({
//         ...pageState,
//         timer: {
//             ...pageState.timer,
//             isOn: false,
//             busy: false
//         }
//     }))
// }
