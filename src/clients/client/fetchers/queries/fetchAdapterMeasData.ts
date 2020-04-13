import { IFetcherOptions } from "../type_defs/IFetcherOptions";
import { VarTime } from "../../../../Time/VarTime";
import { IAdapterMeasurement } from "../../../../measurements/type_defs/IAdapterMeasurement";
import { IGetAdapterDataReq, IGetAdapterDataResp } from "../../../../server/dataAdapters/dataAdaptersIpcManager";
import { ipcRenderer } from "electron";
import { ChannelNames } from "../../../../ipc/ChannelNames";

export const fetchAdapterMeasData = async (fromVarTime: VarTime, toVarTime: VarTime, meas: IAdapterMeasurement, options?: IFetcherOptions): Promise<number[]> {
    return new Promise(function (resolve, reject) {
        // Initialize results
        let resultData: number[] = []
        let fromTime: Date = VarTime.getDateObj(fromVarTime)
        let toTime: Date = VarTime.getDateObj(toVarTime)
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
