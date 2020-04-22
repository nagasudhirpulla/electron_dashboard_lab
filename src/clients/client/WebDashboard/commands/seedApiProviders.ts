import { IApiManifest } from "../../../../apiAdapters/type_defs/IApiManifest"
import { registerApiAdapter } from "../../../../apiAdapters/commands/registerApiAdapter"

export const seedApiProviders = () => {
    // http://portal.wrldc.in/dashboard/api/wbesArchive/CGPL/Total/2020-04-15/2020-04-16
    // http://portal.wrldc.in/dashboard/api/wbesarchive/getmeasurementstable

    const WbesApi: IApiManifest = {
        name: 'Schedule_Archive',
        api_id: 'Schedule_Archive',
        baseUrl: '../api/wbesArchive',
        path: '${meas_id}/${start_time}/${end_time}',
        meas_picker_path: '../api/wbesArchive/getmeasurementstable',
        request_type: 'get',
        start_time_format: 'YYYY-MM-DD',
        end_time_format: 'YYYY-MM-DD',
        quality_option: false,
        is_resampling_present: false,
    }

    //http://portal.wrldc.in/dashboard/api/pmudata/getdata/13206/2020-04-17-22-48-01/2020-04-17-22-58-01
    const PmuApi: IApiManifest = {
        name: 'PMU',
        api_id: 'PmuApi',
        baseUrl: '../api/pmudata/getdata',
        path: '${meas_id}/${start_time}/${end_time}',
        request_type: 'get',
        start_time_format: 'YYYY-MM-DD-HH-mm-ss',
        end_time_format: 'YYYY-MM-DD-HH-mm-ss',
        quality_option: false,
        is_resampling_present: false,
    }

    // http://portal.wrldc.in/dashboard/api/scadadata/WRLDCMP.SCADA1.A0003297/2020-04-16/2020-04-17
    // http://portal.wrldc.in/dashboard/api/scadadata/getmeasurementstable
    const ScadaApi: IApiManifest = {
        name: 'SCADA_Archive',
        api_id: 'ScadaApi',
        baseUrl: '../api/scadadata',
        path: '${meas_id}/${start_time}/${end_time}',
        meas_picker_path: '../api/scadadata/getmeasurementstable',
        request_type: 'get',
        start_time_format: 'YYYY-MM-DD',
        end_time_format: 'YYYY-MM-DD',
        quality_option: false,
        is_resampling_present: false,
    }

    // http://portal.wrldc.in/dashboard/api/fictdata/CG-91/2020-04-01/2020-04-09
    // http://portal.wrldc.in/dashboard/api/fictdata/getmeasurementstable
    const MeterApi: IApiManifest = {
        name: 'Meter_Archive',
        api_id: 'MeterApi',
        baseUrl: '../api/fictdata',
        path: '${meas_id}/${start_time}/${end_time}',
        meas_picker_path: '../api/fictdata/getmeasurementstable',
        request_type: 'get',
        start_time_format: 'YYYY-MM-DD',
        end_time_format: 'YYYY-MM-DD',
        quality_option: false,
        is_resampling_present: false,
    }

    registerApiAdapter(WbesApi)
    registerApiAdapter(PmuApi)
    registerApiAdapter(ScadaApi)
    registerApiAdapter(MeterApi)
}