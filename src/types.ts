import { HTMLProps } from 'react'
import { FormControlProps } from 'react-bootstrap'
import { ReplaceProps, BsPrefixProps } from 'react-bootstrap/helpers'

type TFormControlEvent = ReplaceProps<React.ReactType<any>, BsPrefixProps<React.ReactType<any>> & FormControlProps>
type TExtendsHTMLElement<T> = Omit<HTMLProps<HTMLElement>, keyof T> & T

export {
  TFormControlEvent,
  TExtendsHTMLElement
}
