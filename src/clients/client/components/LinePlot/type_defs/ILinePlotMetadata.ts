import { IVizCompMetadata } from "../../../type_defs/vizComp/IVizCompMetadata"

export interface ILinePlotMetadata extends IVizCompMetadata {
    discriminator: 'Plot',
    numMeasPerSeries: 1
}