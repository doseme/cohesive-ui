export interface IProps {
  data: IRowElement[]
  cols: IHeaderItem[]
}

export interface IHeaderItem {
  name: string
  className?: string
  handleSort?: (column: string) => void
}

export interface IColumnElement {
  name: string
  element: JSX.Element
}

export interface IRowElement {
  id: number | string
  columns: IColumnElement[]
}

