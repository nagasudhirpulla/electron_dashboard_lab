import { generateMeasFromType } from "../../../../../measurements/commands/generateMeasFromType";
import { ISeriesConfig } from "../../../type_defs/dashboard/ISeriesConfig";
import { VarTime } from "../../../../../Time/VarTime";
import { TimePeriod } from "../../../../../Time/TimePeriod";

export const getNewSeriesForVizType = (newMeasTypes: string[], vizType: string): ISeriesConfig => {
    let newSeriesConfig: ISeriesConfig = {
        title: 'series',
        measurements: [],
        startTime: new VarTime(),
        endTime: new VarTime(),
        vizType: vizType,
        fetchWindow: new TimePeriod(),
        customConfig: {}
    }
    for (let measIter = 0; measIter < newMeasTypes.length; measIter++) {
        newSeriesConfig.measurements.push({ ...generateMeasFromType(newMeasTypes[measIter]) })
    }
    return newSeriesConfig
}