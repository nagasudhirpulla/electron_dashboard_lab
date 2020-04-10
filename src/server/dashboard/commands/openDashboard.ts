import { readFileAsync } from "../../utils/fileUtils";
import { IDashboardState } from "../../../clients/client/type_defs/dashboard/IDashboardState";

export const openDashboard = async (openFilename: string) => {
    if (openFilename == null) {
        return;
    }
    if (openFilename.endsWith('.js')) {
        console.log(`Not Opening js file ${openFilename}`);
        return;
    }
    console.log(`Opening file ${openFilename}`);
    const fileContents: string = await readFileAsync(openFilename);
    // console.log(`${fileContents}`);
    const stateObj = JSON.parse(fileContents) as IDashboardState;
    console.log(stateObj);
    return stateObj
}