import React from 'react'
import { IVizConfEditorProps } from '../../type_defs/vizComp/IVizConfEditorProps'
import { LinePlotMetadata } from '../LinePlot/LinePlotMetadata'
import { LinePlotWidgetConfigEditor } from '../LinePlot/LinePlotWidgetConfigEditor'

export const WidgetCustomConfigEditor: React.FC<IVizConfEditorProps> = ({ vizType, value, onChange }: IVizConfEditorProps) => {
    if (vizType == LinePlotMetadata.discriminator) {
        return <LinePlotWidgetConfigEditor vizType={vizType} value={value} onChange={onChange} />
    }
    else {
        return <></>
    }
}