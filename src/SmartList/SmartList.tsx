import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Header } from './components/Header'
import { ListItem } from './components/ListItem'
import { IRowElement, IHeaderItem } from '../types'
import './index.scss'

export interface IProps {
  data: IRowElement[]
  cols: IHeaderItem[]
  textIfEmpty?: string
  header?: boolean
  loading?: boolean
}

const SmartList: React.FC<IProps> = ({ data, cols, textIfEmpty, loading, header = true }) => {
  const headerContent = (
    <Header
      cols={cols}
    />
  )

  const listContent = data.reduce<JSX.Element[]>((acc, row) => {
    acc = acc.concat(
      <ListItem
        onClick={row.onClick}
        key={row.id}
        columns={row.columns}
        className={row.className}
      />
    )

    return acc
  }, [])

  const displayContent = (): JSX.Element | null => {
    if (loading) {
      return <div>
        <Row>
          <Col className='list-placeholder'></Col>
        </Row>
      </div>
    }

    if (data.length) {
      return <div>{listContent}</div>
    }

    if (textIfEmpty) {
      return <div>
        <Row className='list-row align-items-center'>
          <Col>
            {textIfEmpty} 
          </Col>
        </Row>
      </div>
    }

    return null
  }

  return (
    <>
      {header && headerContent}
      {displayContent()}
    </>
  )
}

export {
  SmartList,
}
