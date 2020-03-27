import { writeFileAsync } from "../../utils/fileUtils";
import { getAdaptersRegistry } from "../dataAdaptersRegistry";
import { getAdapterRepoFilePath } from "../queries/getAdaptersRepoFilePathQuery";

export const persistAdaptersRegistry = async () => {
    writeFileAsync(getAdapterRepoFilePath(), JSON.stringify(getAdaptersRegistry(), null, 4))
    console.log(`Adapters Register created`)
};