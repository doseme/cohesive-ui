export interface IListHashmap {
  [key: string]: {
    [col: string]: any
  }
}

export interface IJSXHashmap {
  [key: string]: JSX.Element
}

export interface IColumnName {
  keyName: string
  displayName: string
}

export interface IProps {
  data: IJSXHashmap | IListHashmap
  customHeader?: JSX.Element
  columnDisplay?: IColumnName[]
}
