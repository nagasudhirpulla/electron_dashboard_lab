import React, { useState, useContext } from 'react'
import { useForm, Controller, useFieldArray } from "react-hook-form";
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

const WidgetDivider: React.FC = () => (<div className="series_divider"><hr /></div>);

export const WidgetEditor: React.FC<IWidgetConfigEditorProps> = ({ value, onChange }: IWidgetConfigEditorProps) => {
    const { register, watch, control } = useForm({ defaultValues: { ...value } })
    // using field arrays - https://react-hook-form.com/api#useFieldArray, https://codesandbox.io/s/react-hook-form-usefieldarray-vy8fv
    // const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    //     {control, name: "seriesConfigs"}
    // )
    const [newMeasType, setNewMeasType] = useState(DummyMeasurement.typename)
    const vizPluginsRepo = useContext(vizPluginsRepoContext);

    const onValChanged = () => {
        if (onChange) {
            const val = watch({ nest: true })
            onChange(val as IWidgetConfig)
        }
    }

    const onAddNewSeriesClick = () => {
        const newMeas = generateMeasFromType(newMeasType)
        if (newMeas == null) { return; }
        const val = watch({ nest: true }) as IWidgetConfig
        const vizMetaData = vizPluginsRepo.getCompMetadata(value.vizType)
        let newSeriesConfig: ISeriesConfig = {
            title: 'series',
            measurements: [],
            startTime: new VarTime(),
            endTime: new VarTime(),
            vizType: value.vizType,
            customConfig: {}
        }
        for (let measIter = 0; measIter < vizMetaData.numMeasPerSeries; measIter++) {
            newSeriesConfig.measurements.push({ ...newMeas })
        }
        if (val.seriesConfigs == undefined) { val.seriesConfigs = [] }
        val.seriesConfigs.push(newSeriesConfig)
        onChange({ ...value, ...val })
    }

    return <>
        <div>
            <MeasurementSelector onMeasChanged={(measType: string) => { setNewMeasType(measType) }} />
            <button onClick={(ev: any) => { onAddNewSeriesClick() }}>Add Series</button>
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
            onChange={([selected]) => { return selected }} />

        {value.seriesConfigs.map((sConfig, sInd) =>
            <>
                <WidgetDivider />
                <div key={`seriesConfigs_${sInd}`} style={{ marginLeft: '3em' }}>
                    <Controller as={<SeriesEditor />}
                        name={`seriesConfigs[${sInd}]`}
                        defaultValue={sConfig}
                        control={control}
                        onChange={([selected]) => { return selected }} />
                </div>
            </>
        )}


    </>
}