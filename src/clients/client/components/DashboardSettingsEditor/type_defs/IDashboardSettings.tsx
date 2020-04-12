import { ITimePeriod } from '../../../../../Time/type_defs/ITimePeriod';
export interface IDashboardSettings {
    backgroundColor: string
    timerSettings: {
        timerOn: boolean
        timerPeriodicity: ITimePeriod
    }
}
