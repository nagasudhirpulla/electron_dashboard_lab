import { IDashboardState } from "../../../type_defs/dashboard/IDashboardState";
import { IAction } from "../type_defs/IAction";
import { ActionType } from "./ActionType";
import { v4 as uuid } from 'uuid';
import { getDefaultWidgetProps } from "../queries/getDefaultWidgetProps";

export interface IDuplicateWidgetPayload {
    widgetIndex: number
}

export interface IDuplicateWidgetAction extends IAction {
    type: ActionType.DUPLICATE_WIDGET,
    payload: IDuplicateWidgetPayload
}

export function duplicateWidgetAction(widgetIndex: number): IDuplicateWidgetAction {
    return {
        type: ActionType.DUPLICATE_WIDGET,
        payload: { widgetIndex }
    };
}

export const duplicateWidgetReducer = (state: IDashboardState, action: IDuplicateWidgetAction): IDashboardState => {
    let newWidgetProps = getDefaultWidgetProps();
    const wInd = action.payload.widgetIndex
    newWidgetProps.layouts[state.currentBreakpoint] = {
        ...state.widgetProps[wInd].layouts[state.currentBreakpoint],
        x: 0,
        y: Infinity,
        i: uuid(),
        static: false
    }
    newWidgetProps.config = JSON.parse(JSON.stringify(state.widgetProps[wInd].config));

    return {
        ...state,
        widgetProps: [...state.widgetProps, newWidgetProps]
    } as IDashboardState;
}