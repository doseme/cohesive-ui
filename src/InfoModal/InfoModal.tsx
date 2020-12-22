import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { Container, Row, Col } from '../Grid'
import { Button } from '../Button'

import './index.scss'

interface IProps {
  title: string
  message: string | JSX.Element
  linkHref: string
  linkLabel: string
  onCancel?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any
}

const InfoModal: React.FC<IProps> = (props) => {
  return (
    <div data-testid='info-modal' className='info-modal'>
      <Container>
        <Row>
          <Col width={8}>
            <div className='modal-title'>{props.title}</div>
          </Col>
          <Col width={4}>
            <button
              className='dismiss-button float-right'
              onClick={props.onCancel}
            >
              <FontAwesomeIcon
                icon={faTimes}
              />
            </button>
          </Col>
        </Row>

        <Row className='message-box'>
          {props.message}
        </Row>

        <Row className='buttons'>
          <Col>
            <div className='d-flex justify-content-end'>
              <a className='info-link' href={props.linkHref} target='_blank'>
                <Button
                  variant='info'
                  className='info-button'
                >
                  {props.linkLabel} &#8599;
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export {
  InfoModal
}
