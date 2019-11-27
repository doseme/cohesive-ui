import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export interface IColumnName {
  keyName: string
  displayName: string
}

export interface IRowData extends Object {
  id: number | string
  [k: string]: any
}

export interface IProps {
  data: IRowData[]
  columnDisplay?: IColumnName[]
}

const List: React.FC<IProps> = ({ data, columnDisplay }) => {

  const headers = Object.keys(data[0])

  const capitalize = (str: string): string => {
    if (!str.length) {
      return ''
    }

    return str[0].toUpperCase() + str.slice(1)
  }

  const header = (
    <Row>
      {
        headers.map(x =>
          <Col key={x}>
            {capitalize(x)}
          </Col>
        )
      }
    </Row>
  )

  const content = (
    <>
      {
        data.map(row => 
          <Row key={row.id}>
            {
              headers.map(x => 
                <Col key={x}>
                  {row[x]}
                </Col>
              ) 
            }
          </Row>
        )
      }
    </>
  )

  return (
    <>
      {header}
      {content}
    </>
  )
}


export {
  List
}