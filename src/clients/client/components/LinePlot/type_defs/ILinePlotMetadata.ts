import { IVizCompMetadata } from "../../../type_defs/vizComp/IVizCompMetadata"
import { ILinePlotSeriesConfEditorProps } from "./ILinePlotSeriesConfEditorProps"

export interface ILinePlotMetadata extends IVizCompMetadata {
    discriminator: 'Plot',
    numMeasPerSeries: 1
}