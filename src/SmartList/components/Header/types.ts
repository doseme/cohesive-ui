interface IShapeItem {
  [columnName: string]: {
    attr: string
    size: number
  }
}

export interface IProps {
  shape: IShapeItem
}
