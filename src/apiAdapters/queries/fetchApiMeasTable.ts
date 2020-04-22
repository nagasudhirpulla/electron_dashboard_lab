import { IApiMeasurement } from "../../measurements/type_defs/IApiMeasurement"
import { IFetcherOptions } from "../../clients/client/fetchers/type_defs/IFetcherOptions"
import { IApiManifest } from "../type_defs/IApiManifest"
import { getApiManifest } from "./getApiManifest"
/**
 * The api should respond in the format [["id", "name", "other stuff"],[75, "hgfhgasd", "asdasd"],...]
 */
export const fetchApiMeasTable = async (meas: IApiMeasurement): Promise<string[][]> => {
    const api: IApiManifest = getApiManifest(meas.api_id)

    // get the request type
    const reqType = api.request_type || 'get'

    //initialize fetch props object
    let fetchParams = { method: reqType }

    // create request url from base url, path and queryparams
    const fetchUrl = api.meas_picker_path || ""

    // setup request headers
    const fetchHeaders = { ...api.request_headers } || {}
    if (Object.keys(fetchHeaders).length != 0) {
        fetchParams['headers'] = fetchHeaders
    }

    // perform web request
    try {
        const resp = await fetch(fetchUrl, fetchParams);
        const respJSON = await resp.json() as string[][];
        console.log(respJSON);
        return respJSON;
    } catch (e) {
        console.error(e);
        return [];
        //return { success: false, message: `Could not retrieve measurements data due to error ${JSON.stringify(e)}` };
    }
}