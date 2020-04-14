export interface IWidgetAddModalProps {
    value: string[]
    onSubmit: (v: string) => void
    show:boolean
    setShow: (v: boolean) => void
}