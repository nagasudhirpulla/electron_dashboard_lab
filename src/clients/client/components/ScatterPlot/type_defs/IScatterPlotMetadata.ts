import { IVizCompMetadata } from "../../../type_defs/vizComp/IVizCompMetadata"

export interface IScatterPlotMetadata extends IVizCompMetadata {
    discriminator: 'ScatterPlot',
    numMeasPerSeries: 2
}