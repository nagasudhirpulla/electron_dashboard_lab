import { ILinePlotWidgetConfig } from "../type_defs/ILinePlotWidgetConfig";

export const getDefaultCustomWidgetConfig = (): ILinePlotWidgetConfig["customConfig"] => {
    return {
        showGrid: true,
        titleColor: 'black',
        backgroundColor: 'white'
    }
}