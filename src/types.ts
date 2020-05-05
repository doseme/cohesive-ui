import { HTMLProps } from 'react'
import { FormControlProps } from 'react-bootstrap'
import { ReplaceProps, BsPrefixProps } from 'react-bootstrap/helpers'

export type TFormControlEvent = ReplaceProps<React.ReactType<any>, BsPrefixProps<React.ReactType<any>> & FormControlProps>
export type TExtendsHTMLElement<T> = Omit<HTMLProps<HTMLElement>, keyof T> & T

// If displayName is falsy, name will be used for the column title
// EXCEPT in the case of an empty string, which will show a blank column title.
// Implemented this way for backward compatibility with pre 0.9.0
export interface IHeaderItem {
  name: string
  displayName?: string
  className?: string
  sortable?: boolean
  width?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  handleSort?: (column: string) => void
}

export interface IColumnElement {
  name: string
  element?: JSX.Element
  text?: string
}

export interface IRowElement {
  id: number | string
  columns: IColumnElement[]
  onClick?: (event: React.MouseEvent) => any
  className?: string
  disabled?: boolean
}

export interface ISelectedRows {
  [id: string]: boolean
}
