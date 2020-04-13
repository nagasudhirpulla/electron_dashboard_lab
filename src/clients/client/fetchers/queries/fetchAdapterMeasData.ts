import { IFetcherOptions } from "../type_defs/IFetcherOptions";
import { VarTime } from "../../../../Time/VarTime";
import { IAdapterMeasurement } from "../../../../measurements/type_defs/IAdapterMeasurement";
import { IGetAdapterDataReq, IGetAdapterDataResp } from "../../../../server/dataAdapters/dataAdaptersIpcManager";
import { ipcRenderer } from "electron";
import { ChannelNames } from "../../../../ipc/ChannelNames";
import { IMeasData } from "../../type_defs/dashboard/IMeasData";

export const fetchAdapterMeasData = async (fromTime: Date, toTime: Date, meas: IAdapterMeasurement, options?: IFetcherOptions): Promise<IMeasData> => {
    return new Promise(function (resolve, reject) {
        // Initialize results
        let resultData: number[] = []
        if (fromTime.getTime() >= toTime.getTime()) {
            resolve(resultData)
        }
        const req: IGetAdapterDataReq = { meas, fromTime, toTime }
        ipcRenderer.send('' + ChannelNames.getAdapterData, req)
        ipcRenderer.once('' + ChannelNames.getAdapterDataResp, (event, obj: IGetAdapterDataResp) => {
            resolve(obj)
        })
    })
}
