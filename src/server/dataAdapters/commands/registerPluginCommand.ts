import { IAdapterManifest } from "../type_defs/IAdapterManifest";
import { getManifestFromExternPlugin } from "./getManifestFromExternPluginCommand";
import { isPluginNamePresent } from "../queries/isPluginNamePresentQuery";
import { copyPluginFolder } from "./copyPluginFolderCommand";
import { registerAdapterManifest } from "./registerAdapterManifestCommand";
import { getExtPluginFoldPathFromDialog } from "./getExtPluginFoldPathFromDialogCommand";

export const registerPlugin = async (): Promise<IAdapterManifest> => {
    // get the user selected folder path
    const pluginExtFoldPath = await getExtPluginFoldPathFromDialog()
    if (pluginExtFoldPath == null) {
        return null;
    }
    // read the manifest of the selected folder
    const manifestJson = await getManifestFromExternPlugin(pluginExtFoldPath)
    if (manifestJson == null) {
        return null
    }
    // check if the plugin name already exists
    const pluginExists = isPluginNamePresent(manifestJson.name)
    if (pluginExists == true) {
        console.log(`plugin name ${manifestJson.name} already exists, hence plugin installation is aborted`)
        return null
    }
    const pluginFolderPath: string = await copyPluginFolder(pluginExtFoldPath, manifestJson)
    if (pluginFolderPath == null) {
        return null
    }
    // add the plugin attributes to the plugins app state and the json file for persistence
    await registerAdapterManifest(manifestJson)
    return manifestJson
}