// import { IDashboardState } from "../type_defs/IDashboardState";
// import { IAction } from "../type_defs/IAction";
// import { ActionType } from "./ActionType";
// import { setDashboardStateAction } from "./SetDashboardStateAction";
// import { TimePeriod } from "../../../../../Time/TimePeriod";
// import { fetchAllWidgetsDataDispatch, fetchAllWidgetsDataAction } from "./FetchAllWidgetsDataAction";

// export interface IStartAutoFetchPayload { }

// export interface IStartAutoFetchAction extends IAction {
//     type: ActionType.START_AUTOFETCH,
//     payload: IStartAutoFetchPayload
// }

// export function startAutoFetchAction(): IStartAutoFetchAction {
//     return {
//         type: ActionType.START_AUTOFETCH,
//         payload: {}
//     };
// }

// export const startAutoFetchDispatch = async (action: IStartAutoFetchAction, pageState: IDashboardState, pageStateDispatch: React.Dispatch<IAction>): Promise<void> => {
//     // ignore if timer already is ON
//     if (pageState.timer.isOn) {
//         return
//     }
//     const timerPeriod = 1000 * TimePeriod.getSeconds(pageState.timerSettings.timerPeriodicity)
//     if (timerPeriod <= 0) {
//         return;
//     }
//     // set timer as ON 
//     console.log('setting timer state as ON')
//     pageStateDispatch(setDashboardStateAction({
//         ...pageState,
//         timer: {
//             ...pageState.timer,
//             isOn: true
//         }
//     }))
//     // start javascript timer
//     const timerFunc = async () => {
//         if (pageState.timer.busy) {
//             return
//         } else {
//             // set timer as busy
//             pageStateDispatch(setDashboardStateAction({
//                 ...pageState,
//                 timer: {
//                     ...pageState.timer,
//                     busy: true
//                 }
//             }))
//             // fetch all widgets data
//             await fetchAllWidgetsDataDispatch(fetchAllWidgetsDataAction(), pageState, pageStateDispatch)
//             // set timer as not busy
//             pageStateDispatch(setDashboardStateAction({
//                 ...pageState,
//                 timer: {
//                     ...pageState.timer,
//                     busy: false
//                 }
//             }))
//         }
//     }
//     const timer = window.setInterval(timerFunc, timerPeriod)
//     // set timer id
//     pageStateDispatch(setDashboardStateAction({
//         ...pageState,
//         timer: {
//             ...pageState.timer,
//             id: timer
//         }
//     }))
//     // call function for immediate start
//     await timerFunc()
// }
