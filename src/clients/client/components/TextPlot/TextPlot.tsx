import { IWidgetProps } from "../../type_defs/dashboard/IWidgetProps"
import React, { CSSProperties } from 'react'
import merge from 'lodash.merge'
import moment from 'moment';
import { getDefaultCustomWidgetConfig } from "./queries/getDefaultCustomWidgetConfig"
import { getDefaultCustomSeriesConfig } from "./queries/getDefaultCustomSeriesConfig"
import { ITextPlotWidgetProps } from "./type_defs/ITextPlotWidgetProps"
import { TextComputationStrategy } from "./type_defs/TextComputationStrategy"
import { getPercentileFromArray } from "../../../../utils/statsUtils/getPercentileFromArray"


export const TextPlot: React.FC<IWidgetProps> = (props: ITextPlotWidgetProps) => {
    // set default values to widget custom config
    let config = { ...props.config }
    config.customConfig = merge({}, getDefaultCustomWidgetConfig(), config.customConfig)

    // set default values to each series custom config
    for (let sInd = 0; sInd < config.seriesConfigs.length; sInd++) {
        let sConfig = config.seriesConfigs[sInd]
        sConfig.customConfig = merge({}, getDefaultCustomSeriesConfig(), config.seriesConfigs[sInd].customConfig)
    }

    const generateSeriesElement = (seriesIter: number): JSX.Element => {
        const sConfig = config.seriesConfigs[seriesIter]

        let isValidSeriesDataPresent = false
        if ((seriesIter in props.data) && (0 in props.data[seriesIter]) && (props.data[seriesIter][0].length > 1)) {
            isValidSeriesDataPresent = true
        }

        let val: string = '';
        const computationStrategy = sConfig.customConfig.textComputationStrategy
        // iterate through the series measurement points
        if ((computationStrategy != TextComputationStrategy.noData) && isValidSeriesDataPresent) {
            // check if we have atleast one point
            if (computationStrategy == TextComputationStrategy.firstSample) {
                val = '' + props.data[seriesIter][0][1]
            }
            else if (computationStrategy == TextComputationStrategy.lastSample) {
                val = '' + props.data[seriesIter][0][props.data[seriesIter][0].length - 1]
            }
            else if (computationStrategy == TextComputationStrategy.firstTimestamp) {
                val = '' + props.data[seriesIter][0][0]
            }
            else if (computationStrategy == TextComputationStrategy.lastTimestamp) {
                val = '' + props.data[seriesIter][0][props.data[seriesIter][0].length - 2]
            }
            else if (computationStrategy == TextComputationStrategy.count) {
                val = '' + Math.round(props.data[seriesIter][0].length / 2)
            }
            else if ([TextComputationStrategy.average, TextComputationStrategy.sum].includes(computationStrategy)) {
                let sumVal = 0
                for (let pntIter = 0; pntIter < props.data[seriesIter][0].length - 1; pntIter += 2) {
                    sumVal += props.data[seriesIter][0][pntIter + 1]
                }
                if (computationStrategy == TextComputationStrategy.average) {
                    sumVal = sumVal / (props.data[seriesIter][0].length / 2)
                }
                val = '' + sumVal
            }
            else if ([TextComputationStrategy.max, TextComputationStrategy.maxValTimestamp].includes(computationStrategy)) {
                let maxVal = props.data[seriesIter][0][1]
                let maxTime = props.data[seriesIter][0][0]
                for (let pntIter = 0; pntIter < props.data[seriesIter][0].length - 1; pntIter += 2) {
                    let tempVal = props.data[seriesIter][0][pntIter + 1]
                    let tempTime = props.data[seriesIter][0][pntIter]
                    if (tempVal > maxVal) {
                        maxVal = tempVal
                        maxTime = tempTime
                    }
                }
                val = '' + ((computationStrategy == TextComputationStrategy.max) ? maxVal : maxTime)
            }
            else if ([TextComputationStrategy.min, TextComputationStrategy.minValTimestamp].includes(computationStrategy)) {
                let minVal = props.data[seriesIter][0][1]
                let minTime = props.data[seriesIter][0][0]
                for (let pntIter = 0; pntIter < props.data[seriesIter][0].length - 1; pntIter += 2) {
                    let tempVal = props.data[seriesIter][0][pntIter + 1]
                    let tempTime = props.data[seriesIter][0][pntIter]
                    if (tempVal < minVal) {
                        minVal = tempVal
                        minTime = tempTime
                    }
                }
                val = '' + ((computationStrategy == TextComputationStrategy.min) ? minVal : minTime)
            }
            else if (computationStrategy == TextComputationStrategy.percentile) {
                let seriesVals: number[] = []
                for (let pntIter = 0; pntIter < props.data[seriesIter][0].length - 1; pntIter += 2) {
                    let tempVal = props.data[seriesIter][0][pntIter + 1]
                    seriesVals.push(tempVal)
                }
                val = '' + getPercentileFromArray(seriesVals, sConfig.customConfig.percentile)
            }
        }

        if (val != '') {
            if ([TextComputationStrategy.firstTimestamp, TextComputationStrategy.lastTimestamp,
            TextComputationStrategy.maxValTimestamp,
            TextComputationStrategy.minValTimestamp].includes(computationStrategy)) {
                // create string as per format for timestamp text
                let timestampMoment = moment(+val)
                val = timestampMoment.format(sConfig.customConfig.format)
            } else {
                const decimalDivider = Math.pow(10, sConfig.customConfig.decimalPrecision);
                val = "" + (Math.round(+val * decimalDivider) / decimalDivider);
            }
        }

        const seriesStyle: CSSProperties = {
            color: sConfig.customConfig.color + '',
            backgroundColor: sConfig.customConfig.backgroundColor + '',
            fontStyle: sConfig.customConfig.fontStyle,
            fontWeight: sConfig.customConfig.fontWeight,
            fontFamily: sConfig.customConfig.fontFamily,
            fontSize: sConfig.customConfig.size + "em",
            display: 'inline-block'
        };

        const seriesDiv = <div style={seriesStyle}>
            <span dangerouslySetInnerHTML={{ __html: sConfig.customConfig.prefixText + val + sConfig.customConfig.suffixText }}></span>
        </div>
        return seriesDiv
    }

    const generateTextPlotWidget = (): JSX.Element => {

        const widgetStyle: CSSProperties = {
            backgroundColor: '' + config.customConfig.backgroundColor,
            width: '100%',
            height: '100%'
        }

        let seriesEls: JSX.Element[] = []
        for (let seriesIter = 0; seriesIter < config.seriesConfigs.length; seriesIter++) {
            seriesEls.push(generateSeriesElement(seriesIter))
        }

        return <div style={widgetStyle}>
            {seriesEls.map((sEl, ind) => {
                return <>
                    {sEl}
                    {ind != seriesEls.length - 1 &&
                        <span dangerouslySetInnerHTML={{ __html: config.customConfig.seriesSeparator }}></span>}
                </>
            })}
        </div>
    }

    return (
        <>
            {generateTextPlotWidget()}
        </>
    )
}