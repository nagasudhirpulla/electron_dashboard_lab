import { generateMeasFromType } from "../../../../../measurements/commands/generateMeasFromType";
import { ISeriesConfig } from "../../../type_defs/dashboard/ISeriesConfig";
import { VarTime } from "../../../../../Time/VarTime";

export const getNewSeriesForVizType = (newMeasType: string, vizType: string, numMeasPerSeries: number): ISeriesConfig => {
    const newMeas = generateMeasFromType(newMeasType)
    if (newMeas == null) { return; }
    let newSeriesConfig: ISeriesConfig = {
        title: 'series',
        measurements: [],
        startTime: new VarTime(),
        endTime: new VarTime(),
        vizType: vizType,
        customConfig: {}
    }
    for (let measIter = 0; measIter < numMeasPerSeries; measIter++) {
        newSeriesConfig.measurements.push({ ...newMeas })
    }
    return newSeriesConfig
}