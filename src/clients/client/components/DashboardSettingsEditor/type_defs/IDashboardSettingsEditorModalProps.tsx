import { IDashboardSettingsEditorProps } from './IDashboardSettingsEditorProps';
export interface IDashboardSettingsEditorModalProps {
    value?: IDashboardSettingsEditorProps['value'];
    onSubmit?: IDashboardSettingsEditorProps['onChange'];
    show: boolean;
    setShow: (v: boolean) => void;
}