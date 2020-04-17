import React, { useContext } from 'react'
import { IVizConfEditorProps } from '../../type_defs/vizComp/IVizConfEditorProps'
import { vizPluginsRepoContext } from '../../webDashboardApp'

export const WidgetCustomConfigEditor: React.FC<IVizConfEditorProps> = ({ vizType, value, onChange }: IVizConfEditorProps) => {
    const vizPluginsRepo = useContext(vizPluginsRepoContext)
    // console.log(vizPluginsRepo.getInstalledPluginNames())
    let WidCustConfigEditor: React.FC<IVizConfEditorProps> = vizPluginsRepo.getCompWidgetConfigEditor(vizType)
    return <WidCustConfigEditor value={value} onChange={onChange}></WidCustConfigEditor>
}