import React from 'react'

import { Container, Row, Col } from '../Grid'
import './index.scss'

const Skeleton: React.FC = () => {
  return (
    <>
      <Row>
        <Col width={3} className='co-skeleton' />
        <Col width={1} className='co-skeleton-white'>
          <div className='co-skeleton-circle'></div>
        </Col>
        <Col width={6} className='co-skeleton-white' />
        <Col width={2} className='co-skeleton' />
      </Row>

      <Row>
        <Col width={12} className='co-skeleton-white' />
      </Row>

      <Row>
        <Col width={1} className='co-skeleton' />
        <Col width={1} className='co-skeleton' />
        <Col width={4} className='co-skeleton-white' />
        <Col width={2} className='co-skeleton co-skeleton-rounded' />
        <Col width={4} className='co-skeleton-white' />
      </Row>

      <Row>
        <Col width={3} className='co-skeleton' />
        <Col width={1} className='co-skeleton-white' />
        <Col width={2} className='co-skeleton' />
        <Col width={6} className='co-skeleton' />
      </Row>
    </>
  )
}

export {
  Skeleton
}
