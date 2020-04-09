import { AdapterManifest } from "../../type_defs/AdapterManifest"
import { getAdapterManifest } from "./getAdapterManifestQuery"
import path from 'path'
import { getExesFolder } from "./getExesFolderQuery"
import { ChildProcess, spawn } from 'child_process'

const fetchExeData = async (exePath: string, cmdParams: string[]): Promise<string> => {
    const getIpcRespAsync = (ipc: ChildProcess): Promise<string> => {
        return new Promise((resolve, reject) => {
            let res = ""

            ipc.stderr.once('data', function (data) {
                //console.log(data.toString())
                reject(data.toString())
            });

            ipc.stdout.on('data', function (data) {
                // console.log(data.toString())
                // resolve(`result=` + data.toString())
                res += data.toString()
            });

            ipc.once('close', (code: number) => {
                resolve(res)
                // console.log(`Ipc exe to exit with code: ${code}`)
            });
        });
    }
    // cmdParams.unshift('/c', exePath)
    // console.log(exePath)
    // console.log(cmdParams)
    // const ipc = spawn('cmd.exe', cmdParams)
    const ipc = spawn(exePath, cmdParams)
    let resp: string = null
    try { resp = await getIpcRespAsync(ipc) }
    catch (ex) {
        console.log(ex)
        resp = null
    }
    return resp
}

export const fetchFromAdapter = async (adapterId: string, cmdParams: string[]): Promise<string> => {
    const adapter: AdapterManifest = getAdapterManifest(adapterId)
    // get the exe path of adapter
    const exePath = path.join(getExesFolder(), adapter.app_id, adapter.entry)
    const resp = await fetchExeData(exePath, cmdParams)
    // console.log(resp)
    return resp
}