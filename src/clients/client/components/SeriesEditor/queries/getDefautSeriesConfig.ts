import { ISeriesConfig } from "../../../type_defs/dashboard/ISeriesConfig";
import { VarTime } from "../../../../../Time/VarTime";
import { LinePlotMetadata } from "../../LinePlot/LinePlotMetadata";
import { TimePeriod } from "../../../../../Time/TimePeriod";

export const getDefaultSeriesConfig = (): ISeriesConfig => {
    return {
        title: "title",
        measurements: [],
        startTime: new VarTime(),
        endTime: new VarTime(),
        fetchWindow: new TimePeriod(),
        vizType: LinePlotMetadata.discriminator,
        customConfig: {},
    }
}