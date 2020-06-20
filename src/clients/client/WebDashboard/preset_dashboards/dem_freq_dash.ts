export const demFreqDash = { "gridConfig": { "rowHeight": 20, "cols": { "lg": 60, "md": 50, "sm": 30 }, "backgroundColor": "white", "breakpoints": { "lg": 1200, "md": 996, "sm": 768 }, "compactType": "vertical" }, "className": "dashboard", "timerSettings": { "timerOn": true, "timerPeriodicity": { "years": 0, "months": 0, "days": 0, "hrs": 0, "mins": 1, "secs": 0, "millis": 0 } }, "widgetProps": [{ "data": {}, "config": { "vizType": "Plot", "title": "WR Demand", "border": { "color": "black", "size": 1, "style": "solid" }, "seriesConfigs": [{ "title": "Yesterday Demand", "measurements": [{ "discriminator": "ApiMeasurement", "meas_id": "WRLDCMP.SCADA1.A0047000", "api_id": "ScadaApi", "periodicity": { "years": 0, "months": 0, "days": 0, "hrs": 0, "mins": 0, "secs": 0, "millis": 0 }, "resampling_strategy": "raw" }], "startTime": { "absoluteTime": 1592591400000, "offsetDays": -1, "offsetMonths": 0, "offsetYears": 0, "offsetHrs": 0, "offsetMins": 0, "offsetSecs": 0, "isVarDays": true, "isVarMonths": true, "isVarYears": true, "isVarHrs": false, "isVarMins": false, "isVarSecs": false }, "endTime": { "absoluteTime": 1592677799000, "offsetDays": -1, "offsetMonths": 0, "offsetYears": 0, "offsetHrs": 0, "offsetMins": 0, "offsetSecs": 0, "isVarDays": true, "isVarMonths": true, "isVarYears": true, "isVarHrs": false, "isVarMins": false, "isVarSecs": false }, "fetchWindow": { "years": 0, "months": 0, "days": 0, "hrs": 0, "mins": 0, "secs": 0, "millis": 0 }, "vizType": "Plot", "customConfig": { "yAxisIndex": 1, "yAxisSide": "left", "yAxisOffset": 0, "color": "#bd10e0", "renderStrategy": "scatter", "seriesStyle": "line", "lineMode": "lines", "lineDash": "solid", "lineShape": "linear", "size": 2, "markerColor": null, "markerSize": 2, "displayTimeShift": { "years": 0, "months": 0, "days": 1, "hrs": 0, "mins": 0, "secs": 0, "millis": 0 } } }, { "title": "Demand", "measurements": [{ "discriminator": "ApiMeasurement", "meas_id": "WRLDCMP.SCADA1.A0047000", "api_id": "ScadaApi", "periodicity": { "years": 0, "months": 0, "days": 0, "hrs": 0, "mins": 0, "secs": 0, "millis": 0 }, "resampling_strategy": "raw" }], "startTime": { "absoluteTime": 1592591400000, "offsetDays": 0, "offsetMonths": 0, "offsetYears": 0, "offsetHrs": 0, "offsetMins": 0, "offsetSecs": 0, "isVarDays": true, "isVarMonths": true, "isVarYears": true, "isVarHrs": false, "isVarMins": false, "isVarSecs": false }, "endTime": { "absoluteTime": 1592677799000, "offsetDays": 0, "offsetMonths": 0, "offsetYears": 0, "offsetHrs": 0, "offsetMins": 0, "offsetSecs": 0, "isVarDays": true, "isVarMonths": true, "isVarYears": true, "isVarHrs": true, "isVarMins": true, "isVarSecs": true }, "fetchWindow": { "years": 0, "months": 0, "days": 0, "hrs": 0, "mins": 0, "secs": 0, "millis": 0 }, "vizType": "Plot", "customConfig": { "yAxisIndex": 1, "yAxisSide": "left", "yAxisOffset": 0, "color": "#4a90e2", "renderStrategy": "scatter", "seriesStyle": "line", "lineMode": "lines", "lineDash": "solid", "lineShape": "linear", "size": 2, "markerColor": null, "markerSize": 2, "displayTimeShift": { "years": 0, "months": 0, "days": 0, "hrs": 0, "mins": 0, "secs": 0, "millis": 0 } } }, { "title": "Net Demand", "measurements": [{ "discriminator": "ApiMeasurement", "meas_id": "WRLDCMP.SCADA1.A0005322", "api_id": "ScadaApi", "periodicity": { "years": 0, "months": 0, "days": 0, "hrs": 0, "mins": 0, "secs": 0, "millis": 0 }, "resampling_strategy": "raw" }], "startTime": { "absoluteTime": 1592591400000, "offsetDays": 0, "offsetMonths": 0, "offsetYears": 0, "offsetHrs": 0, "offsetMins": 0, "offsetSecs": 0, "isVarDays": true, "isVarMonths": true, "isVarYears": true, "isVarHrs": false, "isVarMins": false, "isVarSecs": false }, "endTime": { "absoluteTime": 1592677799000, "offsetDays": 0, "offsetMonths": 0, "offsetYears": 0, "offsetHrs": 0, "offsetMins": 0, "offsetSecs": 0, "isVarDays": true, "isVarMonths": true, "isVarYears": true, "isVarHrs": true, "isVarMins": true, "isVarSecs": true }, "fetchWindow": { "years": 0, "months": 0, "days": 0, "hrs": 0, "mins": 0, "secs": 0, "millis": 0 }, "vizType": "Plot", "customConfig": { "yAxisIndex": "1", "yAxisSide": "left", "yAxisOffset": 0, "color": "#f5a623", "renderStrategy": "scatter", "seriesStyle": "line", "lineMode": "lines", "lineDash": "solid", "lineShape": "linear", "size": 2, "markerColor": null, "markerSize": 2, "displayTimeShift": { "years": 0, "months": 0, "days": 0, "hrs": 0, "mins": 0, "secs": 0, "millis": 0 } } }], "customConfig": { "showGrid": true, "titleColor": null, "backgroundColor": null, "seriesStackMode": "none" } }, "layouts": { "lg": { "w": 60, "h": 16, "x": 0, "y": 0, "i": "1337cee8-f2d3-4136-8ab4-5f35f7f3ca5d", "moved": false, "static": false } } }, { "data": {}, "config": { "vizType": "Plot", "title": "WR Frequency", "border": { "color": "black", "size": 1, "style": "solid" }, "seriesConfigs": [{ "title": "Yesterday Frequency", "measurements": [{ "discriminator": "ApiMeasurement", "meas_id": "WRLDCMP.SCADA1.A0036324", "api_id": "ScadaApi", "periodicity": { "years": 0, "months": 0, "days": 0, "hrs": 0, "mins": 0, "secs": 0, "millis": 0 }, "resampling_strategy": "raw" }], "startTime": { "absoluteTime": 1592591400000, "offsetDays": -1, "offsetMonths": 0, "offsetYears": 0, "offsetHrs": 0, "offsetMins": 0, "offsetSecs": 0, "isVarDays": true, "isVarMonths": true, "isVarYears": true, "isVarHrs": false, "isVarMins": false, "isVarSecs": false }, "endTime": { "absoluteTime": 1592677799000, "offsetDays": -1, "offsetMonths": 0, "offsetYears": 0, "offsetHrs": 0, "offsetMins": 0, "offsetSecs": 0, "isVarDays": true, "isVarMonths": true, "isVarYears": true, "isVarHrs": false, "isVarMins": false, "isVarSecs": false }, "fetchWindow": { "years": 0, "months": 0, "days": 0, "hrs": 0, "mins": 0, "secs": 0, "millis": 0 }, "vizType": "Plot", "customConfig": { "yAxisIndex": 1, "yAxisSide": "left", "yAxisOffset": 0, "color": "#bd10e0", "renderStrategy": "scatter", "seriesStyle": "line", "lineMode": "lines", "lineDash": "solid", "lineShape": "linear", "size": 2, "markerColor": null, "markerSize": 2, "displayTimeShift": { "years": 0, "months": 0, "days": 1, "hrs": 0, "mins": 0, "secs": 0, "millis": 0 } } }, { "title": "Frequency", "measurements": [{ "discriminator": "ApiMeasurement", "meas_id": "WRLDCMP.SCADA1.A0036324", "api_id": "ScadaApi", "periodicity": { "years": 0, "months": 0, "days": 0, "hrs": 0, "mins": 0, "secs": 0, "millis": 0 }, "resampling_strategy": "raw" }], "startTime": { "absoluteTime": 1592591400000, "offsetDays": 0, "offsetMonths": 0, "offsetYears": 0, "offsetHrs": 0, "offsetMins": 0, "offsetSecs": 0, "isVarDays": true, "isVarMonths": true, "isVarYears": true, "isVarHrs": false, "isVarMins": false, "isVarSecs": false }, "endTime": { "absoluteTime": 1592677799000, "offsetDays": 0, "offsetMonths": 0, "offsetYears": 0, "offsetHrs": 0, "offsetMins": 0, "offsetSecs": 0, "isVarDays": true, "isVarMonths": true, "isVarYears": true, "isVarHrs": true, "isVarMins": true, "isVarSecs": true }, "fetchWindow": { "years": 0, "months": 0, "days": 0, "hrs": 0, "mins": 0, "secs": 0, "millis": 0 }, "vizType": "Plot", "customConfig": { "yAxisIndex": 1, "yAxisSide": "left", "yAxisOffset": 0, "color": "#4a90e2", "renderStrategy": "scatter", "seriesStyle": "line", "lineMode": "lines", "lineDash": "solid", "lineShape": "linear", "size": 2, "markerColor": null, "markerSize": 2, "displayTimeShift": { "years": 0, "months": 0, "days": 0, "hrs": 0, "mins": 0, "secs": 0, "millis": 0 } } }], "customConfig": { "showGrid": true, "titleColor": null, "backgroundColor": null, "seriesStackMode": "none" } }, "layouts": { "lg": { "w": 60, "h": 16, "x": 0, "y": 16, "i": "b90aa9c1-eaf2-4432-9a25-d9c5fff90c07", "moved": false, "static": false } } }], "timer": { "isOn": false, "start": 0, "busy": false }, "currentBreakpoint": "lg" }