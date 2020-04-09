import { IDashboardState } from "../../../type_defs/dashboard/IDashboardState";
import { ILayout } from "../../../type_defs/gridLayout/ILayout";
import { TimePeriod } from "../../../../../Time/TimePeriod";

export const getDefaultDashboardState = (): IDashboardState => {
    return {
        gridConfig: {
            rowHeight: 500,
            onLayoutChange: (currLayout: ILayout, allLayouts: any) => { },
            cols: { lg: 60, md: 50, sm: 30, xs: 30, xxs: 30 },
            initialLayout: [{ lg: [] }],
            backgroundColor: 'white',
        },
        className: "dashboard",
        timerSettings: {
            timerOn: false,
            timerPeriodicity: new TimePeriod()
        },
        widgetProps: []
    }
}