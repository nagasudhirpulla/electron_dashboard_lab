import { IDashboardState } from "../type_defs/IDashboardState";
import { IAction } from "../type_defs/IAction";
import { ActionType } from "./ActionType";
import { v4 as uuid } from 'uuid';
import { getDefaultWidgetProps } from "../queries/getDefaultWidgetProps";

export interface IAddWidgetPayload {
    vizType: string
}

export interface IAddWidgetAction extends IAction {
    type: ActionType.ADD_WIDGET,
    payload: IAddWidgetPayload
}

export function addWidgetAction(vizType: string): IAddWidgetAction {
    return {
        type: ActionType.ADD_WIDGET,
        payload: { vizType }
    };
}

export const addWidgetReducer = (state: IDashboardState, action: IAddWidgetAction): IDashboardState => {
    let newWidgetProps = getDefaultWidgetProps();
    const vizType = action.payload.vizType
    newWidgetProps.layouts[state.currentBreakpoint] = {
        ...newWidgetProps.layouts['lg'],
        x: 0,
        y: Infinity,
        i: uuid(),
        static: false
    }
    newWidgetProps.config = { ...newWidgetProps.config, vizType: vizType, customConfig: {} }

    return {
        ...state,
        widgetProps: [...state.widgetProps, newWidgetProps]
    } as IDashboardState;
}