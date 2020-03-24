import { ITimePeriod } from "./type_defs/ITimePeriod";

export class TimePeriod implements ITimePeriod {
    years: number = 0;
    months: number = 0;
    days: number = 0;
    hrs: number = 0;
    mins: number = 0;
    secs: number = 0;
    millis: number = 0;
    static getSeconds(per: ITimePeriod): number {
        return per.years * 365 * 30 * 24 * 60 * 60 + per.months * 30 * 24 * 60 * 60 + per.days * 24 * 60 * 60 + per.hrs * 60 * 60 + per.mins * 60 + per.secs + per.millis * 0.001;
    }
}