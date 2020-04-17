import { IDashboardState } from "../type_defs/IDashboardState";
import { IDashboardProps } from "../../ElectronDashboard/type_defs/IDashboardProps";
import { getDefaultDashboardState } from "../../ElectronDashboard/queries/getDefaultDashboardState";

export const getDashboardStateFromProps = (props: IDashboardProps): IDashboardState => {
    const propVal = { ...getDefaultDashboardState(), ...props }
    return {
        gridConfig: propVal.gridConfig,
        className: propVal.className,
        timerSettings: propVal.timerSettings,
        widgetProps: propVal.widgetProps,
        currentBreakpoint: 'lg',
        timer: {
            isOn: false,
            start: 0,
            busy: false
        },
        mounted: false
    }
}