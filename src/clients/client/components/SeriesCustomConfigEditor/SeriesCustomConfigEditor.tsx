import React, { useContext } from 'react'
import { IVizConfEditorProps } from '../../type_defs/vizComp/IVizConfEditorProps'
import { VizPluginsRepoContext } from '../../contexts/vizPluginsRepoContext'

export const SeriesCustomConfigEditor: React.FC<IVizConfEditorProps> = ({ vizType, value, onChange }: IVizConfEditorProps) => {
    const vizPluginsRepo = useContext(VizPluginsRepoContext)
    let SerCustConfigEditor: React.FC<IVizConfEditorProps> = vizPluginsRepo.getCompSeriesConfigEditor(vizType)
    return <SerCustConfigEditor value={value} onChange={onChange}></SerCustConfigEditor>
}