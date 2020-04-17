import { IDashboardProps } from "../type_defs/IDashboardProps";

export const getDashboardStyle = (props: IDashboardProps): React.CSSProperties => {
    return { backgroundColor: props.gridConfig.backgroundColor, minHeight: '100vh' }
}