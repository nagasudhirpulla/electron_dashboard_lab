import { VizPluginsRepo } from "../VizPluginsRepo"
import React from "react"
import { LinePlotMetadata } from "../components/LinePlot/LinePlotMetadata"
import { LinePlot } from "../components/LinePlot/LinePlot"
import { LinePlotWidgetConfigEditor } from "../components/LinePlot/LinePlotWidgetConfigEditor"
import { LinePlotSeriesConfigEditor } from "../components/LinePlot/LinePlotSeriesConfigEditor"
import { ScatterPlot } from "../components/ScatterPlot/ScatterPlot"
import { ScatterPlotWidgetConfigEditor } from "../components/ScatterPlot/ScatterPlotWidgetConfigEditor"
import { ScatterPlotSeriesConfigEditor } from "../components/ScatterPlot/ScatterPlotSeriesConfigEditor"
import { ScatterPlotMetadata } from "../components/ScatterPlot/ScatterPlotMetadata"

const $comps = VizPluginsRepo()
// register line plot
$comps.registerComp(LinePlotMetadata.discriminator, LinePlot, LinePlotWidgetConfigEditor, LinePlotSeriesConfigEditor, LinePlotMetadata)
// register scatter plot
$comps.registerComp(ScatterPlotMetadata.discriminator, ScatterPlot, ScatterPlotWidgetConfigEditor, ScatterPlotSeriesConfigEditor, ScatterPlotMetadata)

export const VizPluginsRepoContext = React.createContext($comps)