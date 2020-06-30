import React, { useContext, useState, useEffect } from 'react'
import { Layout, Layouts } from "react-grid-layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faFolderOpen, faSave, faCog, faPlusSquare, faRedoAlt, faStopCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { WidgetEditorModal } from '../components/WidgetEditor/WidgetEditorModal';
import { IWidgetConfig } from '../type_defs/dashboard/IWidgetConfig';
import "bootstrap/dist/css/bootstrap.min.css";
import { DashboardSettingsEditorModal } from '../components/DashboardSettingsEditor/DashboardSettingsEditorModal';
import { IDashboardSettings } from '../components/DashboardSettingsEditor/type_defs/IDashboardSettings';
import { WidgetAddModal } from '../components/WidgetAddModal/WidgetAddModal';
import { Dashboard } from '../components/Dashboard/Dashboard';
import { getApiAdaptersRegistry } from '../../../apiAdapters/ApiManifestRegistry';
import { DummyMeasurement } from '../../../measurements/DummyMeasurement';
import { IElectronDashboardProps } from '../ElectronDashboard/type_defs/IDashboardProps';
import { IElectronDashboardState } from '../ElectronDashboard/type_defs/IDashboardState';
import { getDefaultDashboardState } from '../ElectronDashboard/queries/getDefaultDashboardState';
import { layoutChangeAction } from '../ElectronDashboard/actions/LayoutChangeAction';
import { setDashboardStateAction } from '../ElectronDashboard/actions/SetDashboardStateAction';
import { toggleCompactionAction } from '../ElectronDashboard/actions/ToggleCompactionAction';
import { toggleAutofetchAction } from '../ElectronDashboard/actions/ToggleAutoFetchAction';
import { addWidgetAction } from '../ElectronDashboard/actions/AddWidgetAction';
import { setDashboardSettingsAction } from '../ElectronDashboard/actions/SetDashboardSettingsAction';
import { duplicateWidgetAction } from '../ElectronDashboard/actions/DuplicateWidgetAction';
import { deleteWidgetAction } from '../ElectronDashboard/actions/DeleteWidgetAction';
import { TimePeriod } from '../../../Time/TimePeriod';
import { useWebDashboardReducer } from './reducers/webDashboardReducer';
import { fetchWebWidgetDataAction } from './actions/FetchWidgetDataAction';
import { fetchAllWebWidgetsDataAction } from './actions/FetchAllWidgetsDataAction';
import { WebMeasurementEditor } from '../../../measurements/components/WebMeasurementEditor';
import { exportExcelAction } from './actions/ExportExcelAction';
import { saveDashboardAction } from './actions/SaveDashboardAction';
import { EquationMeasurement } from '../../../measurements/EquationMeasurement';
import { VizPluginsRepoContext } from '../contexts/vizPluginsRepoContext';
import { fileUploadBtnId } from '../webDashboardApp';
import { renewablesDash } from './preset_dashboards/renewables_dash';
import { wrRenewablesDash } from './preset_dashboards/wr_renewables_dash';
import { mumbaiDash } from './preset_dashboards/mumbai_dash';
import { demFreqDash } from './preset_dashboards/dem_freq_dash';
import { scadaInfoDash } from './preset_dashboards/scada_info';
import { tempMonitorDash } from './preset_dashboards/temp_monitor_dash';

