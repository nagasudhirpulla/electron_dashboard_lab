import { IDashboardProps } from "./IDashboardProps";

export interface IDashboardState extends IDashboardProps {
    currentBreakpoint: 'lg' | 'md' | 'sm' | 'xs' | 'xxs'
    timer: {
        isOn: boolean,
        start: number,
        busy: boolean
    },
    mounted: boolean
}