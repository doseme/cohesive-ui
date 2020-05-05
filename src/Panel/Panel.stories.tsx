import React from 'react'
import { storiesOf } from '@storybook/react'
import noop from 'lodash/noop'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col } from '../Grid'

import { Panel } from './Panel'
import { IconButton } from '../IconButton'


storiesOf('Components.Panel', module)
  .add('a panel', () => {
      const topSection = {
        id: 1,
        element: (
        <div className='d-flex justify-content-between'>
          <div>
            Some Patient
          </div>
          <div>
            <IconButton
              onClick={noop}
              size='30px'
              data-test='create-button'
            >
              <FontAwesomeIcon
                icon={faPlus}
              />
            </IconButton>
          </div>
        </div>
      )
    }

      const bottomSection = {
        id: 2,
        element: (
        <div>
          <ul>
            <li>Info 1</li>
            <li>Info 2</li>
            <li>Info 3</li>
            <li>Info 4</li>
          </ul>
        </div>
      )
    }

    return (
      <>
        <h3>With a title and info icon</h3>
        <Container>
          <Row>
            <Col width={4}>
              <Panel
                title='Quick View and Shortcuts'
                sections={[topSection, bottomSection]}
                info='Some interesting info'
              >
              </Panel>
            </Col>
          </Row>
        </Container>
        <br />

        <h3>Without a title</h3>
        <Container>
          <Row>
            <Col width={4}>
              <Panel
                sections={[topSection, bottomSection]}
              />
            </Col>
          </Row>
        </Container>
        <br />
      </>
    )
  })
