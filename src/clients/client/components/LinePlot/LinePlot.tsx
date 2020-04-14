import { IWidgetProps } from "../../type_defs/dashboard/IWidgetProps"
import React from 'react'
import { Data, Layout, Config, Frame, Color, Datum } from "plotly.js"
import Plot from 'react-plotly.js'
import { YAxisSide } from "./type_defs/YAxisSide"
import { ILinePlotWidgetProps } from "./type_defs/ILinePlotWidgetProps"
import merge from 'lodash.merge'
import { TslpSeriesStyle } from "./type_defs/TslpSeriesStyle"
import { TimePeriod } from "../../../../Time/TimePeriod"
import { getDefaultCustomWidgetConfig } from "./queries/getDefaultCustomWidgetConfig"
import { getDefaultCustomSeriesConfig } from "./queries/getDefaultCustomSeriesConfig"

export const LinePlot: React.FC<IWidgetProps> = (props: ILinePlotWidgetProps) => {
    // set default values to widget custom config
    let config = { ...props.config }
    config.customConfig = merge({}, getDefaultCustomWidgetConfig(), config.customConfig)

    // set default values to each series custom config
    for (let sInd = 0; sInd < config.seriesConfigs.length; sInd++) {
        let sConfig = config.seriesConfigs[sInd]
        sConfig.customConfig = merge({}, getDefaultCustomSeriesConfig(), config.seriesConfigs[sInd].customConfig)
    }

    const generateSeriesData = (seriesIter: number): Data => {
        let series_data_template: Data = { name: config.seriesConfigs[seriesIter].title, x: [], y: [], type: config.seriesConfigs[seriesIter].customConfig.renderStrategy, mode: 'lines', line: { color: 'red' as Color, width: 2 } }
        const seriesStyle = config.seriesConfigs[seriesIter].customConfig.seriesStyle
        let seriesData: Data = { ...series_data_template }

        // use different series template for boxplot
        if (seriesStyle == TslpSeriesStyle.boxplot) {
            seriesData = {
                name: config.seriesConfigs[seriesIter].title,
                y: [],
                type: 'box',
                marker: {
                    color: config.seriesConfigs[seriesIter].customConfig.color
                }
            }
        } else {
            // set line color and width
            seriesData.line.color = config.seriesConfigs[seriesIter].customConfig.color
            seriesData.line.width = config.seriesConfigs[seriesIter].customConfig.size
        }

        // implement y axis settings
        let yAxisInd = config.seriesConfigs[seriesIter].customConfig.yAxisIndex
        if (yAxisInd > 0) { seriesData['yaxis'] = `y${yAxisInd}` }

        if (!(seriesIter in props.data)) {
            // check if seriesIter is present as key in data
            return seriesData
        }

        if (!(0 in props.data[seriesIter])) {
            //check if we have atleast one measurement data
            return seriesData
        }

        // determine series data display time shift
        let shiftMillis: number = 0
        if (seriesStyle != TslpSeriesStyle.duration) {
            shiftMillis = 1000 * TimePeriod.getSeconds(config.seriesConfigs[seriesIter].customConfig.displayTimeShift)
        }

        // get points from measurement
        for (let pntIter = 0; pntIter < props.data[seriesIter][0].length - 1; pntIter += 2) {
            let xVal: Datum = props.data[seriesIter][0][pntIter]
            if (seriesStyle == TslpSeriesStyle.line) {
                xVal = new Date(xVal + shiftMillis)
            }
            if (seriesStyle != TslpSeriesStyle.boxplot) {
                (seriesData.x as Datum[]).push(xVal)
            }
            (seriesData.y as Datum[]).push(props.data[seriesIter][0][pntIter + 1])
        }
        return seriesData
    }

    const generatePlotData = (): Data[] => {
        let plot_data: Data[] = []
        for (let seriesIter = 0; seriesIter < config.seriesConfigs.length; seriesIter++) {
            plot_data.push(generateSeriesData(seriesIter))
        }
        return plot_data
    }

    let plot_data: Data[] = generatePlotData()

    let y_axis_common_obj = {
        tickfont: {
            color: config.customConfig.titleColor
        },
        showgrid: config.customConfig.showGrid
    }

    let plot_layout: Partial<Layout> = {
        autosize: true,
        paper_bgcolor: config.customConfig.backgroundColor,
        plot_bgcolor: config.customConfig.backgroundColor,
        legend: {
            orientation: "h",
            font: {
                color: config.customConfig.titleColor
            }
        },
        title: {
            text: config.title,
            font: {
                color: config.customConfig.titleColor
            }
        },
        xaxis: {
            tickfont: {
                color: config.customConfig.titleColor
            },
            showgrid: config.customConfig.showGrid
        },
        yaxis: {
            ...y_axis_common_obj
        }
    }

    // iterate through all series objects to create the Y Axis Summary object
    let yAxSummObj: { [key: string]: { side: YAxisSide, offset: number, color: Color } } = {}
    config.seriesConfigs.forEach(sConfig => {
        let yAxisInd = sConfig.customConfig.yAxisIndex
        let yAxisSide = sConfig.customConfig.yAxisSide
        let yAxisOffset = sConfig.customConfig.yAxisOffset
        let yAxisCol = sConfig.customConfig.color
        if (yAxisInd > 1) {
            yAxSummObj[yAxisInd] = { side: yAxisSide, offset: yAxisOffset, color: yAxisCol }
        }
    })
    const yAxisIndices = Object.keys(yAxSummObj)

    // create additional yAxis objects
    yAxisIndices.forEach(yAxisInd => {
        let yAxObj = {
            ...y_axis_common_obj,
            overlaying: 'y',
            anchor: 'x',
            titlefont: { color: yAxSummObj[yAxisInd].color },
            tickfont: { color: yAxSummObj[yAxisInd].color },
        }
        if (yAxSummObj[yAxisInd].side == YAxisSide.right) {
            yAxObj['side'] = 'right'
        }
        if (yAxSummObj[yAxisInd].offset != 0) {
            yAxObj['anchor'] = 'free'
            yAxObj['position'] = yAxSummObj[yAxisInd].offset
        }
        plot_layout[`yaxis${yAxisInd}`] = yAxObj
    })

    let plot_frames: Frame[] = []
    let plot_config: Partial<Config> = {}

    return (
        <Plot
            data={plot_data}
            layout={plot_layout}
            frames={plot_frames}
            config={plot_config}
            style={{ width: '100%', height: '100%' }}
            useResizeHandler={true}
        />
    )
}