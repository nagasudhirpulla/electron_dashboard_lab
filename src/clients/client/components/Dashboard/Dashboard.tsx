import React from 'react'
import { ILayoutItem } from '../../type_defs/gridLayout/ILayoutItem';
import { IDashboardProps } from '../../type_defs/dashboard/IDashboardProps';
import { getDashboardStyle } from './queries/getDashboardStyle';
import { useDashboardReducer } from './reducers/dashboardReducer';
import { getDefaultDashboardState } from './queries/getDefaultDashboardState';
import { IDashboardState } from '../../type_defs/dashboard/IDashboardState';
import { openDashboardAction } from './actions/OpenDashboardAction';

export const Dashboard: React.FC<IDashboardProps> = (props: IDashboardProps) => {
    const dashInitState: IDashboardState = { ...getDefaultDashboardState(), ...props }
    let [dashState, dashStateDispatch] = useDashboardReducer(dashInitState);
    const onLayoutChange = (currLayout: ILayoutItem[], allLayouts: { [key: string]: ILayoutItem }): void => {

    }

    const onOpenDashboard = (ev: React.MouseEvent<HTMLButtonElement>) => {
        dashStateDispatch(openDashboardAction())
    }

    const onSaveDashboard = (ev: React.MouseEvent<HTMLButtonElement>) => {
        dashStateDispatch(openDashboardAction())
    }

    return <div style={getDashboardStyle(dashState)}>
        <button onClick={onOpenDashboard}>Open Dashboard</button>
        <button onClick={onSaveDashboard}>Save Dashboard</button>
        <button onClick={onOpenPrefsEditor}>Settings</button>
        <button onClick={onResetLayout}>Reset Layout</button>
    </div>
}