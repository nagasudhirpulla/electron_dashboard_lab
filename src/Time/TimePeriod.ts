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

    static addTimePeriod(inpTime: Date, per: ITimePeriod): Date {
        //https://stackoverflow.com/questions/5645058/how-to-add-months-to-a-date-in-javascript
        let newTime = new Date(inpTime)
        if (per.years != 0) {
            newTime = new Date(newTime.setFullYear(newTime.getFullYear() + per.years));
        }
        if (per.months != 0) {
            newTime = new Date(newTime.setMonth(newTime.getMonth() + per.months));
        }
        if (per.days != 0) {
            newTime = new Date(newTime.setDate(newTime.getDate() + per.days))
        }
        if (per.hrs != 0) {
            newTime = new Date(newTime.getTime() + (per.hrs * 60 * 60 * 1000))
        }
        if (per.mins != 0) {
            newTime = new Date(newTime.getTime() + (per.mins * 60 * 1000))
        }
        if (per.secs != 0) {
            newTime = new Date(newTime.getTime() + (per.secs * 1000))
        }
        if (per.millis != 0) {
            newTime = new Date(newTime.getTime() + per.millis)
        }
        return newTime
    }

    static splitWindow(startTime: Date, endTime: Date, per: ITimePeriod): [Date, Date][] {
        if (startTime.getTime() > endTime.getTime()) {
            return []
        }
        let abort = false
        let windows: [Date, Date][] = []
        let currStart = new Date(startTime)
        do {
            let currEnd = TimePeriod.addTimePeriod(currStart, per)
            if (currEnd.getTime() >= endTime.getTime()) {
                currEnd = new Date(endTime)
                abort = true
            }
            windows = [...windows, [currStart, currEnd]]
            currStart = new Date(currEnd)
        } while (!abort)
        return windows
    }
}

