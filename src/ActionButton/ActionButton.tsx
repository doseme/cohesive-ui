import React from 'react'
import classnames from 'classnames'

import { ListButton } from '../ListButton'
import { Unarchive, Archive, Trash, Edit, Import } from '../Icons'
import './index.scss'
import { Open } from '../Icons/Open'

export type TActionButtonType = 'archive' | 'unarchive' | 'delete' | 'edit' | 'import' | 'open'

interface IActionButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  actionType: TActionButtonType
  disabled?: boolean
  customLabel?: string
}

const capitalize = (str: string) => {
  return str[0].toUpperCase() + str.slice(1)
}

export const ActionButton: React.FC<IActionButtonProps> = props => {
  let icon: JSX.Element
  if (props.actionType === 'archive') {
    icon = <Archive />
  }
  if (props.actionType === 'unarchive') {
    icon = <Unarchive />
  }
  if (props.actionType === 'delete') {
    icon = <Trash />
  }
  if (props.actionType === 'edit') {
    icon = <Edit />
  }
  if (props.actionType === 'import') {
    icon = <Import />
  }
  if (props.actionType === 'open') {
    icon = <Open />
  }

  const { actionType, ...rest } = props
  return (
    <ListButton
      {...rest}
      className={classnames(
        'co-action-button', 
        `co-action-${props.actionType}-button`, {
        'co-action-button-disabled': props.disabled,
        [`co-action-${props.actionType}-button-active`]: !props.disabled
      })}
    >
      <div className='d-flex align-items-center'>
        {icon!}
        <div className={`co-action-${props.actionType}-text`}>
          {props.customLabel || capitalize(props.actionType)}
        </div>
      </div>
    </ListButton>
  )
}
