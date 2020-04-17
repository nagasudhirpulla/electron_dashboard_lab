import { IWidgetConfigEditorProps } from "./IWidgetConfigEditorProps";
export interface IWidgetEditorModalProps {
    value?: IWidgetConfigEditorProps['value']
    onSubmit?: IWidgetConfigEditorProps['onChange']
    measTypes: { name: string; val: string; }[]
    show: boolean
    setShow: (v: boolean) => void
}