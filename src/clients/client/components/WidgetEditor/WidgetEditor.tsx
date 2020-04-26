import React, { useState, useContext } from 'react'
import { IWidgetConfigEditorProps } from "./type_defs/IWidgetConfigEditorProps";
import { SeriesEditor } from '../SeriesEditor/SeriesEditor';
import { WidgetCustomConfigEditor } from '../WidgetCustomConfigEditor/WidgetCustomConfigEditor';
import { MeasurementSelector } from '../../../../measurements/components/MeasurementSelector';
import { DummyMeasurement } from '../../../../measurements/DummyMeasurement';
import { getNewSeriesForVizType } from '../SeriesEditor/queries/getNewSeriesForVizType';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faClone, faClock } from '@fortawesome/free-solid-svg-icons';
import { BorderEditor } from '../BorderEditor/BorderEditor';
import { VizPluginsRepoContext } from '../../contexts/vizPluginsRepoContext';

const WidgetDivider: React.FC = () => (<div className="series_divider"><hr /></div>);

export const WidgetEditor: React.FC<IWidgetConfigEditorProps> = ({ value, onChange, measTypes, MeasurementEditor }: IWidgetConfigEditorProps) => {
    const propVal = { ...value }
    //get the number of meas
    const vizPluginsRepo = useContext(VizPluginsRepoContext);
    const numMeasPerSeries = vizPluginsRepo.getCompMetadata(propVal.vizType).numMeasPerSeries
    // newMeasType will be an array of measTypes
    const [newMeasTypes, setNewMeasTypes] = useState(Array.from(Array(numMeasPerSeries).keys()).map(n => DummyMeasurement.typename))

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
        const newSeriesConfig = getNewSeriesForVizType(newMeasTypes, propVal.vizType)
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

            {Array.from(Array(numMeasPerSeries).keys()).map((mInd) =>
                <MeasurementSelector measTypes={measTypes} onMeasChanged={(measType: string) => {
                    setNewMeasTypes(
                        [
                            ...newMeasTypes.slice(0, mInd),
                            measType,
                            ...newMeasTypes.slice(mInd + 1)
                        ]
                    )
                }} />
            )
            }
            <button type="button" onClick={(ev: any) => { onAddNewSeriesClick() }} className={"btn btn-sm btn-success ml-1"}>Add Series</button>
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
        <BorderEditor
            value={propVal.border}
            onChange={(v) => { onValChanged('border', v) }}
        />

        <WidgetDivider />
        <WidgetCustomConfigEditor
            vizType={propVal.vizType} value={propVal.customConfig}
            onChange={(wConfig) => { onValChanged('customConfig', wConfig) }} />

        {propVal.seriesConfigs.map((sConfig, sInd) =>
            <>
                <WidgetDivider />
                <div key={`seriesConfigs_${sInd}`} style={{ marginLeft: '3em' }}>
                    <div className={"btn-group btn-group-sm"}>
                        <button type="button" onClick={onDeleteSeriesClick(sInd)} className={"btn btn-sm btn-danger"}><FontAwesomeIcon icon={faTrashAlt} /> Delete Series</button>
                        <button type="button" onClick={onDuplicateSeriesClick(sInd)} className={"btn btn-sm btn-warning"}><FontAwesomeIcon icon={faClone} /> Duplicate Series</button>
                        <button type="button" onClick={onAllSeriesTimeOverwriteClick(sInd)} className={"btn btn-sm btn-info"}><FontAwesomeIcon icon={faClock} /> Time Overwrite of all Series</button>
                    </div>
                    <hr />
                    <SeriesEditor MeasurementEditor={MeasurementEditor} value={sConfig} onChange={(seriesConf) => {
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