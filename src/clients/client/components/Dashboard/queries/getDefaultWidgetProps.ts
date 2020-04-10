import { IWidgetProps } from "../../../type_defs/dashboard/IWidgetProps"
import { getDefaultWidgetConfig } from "../../WidgetEditor/queries/getDefaultWidgetConfig"
import { v4 as uuid } from 'uuid';

export const getDefaultWidgetProps = (): IWidgetProps => {
    let widgetProps: IWidgetProps = {
        data: {},
        config: getDefaultWidgetConfig(),
        layouts: {
            lg: {
                x: 0,
                y: 0,
                w: 20,
                h: 5,
                i: uuid(),
                static: false
            }
        }
    }
    return widgetProps
}