import React from 'react'
import { IDashboardState } from '../../type_defs/dashboard/IDashboardState';
import { ILayoutItem } from '../../type_defs/gridLayout/ILayoutItem';
import { IDashboardProps } from '../../type_defs/dashboard/IDashboardProps';

export const Dashboard: React.FC<IDashboardProps> = (props: IDashboardProps) => {
    const dashState: IDashboardState = {}
    const onLayoutChange = (currLayout: ILayoutItem[], allLayouts: { [key: string]: ILayoutItem }): void => { }

    return <></>
}