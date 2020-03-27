import { AdapterManifest } from "../../type_defs/AdapterManifest"
import { existsSync } from "fs"
import { readFileAsync } from "../../utils/fileUtils"
import path from 'path'

const ensureManifestAttrs = async (manifestJson: AdapterManifest): Promise<AdapterManifest> => {
    // ensure manifest json attributes
    let absentAttrs: string[] = []
    if (manifestJson.app_id == undefined) {
        absentAttrs.push('app_id')
    }
    if (manifestJson.entry == undefined) {
        absentAttrs.push('entry')
    }
    if (manifestJson.name == undefined) {
        absentAttrs.push('name')
    }
    if (manifestJson.is_meas_picker_present == undefined) {
        absentAttrs.push('is_meas_picker_present')
    }
    if (manifestJson.is_adapter_config_ui_present == undefined) {
        absentAttrs.push('is_adapter_config_ui_present')
    }
    if (absentAttrs.length > 0) {
        console.log(`${absentAttrs.join(', ')} are absent in manifest json file`)
        return null;
    }
    return manifestJson;
}

export const getManifestFromExternPlugin = async (pluginExternFoldPath: string): Promise<AdapterManifest> => {
    // check if manifest file exists
    const manifestPath = path.join(pluginExternFoldPath, 'manifest.json')
    if (!existsSync(manifestPath)) {
        console.log('manifest file not present')
        return null
    }
    // read the manifest JSON from file
    let manifestJson = JSON.parse(await readFileAsync(manifestPath) as string) as any as AdapterManifest
    // console.log(manifestJson)
    return await ensureManifestAttrs(manifestJson)
}