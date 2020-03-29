import { IVizConfEditorProps } from "../../../type_defs/vizComp/IVizConfEditorProps";
import { ILinePlotSeriesConfig } from "./ILinePlotSeriesConfig";
import { ILinePlotMetadata } from "./ILinePlotMetadata";
export interface ILinePlotSeriesConfEditorProps extends IVizConfEditorProps {
    vizType: ILinePlotMetadata['discriminator']
    value?: ILinePlotSeriesConfig["customConfig"]
    onChange?: (v: ILinePlotSeriesConfig["customConfig"]) => void
}
