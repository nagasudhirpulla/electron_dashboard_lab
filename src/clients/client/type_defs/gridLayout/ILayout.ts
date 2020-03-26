export interface ILayoutItem {
    x: number,
    y: number,
    w: number,
    h: number,
    i: string,
    static: boolean
}

export interface ILayout extends Array<ILayoutItem> { }