import { IDashboardState } from "../../../type_defs/dashboard/IDashboardState";
import { TimePeriod } from "../../../../../Time/TimePeriod";
import { getDefaultWidgetProps } from "./getDefaultWidgetProps";

export const getDefaultDashboardState = (): IDashboardState => {
    return {
        gridConfig: {
            rowHeight: 500,
            cols: { lg: 60, md: 50, sm: 30, xs: 30, xxs: 30 },
            backgroundColor: 'white',
            breakpoints: { lg: 1200, md: 996, sm: 768 }
        },
        className: 'dashboard',
        timerSettings: {
            timerOn: false,
            timerPeriodicity: new TimePeriod()
        },
        widgetProps: [getDefaultWidgetProps()],
        currentBreakpoint: 'lg'
    }
}