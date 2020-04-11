import { IWidgetConfigEditorProps } from "./IWidgetConfigEditorProps";
export interface IWidgetEditorModalProps {
    value?: IWidgetConfigEditorProps['value']
    onSubmit?: IWidgetConfigEditorProps['onChange']
    show: boolean
    setShow: (v: boolean) => void
}