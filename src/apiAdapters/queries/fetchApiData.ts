import { IApiMeasurement } from "../../measurements/type_defs/IApiMeasurement"
import { IFetcherOptions } from "../../clients/client/fetchers/type_defs/IFetcherOptions"
import { IMeasData } from "../../clients/client/type_defs/dashboard/IMeasData"
import moment from 'moment'
import { IApiManifest } from "../type_defs/IApiManifest"
import { getApiManifest } from "./getApiManifest"
import { TimePeriod } from "../../Time/TimePeriod"
import { resampleTimeSeries } from "../../Time/commands/resampleTimeSeries"
/**
 * In path, query_params, post_body, request_headers objects
 * ${meas_id} will be replaced by measurement id
 * format strings will be as per moment js https://momentjs.com/docs/#/displaying/format/
 * ${start_time} will be replaced by start time based on start_time_format
 * ${end_time} will be replaced by end time based on end_time_format
 * TODO accommodate periodicity in params
 * The api should respond in the format ts1,val1,ts2,val2,ts3,val3,... where ts is timestamp in unix epoch milliseconds
 */
export const fetchApiData = async (fromTime: Date, toTime: Date, meas: IApiMeasurement, options?: IFetcherOptions): Promise<IMeasData> => {
    // Initialize results
    let resultData: number[] = []
    if (fromTime.getTime() >= toTime.getTime()) {
        return resultData
    }
    const adapter: IApiManifest = getApiManifest(meas.api_id)

    // get the request type
    // using javscript null-coalescing-operator https://stackoverflow.com/questions/476436/is-there-a-null-coalescing-operator-in-javascript
    const reqType = adapter.request_type || 'get'

    //initialize fetch props object
    let fetchParams = { method: reqType }

    // get time string formats
    const startTimeFormat = adapter.start_time_format || "X"
    const endTimeFormat = adapter.end_time_format || "X"

    // time strings to accommodate in fetch
    const startTimeString = moment(fromTime).format(startTimeFormat)
    const endTimeString = moment(toTime).format(endTimeFormat)
    // setup request path
    const fetchPath = replacePlaceholders(adapter.path, startTimeString, endTimeString, meas.meas_id)

    // setup request query params
    const queryParams = { ...adapter.query_params } || {}
    for (const paramKey in queryParams) {
        queryParams[paramKey] = replacePlaceholders(queryParams[paramKey], startTimeString, endTimeString, meas.meas_id)
    }

    // create request url from base url, path and queryparams
    const fetchUrl = joinAbsoluteUrlPath(adapter.baseUrl, fetchPath) + createQueryString(queryParams)


    // setup request headers
    const fetchHeaders = { ...adapter.request_headers } || {}
    for (const paramKey in fetchHeaders) {
        fetchHeaders[paramKey] = replacePlaceholders(fetchHeaders[paramKey], startTimeString, endTimeString, meas.meas_id)
    }
    if (Object.keys(fetchHeaders).length != 0) {
        fetchParams['headers'] = fetchHeaders
    }

    // setup request body
    if (reqType != 'get') {
        const fetchBody = { ...adapter.body } || {}
        for (const paramKey in fetchBody) {
            fetchBody[paramKey] = replacePlaceholders(fetchBody[paramKey], startTimeString, endTimeString, meas.meas_id)
        }
        if (Object.keys(fetchBody).length != 0) {
            fetchParams['body'] = fetchBody
        }
    }

    // perform web request
    // https://github.com/github/fetch/issues/635#issuecomment-401358597
    try {
        const resp = await fetch(fetchUrl, fetchParams)
        let respJSON = await resp.json() as number[]
        if (!(meas.resamplingSupported || false) && TimePeriod.getSeconds(meas.periodicity) != 0) {
            // perform resampling if required 
            respJSON = resampleTimeSeries(respJSON, meas.periodicity, meas.resampling_strategy)
        }
        //console.log(respJSON);
        return respJSON
    } catch (e) {
        console.error(e);
        return [];
        //return { success: false, message: `Could not retrieve measurements data due to error ${JSON.stringify(e)}` };
    }
}

const replacePlaceholders = (str: string, startTimeString: string, endTimeString: string, measId: string) => {
    let newStr = str
    newStr = newStr.replace('${start_time}', startTimeString)
    newStr = newStr.replace('${end_time}', endTimeString)
    newStr = newStr.replace('${meas_id}', measId)
    return newStr
}

const joinAbsoluteUrlPath = (...args: string[]) => {
    return args.map(pathPart => pathPart.replace(/(^\/|\/$)/g, "")).join("/");
}
//joinAbsoluteUrlPath("a/b", "/c/d/", "/e", "f/g", "h")  // "/a/b/c/d/e/f/g/h"


const createQueryString = (queryParams: {}) => {
    let queryStrs = []
    for (const paramKey in queryParams) {
        queryStrs.push(`${paramKey}=${queryParams[paramKey]}`)
    }
    let queryStr = queryStrs.join('&')
    if (queryStr != '') {
        queryStr = '?' + queryStr
    }
    return queryStr
}