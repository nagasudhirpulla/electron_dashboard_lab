/**
 * In path, query_params, post_body, request_headers objects
 * ${meas_id} will be replaced by measurement id
 * format strings will be as per moment js https://momentjs.com/docs/#/displaying/format/
 * ${start_time} will be replaced by start time based on start_time_format
 * ${end_time} will be replaced by end time based on end_time_format
 * TODO accommodate periodicity in params
 * The api should respond in the format ts1,val1,ts2,val2,ts3,val3,... where ts is timestamp in unix epoch milliseconds
 */
export interface IApiManifest {
    name: string
    api_id: string
    baseUrl: string
    path: string
    meas_picker_path?: string
    request_type?: 'get' | 'post' | 'put' | 'delete' //default is get
    start_time_format?: string
    end_time_format?: string
    query_params?: {}
    body?: {}
    request_headers?: {}
    quality_option: boolean
    is_resampling_present: boolean
}