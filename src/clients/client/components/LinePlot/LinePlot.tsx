import { IWidgetProps } from "../../type_defs/dashboard/IWidgetProps"
import React from 'react'
import { Data, Layout, Config, Frame, Color, Datum } from "plotly.js"
import Plot from 'react-plotly.js'
import { YAxisSide } from "./type_defs/YAxisSide"
import { ILinePlotWidgetProps } from "./type_defs/ILinePlotWidgetProps"
import merge from 'lodash.merge'
import { defLinePlotWidgetCustomConfig, defLinePlotSeriesCustomConfig } from "./configDefaults"
import { TslpSeriesStyle } from "./type_defs/TslpSeriesStyle"
import { TimePeriod } from "../../../../Time/TimePeriod"

export const LinePlot: React.FC<IWidgetProps> = (props: ILinePlotWidgetProps) => {
    // set default values to configs
    let config = props.config
    config.customConfig = merge({}, defLinePlotWidgetCustomConfig, config.customConfig)
    for (let sInd = 0; sInd < config.seriesConfigs.length; sInd++) {
        let sConfig = config.seriesConfigs[sInd];
        sConfig.customConfig = merge({}, defLinePlotSeriesCustomConfig, config.seriesConfigs[sInd].customConfig)
    }

    const generateSeriesData = (seriesIter: number): Data => {
        let series_data_template: Data = { name: this.state.seriesList[seriesIter].title, x: [], y: [], type: this.state.seriesList[seriesIter].renderStrategy, mode: 'lines', line: { color: 'red' as Color, width: 2 } }
        const seriesStyle = this.state.seriesList[seriesIter].seriesStyle;
        let seriesData: Data = { ...series_data_template };

        // use different series template for boxplot
        if (seriesStyle == TslpSeriesStyle.boxplot) {
            seriesData = {
                name: this.state.seriesList[seriesIter].title,
                y: [],
                type: 'box',
                marker: {
                    color: this.state.seriesList[seriesIter].color
                }
            };
        } else {
            // set line color and width
            seriesData.line.color = this.state.seriesList[seriesIter].color;
            seriesData.line.width = this.state.seriesList[seriesIter].size;
        }

        // implement y axis settings
        let yAxisInd = this.state.seriesList[seriesIter].yAxisIndex;
        if (yAxisInd > 0) {
            seriesData['yaxis'] = `y${yAxisInd}`;
        }

        // determine series data display time shift
        let shiftMillis: number = 0;
        if (seriesStyle != TslpSeriesStyle.duration) {
            shiftMillis = 1000 * TimePeriod.getSeconds(this.state.seriesList[seriesIter].displayTimeShift);
        }

        // get points from measurement
        for (let pntIter = 0; pntIter < this.state.seriesList[seriesIter].points.length; pntIter++) {
            const dataPnt = this.state.seriesList[seriesIter].points[pntIter];
            let xVal: Datum = dataPnt.timestamp;
            if (seriesStyle == TslpSeriesStyle.line) {
                xVal = new Date(dataPnt.timestamp + shiftMillis);
            }
            if (seriesStyle != TslpSeriesStyle.boxplot) {
                (seriesData.x as Datum[]).push(xVal);
            }
            (seriesData.y as Datum[]).push(dataPnt.value);
        }
        return seriesData;
    }

    const generatePlotData = () => {
        let plot_data = []
        for (let seriesIter = 0; seriesIter < this.state.seriesList.length; seriesIter++) {
            plot_data.push(this.generateSeriesData(seriesIter));
        }
        return plot_data;
    }

    let plot_data: Data[] = []

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
    };

    // iterate through all series objects to create the Y Axis Summary object
    let yAxSummObj: { [key: string]: { side: YAxisSide, offset: number, color: Color } } = {};
    config.seriesConfigs.forEach(sConfig => {
        let yAxisInd = sConfig.customConfig.yAxisIndex;
        let yAxisSide = sConfig.customConfig.yAxisSide;
        let yAxisOffset = sConfig.customConfig.yAxisOffset;
        let yAxisCol = sConfig.customConfig.color;
        if (yAxisInd > 1) {
            yAxSummObj[yAxisInd] = { side: yAxisSide, offset: yAxisOffset, color: yAxisCol };
        }
    })
    const yAxisIndices = Object.keys(yAxSummObj);

    // create additional yAxis objects
    yAxisIndices.forEach(yAxisInd => {
        let yAxObj = {
            ...y_axis_common_obj,
            overlaying: 'y',
            anchor: 'x',
            titlefont: { color: yAxSummObj[yAxisInd].color },
            tickfont: { color: yAxSummObj[yAxisInd].color },
        };
        if (yAxSummObj[yAxisInd].side == YAxisSide.right) {
            yAxObj['side'] = 'right'
        }
        if (yAxSummObj[yAxisInd].offset != 0) {
            yAxObj['anchor'] = 'free'
            yAxObj['position'] = yAxSummObj[yAxisInd].offset
        }
        plot_layout[`yaxis${yAxisInd}`] = yAxObj
    })

    let plot_frames: Frame[] = [];
    let plot_config: Partial<Config> = {};

    return (
        <Plot
            data={plot_data}
            layout={plot_layout}
            frames={plot_frames}
            config={plot_config}
            style={{ width: '100%', height: '100%' }}
        />
    );
}