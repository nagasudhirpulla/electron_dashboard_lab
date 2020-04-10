import { IDashboardState } from "../../../type_defs/dashboard/IDashboardState"
import { IAction } from "../type_defs/IAction"
import { ActionType } from "../actions/ActionType"
import { setDashboardStateReducer, ISetDashboardStateAction, setDashboardStateAction } from "../actions/SetDashboardStateAction"
import { useReducer, useEffect, useCallback } from "react"
import { openDashboardFromDialog } from "../commands/openDashboardFromDialog"
import { saveDashboardFromDialog } from "../commands/saveDashboardFromDialog"
import { IToggleCompactionAction, toggleCompactionReducer } from "../actions/ToggleCompactionAction"

export const useDashboardReducer = (initState: IDashboardState): [IDashboardState, React.Dispatch<IAction>] => {
    // create the reducer function
    const reducer = (state: IDashboardState, action: IAction): IDashboardState => {
        switch (action.type) {
            case ActionType.SET_DASHBOARD_STATE:
                return setDashboardStateReducer(state, action as ISetDashboardStateAction)
            case ActionType.TOGGLE_COMPACTION:
                return toggleCompactionReducer(state, action as IToggleCompactionAction)
            default:
                console.log("unwanted action detected");
                console.log(JSON.stringify(action));
                //throw new Error();
                return state;
        }
    }

    // create the reducer hook
    let [pageState, pageStateDispatch]: [IDashboardState, React.Dispatch<IAction>] = useReducer(reducer, initState)

    useEffect(() => {
        (async function () {
            // perform initialization stuff
            pageStateDispatch(setDashboardStateAction({ ...pageState, mounted: true }))
        })()
    }, []) // Empty array causes this callback to only be created once per component instance

    // Middleware to intercept dispatch calls that require async operations
    const asyncDispatch: React.Dispatch<IAction> = useCallback(async (action) => {
        switch (action.type) {
            case ActionType.OPEN_DASHBOARD: {
                const dashboard = await openDashboardFromDialog()
                pageStateDispatch(setDashboardStateAction(dashboard))
                break;
            }
            case ActionType.SAVE_DASHBOARD: {
                const isSuccess = await saveDashboardFromDialog(pageState)
                if (isSuccess) {
                    alert('Successfully saved Dashboard!')
                } else {
                    alert('Failed to save Dashboard...')
                }
                break;
            }
            default:
                pageStateDispatch(action);
        }
    }, [])

    return [pageState, asyncDispatch];
}