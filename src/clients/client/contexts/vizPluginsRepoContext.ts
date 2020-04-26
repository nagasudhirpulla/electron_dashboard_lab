import { VizPluginsRepo } from "../VizPluginsRepo"
import React from "react"
import { LinePlotMetadata } from "../components/LinePlot/LinePlotMetadata"
import { LinePlot } from "../components/LinePlot/LinePlot"
import { LinePlotWidgetConfigEditor } from "../components/LinePlot/LinePlotWidgetConfigEditor"
import { LinePlotSeriesConfigEditor } from "../components/LinePlot/LinePlotSeriesConfigEditor"

const $comps = VizPluginsRepo()
// register line plot
$comps.registerComp(LinePlotMetadata.discriminator, LinePlot, LinePlotWidgetConfigEditor, LinePlotSeriesConfigEditor, LinePlotMetadata)

export const VizPluginsRepoContext = React.createContext($comps)