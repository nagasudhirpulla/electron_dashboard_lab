export const renewablesDash = {
    "gridConfig": {
        "rowHeight": 20,
        "cols": {
            "lg": 60,
            "md": 50,
            "sm": 30
        },
        "backgroundColor": "white",
        "breakpoints": {
            "lg": 1200,
            "md": 996,
            "sm": 768
        },
        "compactType": "vertical"
    },
    "className": "dashboard",
    "timerSettings": {
        "timerOn": true,
        "timerPeriodicity": {
            "years": 0,
            "months": 0,
            "days": 0,
            "hrs": 0,
            "mins": 5,
            "secs": 0,
            "millis": 0
        }
    },
    "widgetProps": [
        {
            "data": {},
            "config": {
                "vizType": "Plot",
                "title": "Gujarat Wind",
                "border": {
                    "color": "black",
                    "size": 1,
                    "style": "solid"
                },
                "seriesConfigs": [
                    {
                        "title": "Today",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0104731",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588671225530,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": true,
                            "isVarMins": true,
                            "isVarSecs": true
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 0,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    },
                    {
                        "title": "Yesterday",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0104731",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588703399000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 1,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    }
                ],
                "customConfig": {
                    "showGrid": true,
                    "titleColor": null,
                    "backgroundColor": null,
                    "seriesStackMode": "none"
                }
            },
            "layouts": {
                "lg": {
                    "w": 30,
                    "h": 15,
                    "x": 0,
                    "y": 0,
                    "i": "73da8a5b-29d0-4781-a477-9bab10eceeda",
                    "moved": false,
                    "static": false
                }
            }
        },
        {
            "data": {},
            "config": {
                "vizType": "Plot",
                "title": "MP Wind",
                "border": {
                    "color": "black",
                    "size": 1,
                    "style": "solid"
                },
                "seriesConfigs": [
                    {
                        "title": "Today",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0108547",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588671225530,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": true,
                            "isVarMins": true,
                            "isVarSecs": true
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 0,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    },
                    {
                        "title": "Yesterday",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0108547",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588703399000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 1,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    }
                ],
                "customConfig": {
                    "showGrid": true,
                    "titleColor": null,
                    "backgroundColor": null,
                    "seriesStackMode": "none"
                }
            },
            "layouts": {
                "lg": {
                    "w": 30,
                    "h": 15,
                    "x": 30,
                    "y": 0,
                    "i": "61e82b26-03ab-4a24-86f7-299778e7a3c1",
                    "moved": false,
                    "static": false
                }
            }
        },
        {
            "data": {},
            "config": {
                "vizType": "Plot",
                "title": "Maharashtra Wind",
                "border": {
                    "color": "black",
                    "size": 1,
                    "style": "solid"
                },
                "seriesConfigs": [
                    {
                        "title": "Today",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0112097",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588671225530,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": true,
                            "isVarMins": true,
                            "isVarSecs": true
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 0,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    },
                    {
                        "title": "Yesterday",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0112097",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588703399000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 1,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    }
                ],
                "customConfig": {
                    "showGrid": true,
                    "titleColor": null,
                    "backgroundColor": null,
                    "seriesStackMode": "none"
                }
            },
            "layouts": {
                "lg": {
                    "w": 30,
                    "h": 15,
                    "x": 0,
                    "y": 15,
                    "i": "3b21946d-edcd-42ea-9f0a-1a29a6cb183e",
                    "moved": false,
                    "static": false
                }
            }
        },
        {
            "data": {},
            "config": {
                "vizType": "Plot",
                "title": "Chhattisgarh Solar",
                "border": {
                    "color": "black",
                    "size": 1,
                    "style": "solid"
                },
                "seriesConfigs": [
                    {
                        "title": "Today",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0103074",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588671225530,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": true,
                            "isVarMins": true,
                            "isVarSecs": true
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 0,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    },
                    {
                        "title": "Yesterday",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0103074",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588703399000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 1,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    }
                ],
                "customConfig": {
                    "showGrid": true,
                    "titleColor": null,
                    "backgroundColor": null,
                    "seriesStackMode": "none"
                }
            },
            "layouts": {
                "lg": {
                    "w": 30,
                    "h": 15,
                    "x": 30,
                    "y": 15,
                    "i": "9d02b4b7-fa46-47a2-a65d-6658dfc166bb",
                    "moved": false,
                    "static": false
                }
            }
        },
        {
            "data": {},
            "config": {
                "vizType": "Plot",
                "title": "MP Solar",
                "border": {
                    "color": "black",
                    "size": 1,
                    "style": "solid"
                },
                "seriesConfigs": [
                    {
                        "title": "Today",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0108546",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588671225530,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": true,
                            "isVarMins": true,
                            "isVarSecs": true
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 0,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    },
                    {
                        "title": "Yesterday",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0108546",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588703399000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 1,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    }
                ],
                "customConfig": {
                    "showGrid": true,
                    "titleColor": null,
                    "backgroundColor": null,
                    "seriesStackMode": "none"
                }
            },
            "layouts": {
                "lg": {
                    "w": 30,
                    "h": 15,
                    "x": 0,
                    "y": 30,
                    "i": "d6e7cf91-17e9-4cce-bc00-7bcfd9886151",
                    "moved": false,
                    "static": false
                }
            }
        },
        {
            "data": {},
            "config": {
                "vizType": "Plot",
                "title": "Mahrashtra Solar",
                "border": {
                    "color": "black",
                    "size": 1,
                    "style": "solid"
                },
                "seriesConfigs": [
                    {
                        "title": "Today",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0112096",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588671225530,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": true,
                            "isVarMins": true,
                            "isVarSecs": true
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 0,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    },
                    {
                        "title": "Yesterday",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0112096",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588703399000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 1,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    }
                ],
                "customConfig": {
                    "showGrid": true,
                    "titleColor": null,
                    "backgroundColor": null,
                    "seriesStackMode": "none"
                }
            },
            "layouts": {
                "lg": {
                    "w": 30,
                    "h": 15,
                    "x": 30,
                    "y": 30,
                    "i": "e549a1eb-b8bb-4d49-aee3-dc7933f15f1d",
                    "moved": false,
                    "static": false
                }
            }
        },
        {
            "data": {},
            "config": {
                "vizType": "Plot",
                "title": "Gujarat Solar",
                "border": {
                    "color": "black",
                    "size": 1,
                    "style": "solid"
                },
                "seriesConfigs": [
                    {
                        "title": "Today",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0108222",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588671225530,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": true,
                            "isVarMins": true,
                            "isVarSecs": true
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 0,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    },
                    {
                        "title": "Yesterday",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0108222",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588703399000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 1,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    }
                ],
                "customConfig": {
                    "showGrid": true,
                    "titleColor": null,
                    "backgroundColor": null,
                    "seriesStackMode": "none"
                }
            },
            "layouts": {
                "lg": {
                    "w": 30,
                    "h": 15,
                    "x": 0,
                    "y": 45,
                    "i": "29a3f8a9-7ea3-4f13-af69-68f83a966cf9",
                    "moved": false,
                    "static": false
                }
            }
        },
        {
            "data": {},
            "config": {
                "vizType": "Plot",
                "title": "Acme Solar",
                "border": {
                    "color": "black",
                    "size": 1,
                    "style": "solid"
                },
                "seriesConfigs": [
                    {
                        "title": "Today",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0113855",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588671225530,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": true,
                            "isVarMins": true,
                            "isVarSecs": true
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 0,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    },
                    {
                        "title": "Yesterday",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0113855",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588703399000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 1,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    }
                ],
                "customConfig": {
                    "showGrid": true,
                    "titleColor": null,
                    "backgroundColor": null,
                    "seriesStackMode": "none"
                }
            },
            "layouts": {
                "lg": {
                    "w": 30,
                    "h": 15,
                    "x": 30,
                    "y": 45,
                    "i": "c635fe0d-c8b8-4f81-bcec-0f9385e32379",
                    "moved": false,
                    "static": false
                }
            }
        },
        {
            "data": {},
            "config": {
                "vizType": "Plot",
                "title": "Arinsun Solar",
                "border": {
                    "color": "black",
                    "size": 1,
                    "style": "solid"
                },
                "seriesConfigs": [
                    {
                        "title": "Today",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0113856",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588671225530,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": true,
                            "isVarMins": true,
                            "isVarSecs": true
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 0,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    },
                    {
                        "title": "Yesterday",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0113856",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588703399000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 1,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    }
                ],
                "customConfig": {
                    "showGrid": true,
                    "titleColor": null,
                    "backgroundColor": null,
                    "seriesStackMode": "none"
                }
            },
            "layouts": {
                "lg": {
                    "w": 30,
                    "h": 15,
                    "x": 0,
                    "y": 60,
                    "i": "ed080753-f649-4ceb-8ddc-5de088123282",
                    "moved": false,
                    "static": false
                }
            }
        },
        {
            "data": {},
            "config": {
                "vizType": "Plot",
                "title": "Mahindra Solar",
                "border": {
                    "color": "black",
                    "size": 1,
                    "style": "solid"
                },
                "seriesConfigs": [
                    {
                        "title": "Today",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0113858",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588671225530,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": true,
                            "isVarMins": true,
                            "isVarSecs": true
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 0,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    },
                    {
                        "title": "Yesterday",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0113858",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588703399000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 1,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    }
                ],
                "customConfig": {
                    "showGrid": true,
                    "titleColor": null,
                    "backgroundColor": null,
                    "seriesStackMode": "none"
                }
            },
            "layouts": {
                "lg": {
                    "w": 30,
                    "h": 15,
                    "x": 30,
                    "y": 60,
                    "i": "a5effe9e-e248-489c-b563-3c6e0fb5edbb",
                    "moved": false,
                    "static": false
                }
            }
        },
        {
            "data": {},
            "config": {
                "vizType": "Plot",
                "title": "Ostro Wind",
                "border": {
                    "color": "black",
                    "size": 1,
                    "style": "solid"
                },
                "seriesConfigs": [
                    {
                        "title": "Today",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0113859",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588671225530,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": true,
                            "isVarMins": true,
                            "isVarSecs": true
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 0,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    },
                    {
                        "title": "Yesterday",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0113859",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588703399000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 1,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    }
                ],
                "customConfig": {
                    "showGrid": true,
                    "titleColor": null,
                    "backgroundColor": null,
                    "seriesStackMode": "none"
                }
            },
            "layouts": {
                "lg": {
                    "w": 30,
                    "h": 15,
                    "x": 0,
                    "y": 75,
                    "i": "625a103e-3733-450a-960f-afe210dc9af1",
                    "moved": false,
                    "static": false
                }
            }
        },
        {
            "data": {},
            "config": {
                "vizType": "Plot",
                "title": "Dayapar Wind",
                "border": {
                    "color": "black",
                    "size": 1,
                    "style": "solid"
                },
                "seriesConfigs": [
                    {
                        "title": "Today",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0118553",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588671225530,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": true,
                            "isVarMins": true,
                            "isVarSecs": true
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 0,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    },
                    {
                        "title": "Yesterday",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0118553",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588703399000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 1,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    }
                ],
                "customConfig": {
                    "showGrid": true,
                    "titleColor": null,
                    "backgroundColor": null,
                    "seriesStackMode": "none"
                }
            },
            "layouts": {
                "lg": {
                    "w": 30,
                    "h": 15,
                    "x": 30,
                    "y": 75,
                    "i": "76cfe68a-4d8d-41ed-8ebd-ef39adf867dc",
                    "moved": false,
                    "static": false
                }
            }
        },
        {
            "data": {},
            "config": {
                "vizType": "Plot",
                "title": "Naranpar Wind",
                "border": {
                    "color": "black",
                    "size": 1,
                    "style": "solid"
                },
                "seriesConfigs": [
                    {
                        "title": "Today",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0118554",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588671225530,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": true,
                            "isVarMins": true,
                            "isVarSecs": true
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 0,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    },
                    {
                        "title": "Yesterday",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0118554",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588703399000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 1,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    }
                ],
                "customConfig": {
                    "showGrid": true,
                    "titleColor": null,
                    "backgroundColor": null,
                    "seriesStackMode": "none"
                }
            },
            "layouts": {
                "lg": {
                    "w": 30,
                    "h": 15,
                    "x": 0,
                    "y": 90,
                    "i": "0db97989-2a31-44d2-a061-c207af153bb8",
                    "moved": false,
                    "static": false
                }
            }
        },
        {
            "data": {},
            "config": {
                "vizType": "Plot",
                "title": "Vadva Wind",
                "border": {
                    "color": "black",
                    "size": 1,
                    "style": "solid"
                },
                "seriesConfigs": [
                    {
                        "title": "Today",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0118555",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588671225530,
                            "offsetDays": 0,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": true,
                            "isVarMins": true,
                            "isVarSecs": true
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 0,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    },
                    {
                        "title": "Yesterday",
                        "measurements": [
                            {
                                "discriminator": "ApiMeasurement",
                                "meas_id": "WRLDCMP.SCADA3.A0118555",
                                "api_id": "ScadaApi",
                                "periodicity": {
                                    "years": 0,
                                    "months": 0,
                                    "days": 0,
                                    "hrs": 0,
                                    "mins": 0,
                                    "secs": 0,
                                    "millis": 0
                                },
                                "resampling_strategy": "raw"
                            }
                        ],
                        "startTime": {
                            "absoluteTime": 1588617000000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "endTime": {
                            "absoluteTime": 1588703399000,
                            "offsetDays": -1,
                            "offsetMonths": 0,
                            "offsetYears": 0,
                            "offsetHrs": 0,
                            "offsetMins": 0,
                            "offsetSecs": 0,
                            "isVarDays": true,
                            "isVarMonths": true,
                            "isVarYears": true,
                            "isVarHrs": false,
                            "isVarMins": false,
                            "isVarSecs": false
                        },
                        "fetchWindow": {
                            "years": 0,
                            "months": 0,
                            "days": 0,
                            "hrs": 0,
                            "mins": 0,
                            "secs": 0,
                            "millis": 0
                        },
                        "vizType": "Plot",
                        "customConfig": {
                            "yAxisIndex": 1,
                            "yAxisSide": "left",
                            "yAxisOffset": 0,
                            "color": null,
                            "renderStrategy": "scatter",
                            "seriesStyle": "line",
                            "lineMode": "lines",
                            "lineDash": "solid",
                            "lineShape": "linear",
                            "size": 2,
                            "markerColor": null,
                            "markerSize": 2,
                            "displayTimeShift": {
                                "years": 0,
                                "months": 0,
                                "days": 1,
                                "hrs": 0,
                                "mins": 0,
                                "secs": 0,
                                "millis": 0
                            }
                        }
                    }
                ],
                "customConfig": {
                    "showGrid": true,
                    "titleColor": null,
                    "backgroundColor": null,
                    "seriesStackMode": "none"
                }
            },
            "layouts": {
                "lg": {
                    "w": 30,
                    "h": 15,
                    "x": 30,
                    "y": 90,
                    "i": "e3a0cfe4-cebc-4cce-940c-3eefd64e72b3",
                    "moved": false,
                    "static": false
                }
            }
        }
    ],
    "timer": {
        "isOn": true,
        "start": 0,
        "busy": false
    },
    "currentBreakpoint": "lg"
};