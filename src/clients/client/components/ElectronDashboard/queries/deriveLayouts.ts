import { Layouts } from "react-grid-layout";
import { IWidgetProps } from "../../../type_defs/dashboard/IWidgetProps";

export const deriveLayouts = (widgetLayouts: IWidgetProps["layouts"][]): Layouts => {
    //TODO move this to queries folder
    let layouts: Layouts = {}
    widgetLayouts.forEach((wpl, wIndex) => {
        // get breakpoint key of widget layoutsDict
        const brPntKeys = Object.keys(wpl);
        for (let brPntKeyIter = 0; brPntKeyIter < brPntKeys.length; brPntKeyIter++) {
            const brPntKey = brPntKeys[brPntKeyIter]
            if (wIndex == 0) {
                // ensure key is present in final layouts
                layouts[brPntKey] = []
            }
            // push the layout item in the layouts dictionary
            layouts[brPntKey].push(wpl[brPntKey])
        }
    })
    return layouts
}