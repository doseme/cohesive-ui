import { FormControlProps } from 'react-bootstrap'
import { ReplaceProps, BsPrefixProps } from 'react-bootstrap/helpers'

type TFormControlEvent = ReplaceProps<React.ReactType<any>, BsPrefixProps<React.ReactType<any>> & FormControlProps>

export {
  TFormControlEvent
}
