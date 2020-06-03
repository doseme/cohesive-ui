import React from 'react'

import { TrashFill } from '../Icons/TrashFill'
import { Container, Row, Col } from '../Grid'
import { Button } from '../Button'
import './index.scss'

interface IProps {
  entityType: string
  entityName?: string
  onCancel: () => any
  onConfirm: () => any
}

const capitalizeString = (str: string) => {
  return str.replace(/^\w/, c => c.toUpperCase())
}

const ConfirmModal: React.FC<IProps> = (props) => {
  return (
    <div data-testid='confirm-modal' className='confirm-modal'>
      <Container>
        <Row>

          <Col width={2}>
            <TrashFill height={50} width={50} />
          </Col>

          <Col>
            <h4 className='co-h4 pb-2'>Delete {capitalizeString(props.entityType)}</h4>
            <div className='confirm-subtitle'>{props.entityName || ''}</div>
            <div>
              The selected {props.entityType}(s) will be permanently deleted from the system.<br />
              This action cannot be undone.
            </div>
          </Col>

          <Col width={2}>
          </Col>
        </Row>

        <Row className='buttons'>
          <Col>
            <div className='d-flex justify-content-end'>
              <Button
                data-testid='confirm-modal-cancel'
                variant='light'
                className='mr-3'
                onClick={props.onCancel}
              >
                Cancel
              </Button>
              <Button
                data-testid='confirm-modal-confirm'
                variant='danger'
                onClick={props.onConfirm}
              >
                Erase this {(props.entityType)}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export {
  ConfirmModal
}
