import React from 'react'

import './index.scss'

interface IProps {
  show: boolean
  onHide?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => any
}

const Modal: React.FC<IProps> = (props) => {
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      (e.nativeEvent.target as HTMLDivElement).classList.contains('overlay') &&
      props.onHide
    ) {
      props.onHide(e)
    }
  }

  if (!props.show) {
    return <></>
  }

  return (
    <div
      className='overlay regular-overlay'
      data-testid='overlay'
      onClick={handleClose}
    >
      <div id='modal-body'>
        {props.children}
      </div>
    </div>
  )
}

export {
  Modal
}
