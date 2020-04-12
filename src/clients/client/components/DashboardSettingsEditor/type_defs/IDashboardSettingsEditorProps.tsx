import { IDashboardSettings } from "./IDashboardSettings";
export interface IDashboardSettingsEditorProps {
    value: IDashboardSettings;
    onChange: (v: IDashboardSettings) => void;
}
