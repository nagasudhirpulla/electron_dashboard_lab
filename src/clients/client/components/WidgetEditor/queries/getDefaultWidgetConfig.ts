import { IWidgetConfig } from "../../../type_defs/dashboard/IWidgetConfig";
import { LinePlotMetadata } from "../../LinePlot/LinePlotMetadata";
import { getDefaultCustomWidgetConfig } from "../../LinePlot/queries/getDefaultCustomWidgetConfig";

export const getDefaultWidgetConfig = (): IWidgetConfig => {
    return {
        vizType: LinePlotMetadata.discriminator,
        title: 'Widget Title',
        border: '1px solid black',
        seriesConfigs: [],
        customConfig: getDefaultCustomWidgetConfig()
    }
}