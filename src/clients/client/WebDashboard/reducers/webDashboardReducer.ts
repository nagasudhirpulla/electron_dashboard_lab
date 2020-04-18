import { IElectronDashboardState } from "../../ElectronDashboard/type_defs/IDashboardState"
import { IAction } from "../../ElectronDashboard/type_defs/IAction"
import { ActionType } from "../../ElectronDashboard/actions/ActionType"
import { setDashboardStateReducer, ISetDashboardStateAction, setDashboardStateAction } from "../../ElectronDashboard/actions/SetDashboardStateAction"
import { toggleCompactionReducer, IToggleCompactionAction } from "../../ElectronDashboard/actions/ToggleCompactionAction"
import { layoutChangeReducer, ILayoutChangeAction } from "../../ElectronDashboard/actions/LayoutChangeAction"
import { duplicateWidgetReducer, IDuplicateWidgetAction } from "../../ElectronDashboard/actions/DuplicateWidgetAction"
import { addWidgetReducer, IAddWidgetAction } from "../../ElectronDashboard/actions/AddWidgetAction"
import { deleteWidgetReducer, IDeleteWidgetAction } from "../../ElectronDashboard/actions/DeleteWidgetAction"
import { setDashboardSettingsReducer, ISetDashboardSettingsAction } from "../../ElectronDashboard/actions/SetDashboardSettingsAction"
import { setSeriesDataReducer, ISetSeriesDataAction } from "../../ElectronDashboard/actions/SetSeriesDataAction"
import { toggleAutofetchReducer, IToggleAutofetchAction } from "../../ElectronDashboard/actions/ToggleAutoFetchAction"
import { useReducer, useEffect, useCallback } from "react"
import { IFetchAllWidgetsDataAction } from "../../ElectronDashboard/actions/FetchAllWidgetsDataAction"
import { IFetchWidgetDataAction } from "../../ElectronDashboard/actions/FetchWidgetDataAction"
import { IFetchSeriesDataAction } from "../../ElectronDashboard/actions/FetchSeriesDataAction"
import { fetchWebWidgetDataDispatch } from "../actions/FetchWidgetDataAction"
import { fetchAllWebWidgetsDataDispatch } from "../actions/FetchAllWidgetsDataAction"
import { fetchWebSeriesDataDispatch } from "../actions/FetchSeriesDataAction"
import { ExportExcelDispatch, IExportExcelAction } from "../actions/ExportExcelAction"
import { saveDashboardDispatch, ISaveDashboardAction } from "../actions/SaveDashboardAction"

export const useWebDashboardReducer = (initState: IElectronDashboardState): [IElectronDashboardState, React.Dispatch<IAction>] => {
    // create the reducer function
    const reducer = (state: IElectronDashboardState, action: IAction): IElectronDashboardState => {
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
    let [pageState, pageStateDispatch]: [IElectronDashboardState, React.Dispatch<IAction>] = useReducer(reducer, initState)

    useEffect(() => {
        (async function () {
            // perform initialization stuff
            pageStateDispatch(setDashboardStateAction({ ...pageState }))
        })()
    }, []) // Empty array causes this callback to only be created once per component instance

    // Middleware to intercept dispatch calls that require async operations
    const asyncDispatch: React.Dispatch<IAction> = useCallback(async (action) => {
        switch (action.type) {
            case ActionType.OPEN_DASHBOARD: {
                //TODO
                break;
            }
            case ActionType.SAVE_DASHBOARD: {
                await saveDashboardDispatch(action as ISaveDashboardAction, pageState, pageStateDispatch)
                break
            }
            case ActionType.FETCH_ALL_WIDGETS_DATA: {
                await fetchAllWebWidgetsDataDispatch(action as IFetchAllWidgetsDataAction, pageState, pageStateDispatch)
                break
            }
            case ActionType.FETCH_WIDGET_DATA: {
                await fetchWebWidgetDataDispatch(action as IFetchWidgetDataAction, pageState, pageStateDispatch)
                break
            }
            case ActionType.FETCH_SERIES_DATA: {
                await fetchWebSeriesDataDispatch(action as IFetchSeriesDataAction, pageState, pageStateDispatch)
                break
            }
            case ActionType.EXPORT_EXCEL: {
                await ExportExcelDispatch(action as IExportExcelAction, pageState, pageStateDispatch)
                break
            }
            default:
                pageStateDispatch(action);
        }
    }, [pageState])

    return [pageState, asyncDispatch];
}