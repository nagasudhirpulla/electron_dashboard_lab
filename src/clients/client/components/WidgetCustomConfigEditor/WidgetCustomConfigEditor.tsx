import React, { useContext } from 'react'
import { IVizConfEditorProps } from '../../type_defs/vizComp/IVizConfEditorProps'
import { VizPluginsRepoContext } from '../../contexts/vizPluginsRepoContext'

export const WidgetCustomConfigEditor: React.FC<IVizConfEditorProps> = ({ vizType, value, onChange }: IVizConfEditorProps) => {
    const vizPluginsRepo = useContext(VizPluginsRepoContext)
    // console.log(vizPluginsRepo.getInstalledPluginNames())
    let WidCustConfigEditor: React.FC<IVizConfEditorProps> = vizPluginsRepo.getCompWidgetConfigEditor(vizType)
    return <WidCustConfigEditor value={value} onChange={onChange}></WidCustConfigEditor>
}