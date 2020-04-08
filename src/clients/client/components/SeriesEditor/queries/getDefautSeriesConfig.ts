import { ISeriesConfig } from "../../../type_defs/dashboard/ISeriesConfig";
import { VarTime } from "../../../../../Time/VarTime";
import { LinePlotMetadata } from "../../LinePlot/LinePlotMetadata";

export const getDefaultSeriesConfig = (): ISeriesConfig => {
    return {
        title: "title",
        measurements: [],
        startTime: new VarTime(),
        endTime: new VarTime(),
        vizType: LinePlotMetadata.discriminator,
        customConfig: {},
    }
}