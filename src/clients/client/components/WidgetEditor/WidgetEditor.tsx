import React, { useState, useContext } from 'react'
import { useForm, Controller } from "react-hook-form";
import { IWidgetConfigEditorProps } from "./type_defs/IWidgetConfigEditorProps";
import { IWidgetConfig } from "../../type_defs/dashboard/IWidgetConfig";
import { SeriesEditor } from '../SeriesEditor/SeriesEditor';
import { WidgetCustomConfigEditor } from '../WidgetCustomConfigEditor/WidgetCustomConfigEditor';
import { MeasurementSelector } from '../../../../measurements/components/MeasurementSelector';
import { DummyMeasurement } from '../../../../measurements/DummyMeasurement';
import { generateMeasFromType } from '../../../../measurements/commands/generateMeasFromType';
import { vizPluginsRepoContext } from '../../client';
import { ISeriesConfig } from '../../type_defs/dashboard/ISeriesConfig';
import { VarTime } from '../../../../Time/VarTime';
import { getNewSeriesForVizType } from '../SeriesEditor/queries/getNewSeriesForVizType';

const WidgetDivider: React.FC = () => (<div className="series_divider"><hr /></div>);

export const WidgetEditor: React.FC<IWidgetConfigEditorProps> = ({ value, onChange }: IWidgetConfigEditorProps) => {
    const { register, watch, control } = useForm({ defaultValues: { ...value } })
    const [newMeasType, setNewMeasType] = useState(DummyMeasurement.typename)
    const vizPluginsRepo = useContext(vizPluginsRepoContext);

    // console.log(value)

    const onValChanged = () => {
        if (onChange) {
            const val = watch({ nest: true })
            onChange({ ...value, ...val } as IWidgetConfig)
        }
    }

    const onAddNewSeriesClick = () => {
        const numMeasPerSeries = vizPluginsRepo.getCompMetadata(value.vizType).numMeasPerSeries
        const newSeriesConfig = getNewSeriesForVizType(newMeasType, value.vizType, numMeasPerSeries)
        onChange({ ...value, seriesConfigs: [...value.seriesConfigs, newSeriesConfig] })
    }

    const onDeleteSeriesClick = (sInd: number) => {
        return (
            (ev: any) => {
                if (confirm("Are you sure to delete this series?")) {
                    const newVal = { ...value, seriesConfigs: [...value.seriesConfigs.slice(0, sInd), ...value.seriesConfigs.slice(sInd + 1)] }
                    onChange(newVal)
                }
            }
        )
    }

    const onDuplicateSeriesClick = (sInd: number) => {
        return (
            (ev: any) => {
                const newVal = { ...value, seriesConfigs: [...value.seriesConfigs.slice(0, sInd + 1), value.seriesConfigs[sInd], ...value.seriesConfigs.slice(sInd + 1)] }
                onChange(newVal)
            }
        )
    }

    const onAllSeriesTimeOverwriteClick = (sInd: number) => {
        return (
            (ev: any) => {
                const startTime = value.seriesConfigs[sInd].startTime
                const endTime = value.seriesConfigs[sInd].endTime
                const newVal = { ...value, seriesConfigs: [...value.seriesConfigs.map(sc => { return { ...sc, startTime: startTime, endTime: endTime } })] }
                onChange(newVal)
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
            name={'title'}
            onChange={onValChanged}
            ref={register}
        />

        <WidgetDivider />
        <span><b>Border{" "}</b></span><br />
        <input
            type='text'
            name={'border'}
            onChange={onValChanged}
            ref={register}
        />

        <WidgetDivider />
        <Controller as={<WidgetCustomConfigEditor vizType={value.vizType} />}
            name='customConfig'
            control={control}
            onChange={onValChanged} />

        {value.seriesConfigs.map((sConfig, sInd) =>
            <>
                <WidgetDivider />
                <div key={`seriesConfigs_${sInd}`} style={{ marginLeft: '3em' }}>
                    <button type="button" onClick={onDeleteSeriesClick(sInd)}>Delete Series</button>
                    <button type="button" onClick={onDuplicateSeriesClick(sInd)}>Duplicate Series</button>
                    <button type="button" onClick={onAllSeriesTimeOverwriteClick(sInd)}>Time Overwrite of all Series</button>
                    <hr />
                    <SeriesEditor value={sConfig} onChange={(seriesConf) => {
                        onChange(
                            {
                                ...value,
                                seriesConfigs: [
                                    ...value.seriesConfigs.slice(0, sInd),
                                    seriesConf,
                                    ...value.seriesConfigs.slice(sInd + 1)
                                ]
                            })
                    }} />
                </div>
            </>
        )}
    </>
}