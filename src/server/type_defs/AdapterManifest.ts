export interface AdapterManifest {
    "entry": string
    "name": string
    "app_id": string
    "out_types": string[]
    "single_meas": boolean
    "multi_meas": boolean
    "quality_option": boolean
    "is_meas_picker_present": boolean
    "is_adapter_config_ui_present": boolean
}
