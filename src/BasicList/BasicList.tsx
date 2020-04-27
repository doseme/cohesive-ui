import React from 'react'
import { Row, Col } from 'react-bootstrap'

import { IProps } from '../types'
import { ListItem } from './components/ListItem'
import { Header } from './components/Header'

import './index.scss'


const BasicList: React.FC<IProps> = (props) => {
  const displayContent = (): JSX.Element | null => {
    if (props.loading) {
      return <div>
        <Row>
          <Col className='list-placeholder'></Col>
        </Row>
      </div>
    }

    const listContent = props.data.reduce<JSX.Element[]>((acc, row) => {
      acc = acc.concat(
        <ListItem
          key={row.id}
          columns={row.columns}
          className={row.className}
        />
      )

      return acc
    }, [])

    if (props.data.length) {
      return <div>{listContent}</div>
    }

    if (props.textIfEmpty) {
      return <div>
        <Row className='list-row align-items-center'>
          <Col>
            {props.textIfEmpty}
          </Col>
        </Row>
      </div>
    }

    return null
  }

  const headerContent = (
    <Header
      cols={props.cols}
    />
  )

  return (
    <div className='basic-list'>
      {props.header && headerContent}
      {displayContent()}
    </div>
  )
}

export {
  BasicList
}
