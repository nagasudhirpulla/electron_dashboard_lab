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
import { TextPlotMetadata } from "../components/TextPlot/TextPlotMetadata"
import { TextPlotWidgetConfigEditor } from "../components/TextPlot/TextPlotWidgetConfigEditor"
import { TextPlot } from "../components/TextPlot/TextPlot"
import { TextPlotSeriesConfigEditor } from "../components/TextPlot/TextPlotSeriesConfigEditor"

const $comps = VizPluginsRepo()
// register line plot
$comps.registerComp(LinePlotMetadata.discriminator, LinePlot, LinePlotWidgetConfigEditor, LinePlotSeriesConfigEditor, LinePlotMetadata)
// register scatter plot
$comps.registerComp(ScatterPlotMetadata.discriminator, ScatterPlot, ScatterPlotWidgetConfigEditor, ScatterPlotSeriesConfigEditor, ScatterPlotMetadata)
// register Text plot
$comps.registerComp(TextPlotMetadata.discriminator, TextPlot, TextPlotWidgetConfigEditor, TextPlotSeriesConfigEditor, TextPlotMetadata)

export const VizPluginsRepoContext = React.createContext($comps)