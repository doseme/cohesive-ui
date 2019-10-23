import React from 'react'
import { storiesOf } from '@storybook/react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { SummaryPanel } from './SummaryPanel'

storiesOf('SummaryPanel', module)
  .add('A single panel', () => {
    return (
      <Container>
        <Row>
          <Col sm={3}>
            <br />
            <SummaryPanel
              stat={465}
              increaseIsPositive={false}
              percent={-10}
              panelTitle='Active Patients'
            />
          </Col>
        </Row>
      </Container>
    )
  })
