import React from 'react'
import classnames from 'classnames'

import { ListButton } from '../ListButton'
import { Unarchive, Archive, Trash, Edit } from '../Icons'
import './index.scss'

export type TActionButtonType = 'archive' | 'unarchive' | 'delete' | 'edit'

interface IActionButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  actionType: TActionButtonType
  disabled?: boolean
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
          {capitalize(props.actionType)}
        </div>
      </div>
    </ListButton>
  )
}
