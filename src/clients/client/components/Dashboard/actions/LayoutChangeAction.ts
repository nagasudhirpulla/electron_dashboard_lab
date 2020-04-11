import { IDashboardState } from "../../../type_defs/dashboard/IDashboardState";
import { IAction } from "../type_defs/IAction";
import { ActionType } from "./ActionType";
import { setDashboardStateAction } from "./SetDashboardStateAction";
import { Layout, Layouts } from "react-grid-layout";

export interface ILayoutChangePayload {
    currLayout: Layout[],
    allLayouts: Layouts
}

export interface ILayoutChangeAction extends IAction {
    type: ActionType.LAYOUT_CHANGE,
    payload: ILayoutChangePayload
}

export function layoutChangeAction(currLayout: Layout[], allLayouts: Layouts): ILayoutChangeAction {
    return {
        type: ActionType.LAYOUT_CHANGE,
        payload: { currLayout, allLayouts }
    };
}

export const layoutChangeReducer = (state: IDashboardState, action: ILayoutChangeAction): IDashboardState => {
    // get the layouts breakpoints
    const laytBrPnts = Object.keys(action.payload.allLayouts);
    const widgetProps = state.widgetProps;
    for (let brPntIter = 0; brPntIter < laytBrPnts.length; brPntIter++) {
        const laytBrPnt = laytBrPnts[brPntIter]
        const layout = action.payload.allLayouts[laytBrPnt];
        for (let layInd = 0; (layInd < layout.length) && (layInd < state.widgetProps.length); layInd++) {
            // we assume that the order is preserved (todo be sure)
            widgetProps[layInd].layouts[laytBrPnt] = layout[layInd]
        }
    }
    return {
        ...state,
        widgetProps: widgetProps
    } as IDashboardState;
}