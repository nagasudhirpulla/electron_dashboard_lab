import { IDashboardState } from "../type_defs/IDashboardState";

export const getDashboardStyle = (props: IDashboardState): React.CSSProperties => {
    return { backgroundColor: props.gridConfig.backgroundColor, minHeight: '100vh' }
}