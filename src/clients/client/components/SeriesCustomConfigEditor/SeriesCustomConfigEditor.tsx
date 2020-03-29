import React from 'react'
import { IVizConfEditorProps } from '../../type_defs/vizComp/IVizConfEditorProps'
import { LinePlotMetadata } from '../LinePlot/LinePlotMetadata'
import { LinePlotSeriesConfigEditor } from '../LinePlot/LinePlotSeriesConfigEditor'
import { ILinePlotSeriesConfig } from '../LinePlot/type_defs/ILinePlotSeriesConfig'

export const SeriesCustomConfigEditor: React.FC<IVizConfEditorProps> = ({ vizType, value, onChange }: IVizConfEditorProps) => {
    if (vizType == LinePlotMetadata.discriminator) {
        return <LinePlotSeriesConfigEditor vizType={vizType} value={value} onChange={onChange} />
    }
    else {
        return <></>
    }
}