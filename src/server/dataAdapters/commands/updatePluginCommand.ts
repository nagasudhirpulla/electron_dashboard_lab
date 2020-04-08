import { AdapterManifest } from "../../type_defs/AdapterManifest"
import { getManifestFromExternPlugin } from "./getManifestFromExternPluginCommand"
import { isPluginNamePresent } from "../queries/isPluginNamePresentQuery"
import { copyPluginFolder } from "./copyPluginFolderCommand"
import { registerAdapterManifest } from "./registerAdapterManifestCommand"
import { getExtPluginFoldPathFromDialog } from "./getExtPluginFoldPathFromDialogCommand"

export const updatePlugin = async (adapterId: string): Promise<AdapterManifest> => {
    // get the user selected folder path
    const pluginExtFoldPath = await getExtPluginFoldPathFromDialog()
    if (pluginExtFoldPath == null) {
        return null
    }
    // read the manifest of the selected folder
    const manifestJson = await getManifestFromExternPlugin(pluginExtFoldPath)
    if (manifestJson == null) {
        return null
    }

    // abort update if adapter id does not match
    if (adapterId != manifestJson.app_id) {
        console.log(`Looks like you are not updating the data adapter with id ${adapterId}`)
        return null
    }

    // abort update if plugin does not exist
    const pluginExists = isPluginNamePresent(manifestJson.name)
    if (pluginExists == false) {
        console.log(`plugin name ${manifestJson.name} does not exist, hence we cant update the Data Adapter`)
        return null
    }
    const pluginFolderPath: string = await copyPluginFolder(pluginExtFoldPath, manifestJson)
    if (pluginFolderPath == null) {
        return null
    }
    // add the plugin attributes to the plugins app state and the json file for persistence
    await registerAdapterManifest(manifestJson)
    console.log(`successfully updated the data adapter ${manifestJson.app_id}`)
    return manifestJson
}