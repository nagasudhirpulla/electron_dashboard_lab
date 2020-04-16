import { IApiMeasurement } from "./type_defs/IApiMeasurement";
import { AdapterMeasurement } from "./AdapterMeasurement";
import { TimePeriod } from "../Time/TimePeriod";
export class ApiMeasurement implements IApiMeasurement {
    static typename: string = "ApiMeasurement";
    discriminator: string = AdapterMeasurement.typename;
    meas_id: string = "MeasId";
    api_type_id: string = "";
    periodicity = new TimePeriod();
}