export const WebDashboard: React.FC<Partial<IElectronDashboardProps>> = (props?: IElectronDashboardProps) => {
    const dashInitState: IElectronDashboardState = { ...getDefaultDashboardState(), ...props }
    const [dashState, dashStateDispatch] = useWebDashboardReducer(dashInitState)
    const [showEditWidgetModal, setShowEditWidgetModal] = useState(false)
    const [activeWidgetIndex, setActiveWidgetIndex] = useState(0)
    const [showDashSettingsModal, setShowDashSettingsModal] = useState(false)
    const [showWidgetAddModal, setShowWidgetAddModal] = useState(false)
    const [timerId, setTimerId] = useState(null)
    const vizPluginNames: string[] = useContext(VizPluginsRepoContext).getInstalledPluginNames()
    const [measTypes, setMeasTypes] = useState([] as { val: string, name: string }[])
    useEffect(() => {
        (async function () {
            const apiAdapters = Object.values(getApiAdaptersRegistry()).map(n => ({ val: `api|${n.api_id}`, name: n.name }))
            setMeasTypes([{ val: DummyMeasurement.typename, name: 'Random' }, ...apiAdapters, { val: EquationMeasurement.typename, name: 'Equation' }])
            const uploadBtn = document.getElementById(fileUploadBtnId) as HTMLInputElement
            uploadBtn.onchange = (evt: any) => {
                var files = evt.target.files
                if (files.length === 0) {
                    console.log('No file is selected')
                    return
                }
                var reader = new FileReader()
                reader.onload = function (event) {
                    const fContent: string = event.target.result as string
                    console.log('File content:', fContent)
                    dashStateDispatch(setDashboardStateAction({ ...dashState, ...JSON.parse(fContent) }))
                }
                reader.readAsText(files[0]);
            }
        })()
    }, [])

    const onLayoutChange = (currLayout: Layout[], allLayouts: Layouts): void => {
        dashStateDispatch(layoutChangeAction(currLayout, allLayouts))
    }

    const onBreakpointChange = (newBreakpoint: string, newCols: number) => {
        dashStateDispatch(setDashboardStateAction({ ...dashState, currentBreakpoint: newBreakpoint as IElectronDashboardState["currentBreakpoint"] }))
    }

    const onOpenDashboard = (ev: React.MouseEvent<HTMLButtonElement>) => {
        (document.getElementById(fileUploadBtnId) as HTMLInputElement).click();
    }

    const onSaveDashboard = (ev: React.MouseEvent<HTMLButtonElement>) => {
        dashStateDispatch(saveDashboardAction())
    }

    const onResetLayout = (ev: React.MouseEvent<HTMLButtonElement>) => {
        dashStateDispatch(setDashboardStateAction(getDefaultDashboardState()))
    }

    const onCompactTypeChange = (ev: React.MouseEvent<HTMLButtonElement>) => {
        dashStateDispatch(toggleCompactionAction())
    }

    const onOpenSettingsEditor = (ev: React.MouseEvent<HTMLButtonElement>) => {
        setShowDashSettingsModal(true)
    }

    const onAddWidgetClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        setShowWidgetAddModal(true)
    }

    const onToggleTimerClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        dashStateDispatch(toggleAutofetchAction())
    }

    const onAddWidgetSubmit = (vizType: string) => {
        dashStateDispatch(addWidgetAction(vizType))
    }

    const onRefreshAllWidgetsClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        dashStateDispatch(fetchAllWebWidgetsDataAction())
    }

    const onEditWidget = (wInd: number): void => {
        setActiveWidgetIndex(wInd)
        setShowEditWidgetModal(true)
    }

    const onEditWidgetSubmit = (wc: IWidgetConfig): void => {
        dashStateDispatch(setDashboardStateAction({
            ...dashState, widgetProps: [
                ...dashState.widgetProps.slice(0, activeWidgetIndex),
                { ...dashState.widgetProps[activeWidgetIndex], config: wc },
                ...dashState.widgetProps.slice(activeWidgetIndex + 1),
            ]
        }))
    }

    const onDashSettingsSubmit = (s: IDashboardSettings): void => {
        dashStateDispatch(setDashboardSettingsAction(s))
    }

    const onDuplicateWidget = (wInd: number): void => {
        dashStateDispatch(duplicateWidgetAction(wInd))
    }

    const onExportWidget = (wInd: number): void => {
        dashStateDispatch(exportExcelAction(wInd))
    }

    const onRefreshWidget = (wInd: number): void => {
        dashStateDispatch(fetchWebWidgetDataAction(wInd))
    }

    const onRemoveWidget = (wInd: number): void => {
        if (confirm('Delete this widget?')) {
            dashStateDispatch(deleteWidgetAction(wInd))
        }
    }

    const onLoadPresetDashboard = (evnt: React.ChangeEvent<HTMLSelectElement>) => {
        // get the selected option
        const selOpt: string = evnt.target.value
        let dashObj = null
        if (selOpt == "renewables") {
            dashObj = { ...renewablesDash }

        } else if (selOpt == "wr_renewables") {
            dashObj = { ...wrRenewablesDash }
        }
        else if (selOpt == "mumbai") {
            dashObj = { ...mumbaiDash }
        }
        else if (selOpt == "dem_freq") {
            dashObj = { ...demFreqDash }
        }
        else if (selOpt == "scada_info") {
            dashObj = { ...scadaInfoDash }
        }
        else if (selOpt == "temp_monitor_dash") {
            dashObj = { ...tempMonitorDash }
        }

        if (dashObj != null) {
            if (confirm("Do you want to load this dashbaord?")) {
                dashStateDispatch(setDashboardStateAction(
                    {
                        ...dashInitState,
                        ...dashObj as IElectronDashboardState,
                        timer: { ...dashState.timer }
                    }
                ))
            }
        }
    }

    // check if we have to stop the timer
    if (dashState.timer.isOn == true && dashState.timerSettings.timerOn == false) {
        dashStateDispatch(setDashboardStateAction({
            ...dashState,
            timer: {
                ...dashState.timer,
                isOn: false,
                busy: false
            }
        }))
        window.clearInterval(timerId);
    }

    // check if we have to start the timer
    if (dashState.timer.isOn == false && dashState.timerSettings.timerOn == true) {
        const timerPeriod = 1000 * TimePeriod.getSeconds(dashState.timerSettings.timerPeriodicity);
        if (timerPeriod > 0) {
            // set timer as ON
            dashStateDispatch(setDashboardStateAction({
                ...dashState,
                timer: {
                    ...dashState.timer,
                    isOn: true
                }
            }))

            const newTimerId = window.setInterval(async () => {
                if (dashState.timer.busy == true) {
                    return
                }
                else {
                    dashStateDispatch(fetchAllWebWidgetsDataAction())
                }
            }, timerPeriod)

            setTimerId(newTimerId)

            dashStateDispatch(fetchAllWebWidgetsDataAction())
        }
    }

    return <>
        <div className={"btn-group btn-group-sm"}>
            <select onChange={onLoadPresetDashboard}>
                <option value="none">Select Dashboard</option>
                <option value="mumbai">Mumbai Dem and Gen</option>
                <option value="renewables">Renewables</option>
                <option value="wr_renewables">Total Renewables</option>
                <option value="dem_freq">Demand Frequency</option>
                <option value="scada_info">SCADA Values</option>
                <option value="temp_monitor_dash">Temperature Monitoring</option>
            </select>
            <button onClick={onOpenDashboard} className={"btn btn-outline-primary"}><FontAwesomeIcon icon={faFolderOpen} /> Open</button>
            <button onClick={onSaveDashboard} className={"btn btn-outline-primary"}><FontAwesomeIcon icon={faSave} /> Save</button>
            <button onClick={onOpenSettingsEditor} className={"btn btn-outline-primary"}><FontAwesomeIcon icon={faCog} /> Settings</button>
            <button onClick={onResetLayout} className={"btn btn-outline-primary"}><FontAwesomeIcon icon={faSyncAlt} /> Reset Layout</button>
            <button onClick={onCompactTypeChange} className={"btn btn-outline-primary"}>
                {dashState.gridConfig.compactType || "No"}{` Compaction`}
            </button>
            <button onClick={onToggleTimerClick} className={"btn btn-outline-primary"}>{dashState.timer.isOn == true ? (<><FontAwesomeIcon icon={faStopCircle} /> Stop AutoFetch</>) : (<><FontAwesomeIcon icon={faPlayCircle} /> Start AutoFetch</>)}</button>
            <button onClick={onAddWidgetClick} className={"btn btn-outline-success"}><FontAwesomeIcon icon={faPlusSquare} /> Add Widget</button>
            <button onClick={onRefreshAllWidgetsClick} className={"btn btn-outline-warning"}><FontAwesomeIcon icon={faRedoAlt} /> Refresh All</button>
        </div>

        <Dashboard
            className={dashState.className}
            gridConfig={dashState.gridConfig}
            widgetProps={dashState.widgetProps}
            onDuplicateWidget={onDuplicateWidget}
            onRefreshWidget={onRefreshWidget}
            onEditWidget={onEditWidget}
            onRemoveWidget={onRemoveWidget}
            onExportWidget={onExportWidget}
            onLayoutChange={onLayoutChange}
            currentBreakpoint={dashState.currentBreakpoint}
            onBreakpointChange={onBreakpointChange}
            getComp={(vizType: string) => { return useContext(VizPluginsRepoContext).getComp(vizType) }}
        />

        {(dashState.widgetProps[activeWidgetIndex] != undefined) &&
            <WidgetEditorModal
                show={showEditWidgetModal}
                setShow={setShowEditWidgetModal}
                measTypes={measTypes}
                value={dashState.widgetProps[activeWidgetIndex].config}
                onSubmit={onEditWidgetSubmit}
                MeasurementEditor={WebMeasurementEditor}
            />}

        <DashboardSettingsEditorModal
            show={showDashSettingsModal}
            setShow={setShowDashSettingsModal}
            value={{ backgroundColor: dashState.gridConfig.backgroundColor, timerSettings: dashState.timerSettings }}
            onSubmit={onDashSettingsSubmit}
        />
        <WidgetAddModal
            show={showWidgetAddModal}
            setShow={setShowWidgetAddModal}
            value={vizPluginNames}
            onSubmit={onAddWidgetSubmit}
        />
    </>
}