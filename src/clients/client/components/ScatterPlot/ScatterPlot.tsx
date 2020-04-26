import { IWidgetProps } from "../../type_defs/dashboard/IWidgetProps"
import React from 'react'
import { Data, Layout, Config, Frame, Color, Datum, Shape, PlotData } from "plotly.js"
import merge from 'lodash.merge'
import { getDefaultCustomWidgetConfig } from "./queries/getDefaultCustomWidgetConfig"
import { getDefaultCustomSeriesConfig } from "./queries/getDefaultCustomSeriesConfig"
import { IScatterPlotWidgetProps } from "./type_defs/IScatterPlotWidgetProps"
import createPlotlyComponent from 'react-plotly.js/factory'
import Plotly from 'plotly.js-cartesian-dist'
import { TsspSeriesStyle } from "./type_defs/TsspSeriesStyle"
import { YAxisSide } from "../LinePlot/type_defs/YAxisSide"

// TODO implement x and y axis ranges, 
// candlestick (https://plotly.com/javascript/candlestick-charts/), 

export const ScatterPlot: React.FC<IWidgetProps> = (props: IScatterPlotWidgetProps) => {
    const PlotlyComponent = createPlotlyComponent(Plotly)
    // set default values to widget custom config
    let config = { ...props.config }
    config.customConfig = merge({}, getDefaultCustomWidgetConfig(), config.customConfig)

    // set default values to each series custom config
    for (let sInd = 0; sInd < config.seriesConfigs.length; sInd++) {
        let sConfig = config.seriesConfigs[sInd]
        sConfig.customConfig = merge({}, getDefaultCustomSeriesConfig(), config.seriesConfigs[sInd].customConfig)
    }

    const generateSeriesData = (seriesIter: number): Data => {
        const sConfig = config.seriesConfigs[seriesIter]

        let series_data_template: Data = {
            name: sConfig.title, x: [], y: [],
            type: sConfig.customConfig.renderStrategy,
            line: { color: 'red' as Color, width: 2, dash: sConfig.customConfig.lineDash, shape: sConfig.customConfig.lineShape },
            marker: { color: 'red' as Color, size: 5 }
        }
        let seriesData: Data = { ...series_data_template }

        let seriesStyle = sConfig.customConfig.seriesStyle

        // set the line mode
        seriesData.mode = sConfig.customConfig.lineMode
        // set line color and width
        seriesData.line.color = sConfig.customConfig.color
        seriesData.line.width = sConfig.customConfig.size

        // set marker color and width
        seriesData.marker.color = sConfig.customConfig.markerColor
        seriesData.marker.size = sConfig.customConfig.markerSize


        if (seriesStyle == TsspSeriesStyle.lollipop) {
            // override series mode as markers for lollipop plot
            seriesData.mode = 'markers'
        }

        // implement y axis settings
        let yAxisInd = sConfig.customConfig.yAxisIndex
        if (yAxisInd > 1) { seriesData['yaxis'] = `y${yAxisInd}` }

        if (!(seriesIter in props.data)) {
            // check if seriesIter is present as key in data
            return seriesData
        }

        if (!(0 in props.data[seriesIter]) || !(1 in props.data[seriesIter])) {
            // check if we have atleast 2 measurements data
            return seriesData
        }

        // check if lengths of both measuerements data are same
        if (props.data[seriesIter][0].length != props.data[seriesIter][1].length) {
            return seriesData
        }

        // get points from measurement
        for (let pntIter = 0; pntIter < props.data[seriesIter][0].length - 1; pntIter += 2) {
            let xVal: Datum = props.data[seriesIter][0][pntIter];
            (seriesData.x as Datum[]).push(props.data[seriesIter][0][pntIter + 1]);
            (seriesData.y as Datum[]).push(props.data[seriesIter][1][pntIter + 1]);
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

    const generateSeriesShapes = (seriesIter: number): Layout["shapes"] => {
        const sConfig = config.seriesConfigs[seriesIter]
        const seriesStyle = sConfig.customConfig.seriesStyle
        if (![TsspSeriesStyle.lollipop].includes(seriesStyle)) { return [] }
        let seriesShapes: Layout["shapes"] = []
        if (!(seriesIter in props.data)) {
            // check if seriesIter is present as key in data
            return seriesShapes
        }

        if (!(0 in props.data[seriesIter]) || !(1 in props.data[seriesIter])) {
            //check if we have atleast one measurement data
            return seriesShapes
        }
        // get points from measurement
        for (let pntIter = 0; pntIter < props.data[seriesIter][0].length - 1; pntIter += 2) {
            const xVal: Datum = props.data[seriesIter][0][pntIter + 1]
            const yVal: Datum = props.data[seriesIter][1][pntIter + 1]
            let shape: Partial<Shape> = {
                x0: xVal, y0: 0, x1: xVal, y1: yVal, xref: 'x', yref: 'y', line: { color: sConfig.customConfig.color as string }
            }
            // implement y axis settings
            let yAxisInd = sConfig.customConfig.yAxisIndex
            if (yAxisInd > 1) { shape['yref'] = `y${yAxisInd}` as any }
            seriesShapes.push(shape)
        }
        return seriesShapes
    }

    const generatePlotShapes = (): Layout["shapes"] => {
        let plot_shapes: Layout["shapes"] = []
        for (let seriesIter = 0; seriesIter < config.seriesConfigs.length; seriesIter++) {
            plot_shapes = [...plot_shapes, ...generateSeriesShapes(seriesIter)]
        }
        return plot_shapes
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

    // get shapes for lollipop chart
    let shape_data: Layout["shapes"] = generatePlotShapes()
    plot_layout.shapes = shape_data

    let plot_frames: Frame[] = []
    let plot_config: Partial<Config> = {}


    return (
        <PlotlyComponent
            data={plot_data}
            layout={plot_layout}
            frames={plot_frames}
            config={plot_config}
            style={{ width: '100%', height: '100%' }}
            useResizeHandler={true}
        />
    )
}