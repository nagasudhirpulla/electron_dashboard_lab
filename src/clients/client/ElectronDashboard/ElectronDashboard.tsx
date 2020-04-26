import React, { useContext, useState, useEffect } from 'react'
import { IElectronDashboardProps } from './type_defs/IDashboardProps';
import { useDashboardReducer } from './reducers/dashboardReducer';
import { getDefaultDashboardState } from './queries/getDefaultDashboardState';
import { IElectronDashboardState } from './type_defs/IDashboardState';
import { openDashboardAction } from './actions/OpenDashboardAction';
import { saveDashboardAction } from './actions/SaveDashboardAction';
import { setDashboardStateAction } from './actions/SetDashboardStateAction';
import { toggleCompactionAction } from './actions/ToggleCompactionAction';
import { ipcRenderer } from 'electron';
import { ChannelNames } from '../../../ipc/ChannelNames';
import { Layout, Layouts } from "react-grid-layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faFolderOpen, faSave, faCog, faDatabase, faChartBar, faPlusSquare, faRedoAlt, faStopCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { layoutChangeAction } from './actions/LayoutChangeAction';
import { duplicateWidgetAction } from './actions/DuplicateWidgetAction';
import { deleteWidgetAction } from './actions/DeleteWidgetAction';
import { WidgetEditorModal } from '../components/WidgetEditor/WidgetEditorModal';
import { IWidgetConfig } from '../type_defs/dashboard/IWidgetConfig';
import "bootstrap/dist/css/bootstrap.min.css";
import { DashboardSettingsEditorModal } from '../components/DashboardSettingsEditor/DashboardSettingsEditorModal';
import { IDashboardSettings } from '../components/DashboardSettingsEditor/type_defs/IDashboardSettings';
import { setDashboardSettingsAction } from './actions/SetDashboardSettingsAction';
import { fetchWidgetDataAction } from './actions/FetchWidgetDataAction';
import { fetchAllWidgetsDataAction } from './actions/FetchAllWidgetsDataAction';
import { WidgetAddModal } from '../components/WidgetAddModal/WidgetAddModal';
import { addWidgetAction } from './actions/AddWidgetAction';
import { toggleAutofetchAction } from './actions/ToggleAutoFetchAction';
import { TimePeriod } from '../../../Time/TimePeriod';
import { exportExcelAction } from './actions/ExportExcelAction';
import { Dashboard } from '../components/Dashboard/Dashboard';
import { loadDataAdapters } from '../../adapters/queries/loadDataAdapters';
import { getApiAdaptersRegistry } from '../../../apiAdapters/ApiManifestRegistry';
import { DummyMeasurement } from '../../../measurements/DummyMeasurement';
import { MeasurementEditor } from '../../../measurements/components/MeasurementEditor';
import { VizPluginsRepoContext } from '../contexts/vizPluginsRepoContext';
import { EquationMeasurement } from '../../../measurements/EquationMeasurement';

export const ElectronDashboard: React.FC<Partial<IElectronDashboardProps>> = (props?: IElectronDashboardProps) => {
    const dashInitState: IElectronDashboardState = { ...getDefaultDashboardState(), ...props }
    const [dashState, dashStateDispatch] = useDashboardReducer(dashInitState)
    const [showEditWidgetModal, setShowEditWidgetModal] = useState(false)
    const [activeWidgetIndex, setActiveWidgetIndex] = useState(0)
    const [showDashSettingsModal, setShowDashSettingsModal] = useState(false)
    const [showWidgetAddModal, setShowWidgetAddModal] = useState(false)
    const [timerId, setTimerId] = useState(null)
    const vizPluginNames: string[] = useContext(VizPluginsRepoContext).getInstalledPluginNames()
    const [measTypes, setMeasTypes] = useState([] as { val: string, name: string }[])
    useEffect(() => {
        (async function () {
            const dataAdapters = (await loadDataAdapters()).map(n => ({ val: `adapter|${n.adapter_id}`, name: n.name }))
            const apiAdapters = Object.values(getApiAdaptersRegistry()).map(n => ({ val: `api|${n.api_id}`, name: n.name }))
            const dummyMeasOpt = { val: DummyMeasurement.typename, name: 'Random' }
            const eqMeasOpt = { val: EquationMeasurement.typename, name: 'Equation' }
            setMeasTypes([dummyMeasOpt, ...dataAdapters, ...apiAdapters, eqMeasOpt])
        })()
    }, [])

    const onLayoutChange = (currLayout: Layout[], allLayouts: Layouts): void => {
        dashStateDispatch(layoutChangeAction(currLayout, allLayouts))
    }

    const onBreakpointChange = (newBreakpoint: string, newCols: number) => {
        dashStateDispatch(setDashboardStateAction({ ...dashState, currentBreakpoint: newBreakpoint as IElectronDashboardState["currentBreakpoint"] }))
    }

    const onOpenDashboard = (ev: React.MouseEvent<HTMLButtonElement>) => {
        dashStateDispatch(openDashboardAction())
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

    const onDataAdaptersEditClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ipcRenderer.send('' + ChannelNames.openDataAdaptersEditor, 'ping')
    }

    const onVizPluginsEditClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ipcRenderer.send('' + ChannelNames.openVizPluginsEditor, 'ping')
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
        dashStateDispatch(fetchAllWidgetsDataAction())
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
        dashStateDispatch(fetchWidgetDataAction(wInd))
    }

    const onRemoveWidget = (wInd: number): void => {
        if (confirm('Delete this widget?')) {
            dashStateDispatch(deleteWidgetAction(wInd))
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
                    dashStateDispatch(fetchAllWidgetsDataAction())
                }
            }, timerPeriod)

            setTimerId(newTimerId)

            dashStateDispatch(fetchAllWidgetsDataAction())
        }
    }

    return <>
        <div className={"btn-group btn-group-sm"}>
            <button onClick={onOpenDashboard} className={"btn btn-outline-primary"}><FontAwesomeIcon icon={faFolderOpen} /> Open</button>
            <button onClick={onSaveDashboard} className={"btn btn-outline-primary"}><FontAwesomeIcon icon={faSave} /> Save</button>
            <button onClick={onOpenSettingsEditor} className={"btn btn-outline-primary"}><FontAwesomeIcon icon={faCog} /> Settings</button>
            <button onClick={onResetLayout} className={"btn btn-outline-primary"}><FontAwesomeIcon icon={faSyncAlt} /> Reset Layout</button>
            <button onClick={onCompactTypeChange} className={"btn btn-outline-primary"}>
                {dashState.gridConfig.compactType || "No"}{` Compaction`}
            </button>
            <button onClick={onDataAdaptersEditClick} className={"btn btn-outline-primary"}><FontAwesomeIcon icon={faDatabase} /> Data Adapters</button>
            <button onClick={onVizPluginsEditClick} className={"btn btn-outline-primary"}><FontAwesomeIcon icon={faChartBar} /> Visualization Plugins</button>
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

        <WidgetEditorModal
            show={showEditWidgetModal}
            setShow={setShowEditWidgetModal}
            measTypes={measTypes}
            MeasurementEditor={MeasurementEditor}
            value={dashState.widgetProps[activeWidgetIndex] == undefined ? null : dashState.widgetProps[activeWidgetIndex].config}
            onSubmit={onEditWidgetSubmit}
        />
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