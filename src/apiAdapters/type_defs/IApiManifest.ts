/**
 * In path, query_params, post_body objects
 * ${meas_id} will be replaced by measurement id
 * ${start_time} will be replaced by start time based on start_time_format
 * ${end_time} will be replaced by end time based on end_time_format
 * TODO accommodate periodicity in params
 */
export interface IApiManifest {
    name: string
    api_id: string
    baseUrl: string
    path:string
    request_type?: string //default is get
    start_time_format?: string
    end_time_format?: string
    query_params: {}
    post_body:{}
    quality_option: boolean
}
