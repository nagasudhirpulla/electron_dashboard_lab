import { IDashboardState } from "../type_defs/IDashboardState"
import { IAction } from "../type_defs/IAction"
import { ActionType } from "../actions/ActionType"
import { setDashboardStateReducer, ISetDashboardStateAction, setDashboardStateAction } from "../actions/SetDashboardStateAction"
import { useReducer, useEffect, useCallback } from "react"
import { openDashboardFromDialog } from "../commands/openDashboardFromDialog"
import { saveDashboardFromDialog } from "../commands/saveDashboardFromDialog"
import { IToggleCompactionAction, toggleCompactionReducer } from "../actions/ToggleCompactionAction"
import { ILayoutChangeAction, layoutChangeReducer } from "../actions/LayoutChangeAction"
import { duplicateWidgetReducer, IDuplicateWidgetAction } from "../actions/DuplicateWidgetAction"
import { deleteWidgetReducer, IDeleteWidgetAction } from "../actions/DeleteWidgetAction"
import { ISetDashboardSettingsAction, setDashboardSettingsReducer } from "../actions/SetDashboardSettingsAction"
import { fetchWidgetDataDispatch, IFetchWidgetDataAction } from "../actions/FetchWidgetDataAction"
import { fetchSeriesDataDispatch, IFetchSeriesDataAction } from "../actions/FetchSeriesDataAction"
import { fetchAllWidgetsDataDispatch, IFetchAllWidgetsDataAction } from "../actions/FetchAllWidgetsDataAction"
import { setSeriesDataReducer, ISetSeriesDataAction } from "../actions/SetSeriesDataAction"
import { addWidgetReducer, IAddWidgetAction } from "../actions/AddWidgetAction"
import { toggleAutofetchReducer, IToggleAutofetchAction } from "../actions/ToggleAutoFetchAction"

export const useDashboardReducer = (initState: IDashboardState): [IDashboardState, React.Dispatch<IAction>] => {
    // create the reducer function
    const reducer = (state: IDashboardState, action: IAction): IDashboardState => {
        switch (action.type) {
            case ActionType.SET_DASHBOARD_STATE:
                return setDashboardStateReducer(state, action as ISetDashboardStateAction)
            case ActionType.TOGGLE_COMPACTION:
                return toggleCompactionReducer(state, action as IToggleCompactionAction)
            case ActionType.LAYOUT_CHANGE:
                return layoutChangeReducer(state, action as ILayoutChangeAction)
            case ActionType.DUPLICATE_WIDGET:
                return duplicateWidgetReducer(state, action as IDuplicateWidgetAction)
            case ActionType.ADD_WIDGET:
                return addWidgetReducer(state, action as IAddWidgetAction)
            case ActionType.DELETE_WIDGET:
                return deleteWidgetReducer(state, action as IDeleteWidgetAction)
            case ActionType.SET_DASHBOARD_SETIINGS:
                return setDashboardSettingsReducer(state, action as ISetDashboardSettingsAction)
            case ActionType.SET_SERIES_DATA:
                return setSeriesDataReducer(state, action as ISetSeriesDataAction)
            case ActionType.TOGGLE_AUTOFETCH:
                return toggleAutofetchReducer(state, action as IToggleAutofetchAction)
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
                console.log(`Opening dashboard ${JSON.stringify(dashboard)}`)
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
                break
            }
            case ActionType.FETCH_ALL_WIDGETS_DATA: {
                await fetchAllWidgetsDataDispatch(action as IFetchAllWidgetsDataAction, pageState, pageStateDispatch)
                break
            }
            case ActionType.FETCH_WIDGET_DATA: {
                await fetchWidgetDataDispatch(action as IFetchWidgetDataAction, pageState, pageStateDispatch)
                break
            }
            case ActionType.FETCH_SERIES_DATA: {
                await fetchSeriesDataDispatch(action as IFetchSeriesDataAction, pageState, pageStateDispatch)
                break
            }
            default:
                pageStateDispatch(action);
        }
    }, [pageState])

    return [pageState, asyncDispatch];
}