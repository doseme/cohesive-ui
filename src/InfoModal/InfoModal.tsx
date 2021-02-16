import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { Container, Row, Col } from '../Grid'
import { Button } from '../Button'

import './index.scss'

interface IProps {
  title: string
  message: string | JSX.Element
  linkComponent?: JSX.Element
  linkHref?: string
  linkDisabled?: boolean
  linkLabel?: string
  onDismiss?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any
}

const InfoModal: React.FC<IProps> = (props) => {
  const linkContent = (): JSX.Element | null => {
    if (props.linkComponent) {
      return React.cloneElement(props.linkComponent)
    }

    if (props.linkHref && props.linkLabel) {
      return (
        <a className='info-link' href={props.linkHref} target='_blank'>
          <Button
            variant='info'
            className='info-button'
            disabled={!!props.linkDisabled}
          >
            {props.linkLabel}
          </Button>
        </a>
      )
    }

    return null
  }

  const link = (): JSX.Element | null => {
    const content = linkContent()

    if (content) {
      return (
        <Row className='buttons'>
          <Col>
            <div className='d-flex justify-content-end'>
              {content}
            </div>
          </Col>
        </Row>
      )
    }

    return null
  }

  const dismissButton = (): JSX.Element | null => {
    if (props.onDismiss) {
      return (
        <Col width={4}>
          <button
            className='dismiss-button float-right'
            onClick={props.onDismiss}
          >
            <FontAwesomeIcon
              icon={faTimes}
            />
          </button>
        </Col>
      )
    }

    return null
  }

  return (
    <div data-testid='info-modal' className='info-modal'>
      <Container>
        <Row>
          <Col width={8}>
            <div className='modal-title'>{props.title}</div>
          </Col>
          {dismissButton()}
        </Row>

        <Row className='message-box'>
          {props.message}
        </Row>

        {link()}
      </Container>
    </div>
  )
}

export {
  InfoModal
}
