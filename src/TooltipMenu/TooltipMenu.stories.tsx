import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { TooltipMenu, ITooltipMenuData } from './TooltipMenu'
import { Button } from '../Button'


const data: ITooltipMenuData[] = [
  { id: 1, value: 'Hospital 1' },
  { id: 2, value: 'Hospital 2' },
  { id: 3, value: 'Hospital 3' },
  { id: 4, value: 'Hospital 4' },
  { id: 5, value: 'Hospital 5' },
  { id: 6, value: 'Hospital 6' },
  { id: 7, value: 'Hospital 7' },
  { id: 8, value: 'Hospital 8' },
]

const actionData: ITooltipMenuData[] = [
  { id: 1, value: 'Item that does something', onSelect: () => console.log('Clicked action item')}
]

storiesOf('Components.TooltipMenu', module)
  .add('Various', () => {
    const ButtonWithMenu = (data: ITooltipMenuData[]) => {
      const [open, setOpen] = useState(true)
      const [utilityOpen, setUtilityOpen] = useState(false)
      const [search, setSearch] = useState('')

      const tooltip = 
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: '15px', left: '20px', minWidth: '250px' }}>
            <TooltipMenu
              data={data.filter(x =>  x.value.toLowerCase().includes(search.toLowerCase()))}
              open={open}
              onClickaway={() => setOpen(false)}
              onSelect={_ => {}}
              emptySearchText='No hospitals found...'
              onSearch={val => setSearch(val)}
              search={true}
              placeholder='Search...'
            />
          </div>
        </div>

      const utilityTooltip = 
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: '15px', left: '20px', minWidth: '250px' }}>
            <TooltipMenu
              data={actionData}
              open={utilityOpen}
              onClickaway={() => setUtilityOpen(false)}
              onSelect={_ => {}}
            />
          </div>
        </div>

      return (
        <React.Fragment>
          <div style={{ position: 'relative' }}>
            <Button variant='primary' onClick={() => setOpen(!open)}>Show Hospitals</Button>
            {tooltip}
          </div>
          <br></br>
          <div style={{ position: 'relative' }}>
            <Button variant='primary' onClick={() => setUtilityOpen(!utilityOpen)}>Options</Button>
            {utilityTooltip}
          </div>
        </React.Fragment>
      )
    }

    return (
      <>
        <h3>Display dynamically</h3>
        {ButtonWithMenu(data)}
      </>
    )
  })
