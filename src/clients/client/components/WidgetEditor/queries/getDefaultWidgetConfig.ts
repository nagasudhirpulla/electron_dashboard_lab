import { IWidgetConfig } from "../../../type_defs/dashboard/IWidgetConfig";
import { LinePlotMetadata } from "../../LinePlot/LinePlotMetadata";
import { getDefaultCustomWidgetConfig } from "../../LinePlot/queries/getDefaultCustomWidgetConfig";

export const getDefaultWidgetConfig = (): IWidgetConfig => {
    return {
        vizType: LinePlotMetadata.discriminator,
        title: 'Widget Title',
        border: { color: 'black', size: 1, style: 'solid' },
        seriesConfigs: [],
        customConfig: getDefaultCustomWidgetConfig()
    }
}