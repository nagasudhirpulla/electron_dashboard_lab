import { IWidgetConfigEditorProps } from "./IWidgetConfigEditorProps";
import { IMeasurementEditorProps } from "../../../../../measurements/type_defs/IMeasurementEditorProps";
export interface IWidgetEditorModalProps {
    value?: IWidgetConfigEditorProps['value']
    onSubmit?: IWidgetConfigEditorProps['onChange']
    measTypes: { name: string; val: string; }[]
    show: boolean
    setShow: (v: boolean) => void
    MeasurementEditor:React.FC<IMeasurementEditorProps>
}