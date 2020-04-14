import { IDashboardState } from "../type_defs/IDashboardState";
import { IAction } from "../type_defs/IAction";
import { ActionType } from "./ActionType";
import { ISeriesData } from "../../../type_defs/dashboard/ISeriesData";

export interface ISetSeriesDataPayload {
    widgetIndex: number
    seriesIndex: number
    data: ISeriesData
    append: boolean
}

export interface ISetSeriesDataAction extends IAction {
    type: ActionType.SET_SERIES_DATA,
    payload: ISetSeriesDataPayload
}

export function setSeriesDataAction(widgetIndex: number, seriesIndex: number, data: ISeriesData, append: boolean): ISetSeriesDataAction {
    return {
        type: ActionType.SET_SERIES_DATA,
        payload: { widgetIndex, seriesIndex, data, append }
    }
}

export const setSeriesDataReducer = (state: IDashboardState, action: ISetSeriesDataAction): IDashboardState => {
    const wInd = action.payload.widgetIndex
    const sInd = action.payload.seriesIndex
    let newData: ISeriesData = []

    if (!action.payload.append) {
        newData = action.payload.data
    } else {
        for (const measIter in action.payload.data) {
            newData[measIter] = []
        }
        for (const measIter in action.payload.data) {
            if (state.widgetProps[wInd].data[sInd].hasOwnProperty(measIter)) {
                // append only if measurement index is present in series data dictionary
                newData[measIter] = [...state.widgetProps[wInd].data[sInd][measIter], ...action.payload.data[measIter]]
            } else {
                // if measurement index is absent in series data, then assign instead of append
                newData[measIter] = action.payload.data[measIter]
            }
        }
    }
    return {
        ...state,
        widgetProps: [
            ...state.widgetProps.slice(0, wInd),
            {
                ...state.widgetProps[wInd],
                data: {
                    ...state.widgetProps[wInd].data,
                    [sInd]: newData
                }
            },
            ...state.widgetProps.slice(wInd + 1),
        ]
    }
}