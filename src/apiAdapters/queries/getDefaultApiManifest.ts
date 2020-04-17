import { IApiManifest } from "../type_defs/IApiManifest"

export const getDefaultApiManifest = (): IApiManifest => {
    return {
        name: '',
        api_id: '',
        baseUrl: '',
        path: '',
        request_type: 'get', //default is get
        start_time_format: null,
        end_time_format: null,
        query_params: null,
        body: null,
        request_headers: null,
        quality_option: false,
        is_resampling_present: false
    }
}