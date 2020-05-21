import React from 'react'
import { storiesOf } from '@storybook/react'

import { Row, Col, Container } from './'

const style = {
  border: '1px solid black',
  marginBottom: '5px'
}

storiesOf('Layout.Grid', module)
  .add('Basic grid', () => {
    return (
      <div>
        <h4>Notes</h4>
        <ul>
          <li>- You can have col from 1 - 12</li>
          <li>- No max width by default</li>
          <li>- Apply a <code>`fluid={true}`</code> props for a no max width. It will center itself automatically.</li>
        </ul>

        <br />
        <h4>Examples</h4>
        <Container>
          <code style={{ whiteSpace: 'pre' }}>
{`
<Container style={style} fluid={true}>
  <Row>
    <Col width={6}>Column width-6</Col>
    <Col width={6}>Column width-6</Col>
  </Row>
</Container>
`}
          </code>
        </Container>

        <Container style={style} fluid={true}>
          <Row>
            <Col width={6}>Column width-6 with max width</Col>
            <Col width={6}>Column width-6 with max width</Col>
          </Row>
        </Container>

        <Container>
          <code style={{ whiteSpace: 'pre' }}>
{`
<Container style={style}>
  <Row>
    <Col width={6}>Column width-6</Col>
    <Col width={6}>Column width-6</Col>
  </Row>
</Container>
`}
          </code>
        </Container>

        <Container style={style}>
          <Row>
            <Col width={6}>Column width-6</Col>
            <Col width={6}>Column width-6</Col>
          </Row>
        </Container>


          <code style={{ whiteSpace: 'pre' }}>
{`
<Container style={style}>
  <Row>
    <Col width={4}>Column width-4</Col>
    <Col width={4}>Column width-4</Col>
  </Row>
</Container>
`}
          </code>
        <Container style={style}>
          <Row>
            <Col width={4}>Column width-4</Col>
            <Col width={4}>Column width-4</Col>
            <Col width={4}>Column width-4</Col>
          </Row>
        </Container>
      </div>
    )
  })
