import { IApiMeasurement } from "./type_defs/IApiMeasurement";
import { AdapterMeasurement } from "./AdapterMeasurement";
import { TimePeriod } from "../Time/TimePeriod";
import { ResamplingStrategy } from "./ResamplingStrategy";
export class ApiMeasurement implements IApiMeasurement {
    static typename: string = "ApiMeasurement";
    discriminator: string = ApiMeasurement.typename;
    meas_id: string = "MeasId";
    api_id: string = "";
    periodicity = new TimePeriod();
    resampling_strategy = ResamplingStrategy.Raw
}