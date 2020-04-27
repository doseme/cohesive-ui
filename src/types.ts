import { HTMLProps } from 'react'
import { FormControlProps } from 'react-bootstrap'
import { ReplaceProps, BsPrefixProps } from 'react-bootstrap/helpers'

export type TFormControlEvent = ReplaceProps<React.ReactType<any>, BsPrefixProps<React.ReactType<any>> & FormControlProps>
export type TExtendsHTMLElement<T> = Omit<HTMLProps<HTMLElement>, keyof T> & T

export interface IProps {
  data: IRowElement[]
  cols: IHeaderItem[]
  textIfEmpty?: string
  header?: boolean
  loading?: boolean
}

export interface IHeaderItem {
  name: string
  className?: string
  handleSort?: (column: string) => void
}

export interface IRowElement {
  id: number | string
  columns: IColumnElement[]
  onClick?: (event: React.MouseEvent) => any
  className?: string
}

export interface IColumnElement {
  name: string
  element?: JSX.Element
  text?: string
}
