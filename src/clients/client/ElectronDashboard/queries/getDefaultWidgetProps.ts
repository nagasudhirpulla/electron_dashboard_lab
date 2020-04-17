import { v4 as uuid } from 'uuid';
import { IWidgetProps } from '../../type_defs/dashboard/IWidgetProps';
import { getDefaultWidgetConfig } from '../../components/WidgetEditor/queries/getDefaultWidgetConfig';

export const getDefaultWidgetProps = (): IWidgetProps => {
    let widgetProps: IWidgetProps = {
        data: {},
        config: getDefaultWidgetConfig(),
        layouts: {
            lg: {
                x: 0,
                y: 0,
                w: 20,
                h: 15,
                i: uuid(),
                static: false
            }
        }
    }
    return widgetProps
}