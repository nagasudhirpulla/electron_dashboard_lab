import { IElectronDashboardState } from "../type_defs/IDashboardState";
import { getDefaultWidgetProps } from "./getDefaultWidgetProps";
import { TimePeriod } from "../../../../Time/TimePeriod";

export const getDefaultDashboardState = (): IElectronDashboardState => {
    return {
        gridConfig: {
            rowHeight: 20,
            cols: { lg: 60, md: 50, sm: 30 },
            backgroundColor: 'white',
            breakpoints: { lg: 1200, md: 996, sm: 768 },
            compactType: "vertical"
        },
        className: 'dashboard',
        timerSettings: {
            timerOn: false,
            timerPeriodicity: new TimePeriod()
        },
        widgetProps: [getDefaultWidgetProps()],
        timer: {
            isOn: false,
            start: 0,
            busy: false
        },
        currentBreakpoint: 'lg'
    }
}