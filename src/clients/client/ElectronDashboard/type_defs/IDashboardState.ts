import { IElectronDashboardProps } from "./IDashboardProps";

export interface IElectronDashboardState extends IElectronDashboardProps {
    currentBreakpoint: 'lg' | 'md' | 'sm' | 'xs' | 'xxs'
    timer: {
        isOn: boolean,
        start: number,
        busy: boolean
    }
}