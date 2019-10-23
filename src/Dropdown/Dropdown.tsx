import React from 'react'
import { Dropdown as BSDropdown, DropdownProps } from 'react-bootstrap'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'

import './index.scss'

class Dropdown extends React.PureComponent<DropdownProps> {
  static Toggle: typeof DropdownToggle
  static Menu: typeof DropdownMenu
  static Item: typeof DropdownItem

  public render(): JSX.Element {
    return (
      <BSDropdown {...this.props}>
        {this.props.children}
      </BSDropdown>
    )
  }
}

export {
  Dropdown
}
