import React, { useState, useContext } from 'react'
import { IWidgetConfigEditorProps } from "./type_defs/IWidgetConfigEditorProps";
import { SeriesEditor } from '../SeriesEditor/SeriesEditor';
import { WidgetCustomConfigEditor } from '../WidgetCustomConfigEditor/WidgetCustomConfigEditor';
import { MeasurementSelector } from '../../../../measurements/components/MeasurementSelector';
import { DummyMeasurement } from '../../../../measurements/DummyMeasurement';
import { vizPluginsRepoContext } from '../../client';
import { getNewSeriesForVizType } from '../SeriesEditor/queries/getNewSeriesForVizType';

const WidgetDivider: React.FC = () => (<div className="series_divider"><hr /></div>);

export const WidgetEditor: React.FC<IWidgetConfigEditorProps> = ({ value, onChange }: IWidgetConfigEditorProps) => {
    const propVal = { ...value }
    const [newMeasType, setNewMeasType] = useState(DummyMeasurement.typename)
    const vizPluginsRepo = useContext(vizPluginsRepoContext);

    const onInpValChanged = (ev: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            const newVal = ev.target.type == "checkbox" ? ev.target.checked : ev.target.value
            onChange({ ...propVal, [`${ev.target.name}`]: newVal })
        }
    }

    const onValChanged = (name: string, val: {}) => {
        if (onChange) {
            onChange({ ...propVal, [`${name}`]: val })
        }
    }

    const onAddNewSeriesClick = () => {
        const numMeasPerSeries = vizPluginsRepo.getCompMetadata(propVal.vizType).numMeasPerSeries
        const newSeriesConfig = getNewSeriesForVizType(newMeasType, propVal.vizType, numMeasPerSeries)
        onChange({ ...propVal, seriesConfigs: [...propVal.seriesConfigs, newSeriesConfig] })
    }

    const onDeleteSeriesClick = (sInd: number) => {
        return (
            (ev: any) => {
                if (confirm("Are you sure to delete this series?")) {
                    const newVal = { ...propVal, seriesConfigs: [...propVal.seriesConfigs.slice(0, sInd), ...propVal.seriesConfigs.slice(sInd + 1)] }
                    onChange(newVal)
                }
            }
        )
    }

    const onDuplicateSeriesClick = (sInd: number) => {
        return (
            (ev: any) => {
                const newVal = { ...propVal, seriesConfigs: [...propVal.seriesConfigs.slice(0, sInd + 1), propVal.seriesConfigs[sInd], ...propVal.seriesConfigs.slice(sInd + 1)] }
                onChange(newVal)
            }
        )
    }

    const onAllSeriesTimeOverwriteClick = (sInd: number) => {
        return (
            (ev: any) => {
                if (confirm("Are you sure to overwrite start and end time of all series?")) {
                    const startTime = propVal.seriesConfigs[sInd].startTime
                    const endTime = propVal.seriesConfigs[sInd].endTime
                    const newVal = { ...propVal, seriesConfigs: [...propVal.seriesConfigs.map(sc => { return { ...sc, startTime: startTime, endTime: endTime } })] }
                    onChange(newVal)
                }
            }
        )
    }

    return <>
        <div>
            <MeasurementSelector onMeasChanged={(measType: string) => { setNewMeasType(measType) }} />
            <button type="button" onClick={(ev: any) => { onAddNewSeriesClick() }}>Add Series</button>
        </div>

        <WidgetDivider />
        <span><b>Widget Title{" "}</b></span>
        <input
            type='text'
            name='title'
            value={propVal.title}
            onChange={onInpValChanged}
        />

        <WidgetDivider />
        <span><b>Border{" "}</b></span><br />
        <input
            type='text'
            name='border'
            value={propVal.border}
            onChange={onInpValChanged}
        />

        <WidgetDivider />
        <WidgetCustomConfigEditor
            vizType={propVal.vizType} value={propVal.customConfig}
            onChange={(wConfig) => { onValChanged('customConfig', wConfig) }} />

        {propVal.seriesConfigs.map((sConfig, sInd) =>
            <>
                <WidgetDivider />
                <div key={`seriesConfigs_${sInd}`} style={{ marginLeft: '3em' }}>
                    <button type="button" onClick={onDeleteSeriesClick(sInd)}>Delete Series</button>
                    <button type="button" onClick={onDuplicateSeriesClick(sInd)}>Duplicate Series</button>
                    <button type="button" onClick={onAllSeriesTimeOverwriteClick(sInd)}>Time Overwrite of all Series</button>
                    <hr />
                    <SeriesEditor value={sConfig} onChange={(seriesConf) => {
                        onValChanged('seriesConfigs',
                            [
                                ...propVal.seriesConfigs.slice(0, sInd),
                                seriesConf,
                                ...propVal.seriesConfigs.slice(sInd + 1)
                            ])
                    }} />
                </div>
            </>
        )}
    </>
}