import { IVizCompMetadata } from "../../../type_defs/vizComp/IVizCompMetadata"

export interface ITextPlotMetadata extends IVizCompMetadata {
    discriminator: 'TextPlot',
    numMeasPerSeries: 1
}