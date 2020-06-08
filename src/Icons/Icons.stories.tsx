import React from 'react'
import { storiesOf } from '@storybook/react'

// fuckton of imports, wonder if there is an easier way
import { BackArrow } from './BackArrow'
import { DoseMe } from './DoseMe'
import { BackArrowHover } from './BackArrowHover'
import { Close } from './Close'
import { CloseActive } from './CloseActive'
import { CloseBare } from './CloseBare'
import { CloseModal } from './CloseModal'
import { CollapseArrow } from './CollapseArrow'
import { CollapseArrowNavy } from './CollapseArrowNavy'
import { CollapseHoverArrow } from './CollapseHover'
import { Edit } from './Edit'
import { EditFill } from './EditFill'
import { EditHover } from './EditHover'
import { GoToIcon } from './GoToIcon'
import { GoToIconHover } from './GoToIconHover'
import { LimitActive } from './LimitActive'
import { LimitInactive } from './LimitInactive'
import { Logout } from './Logout'
import { LogoutHover } from './LogoutHover'
import { Nav } from './Nav'
import { NavHover } from './NavHover'
import { Padlock } from './Padlock'
import { Plus } from './Plus'
import { PlusInactive } from './PlusInactive'
import { PlusPlain } from './PlusPlain'
import { Search } from './Search'
import { SearchInactive } from './SearchInactive'
import { Tick } from './Tick'
import { TickActive } from './TickActive'
import { TickFill } from './TickFill'
import { TickInactive } from './TickInactive'
import { TickOutline } from './TickOutline'
import { Trash } from './Trash'
import { TrashFill } from './TrashFill'
import { TrashHover } from './TrashHover'

const stories = storiesOf('Components.Icons', module)
import './index.scss'

stories.add(
      'JSX',
      () =>
        <div className='d-flex flex-column' style={{ width: '300px' }}>
          <div className='d-flex justify-content-between'>
            <div>DoseMe</div>
            <DoseMe />
          </div>

          <div className='d-flex justify-content-between'>
            <div>CollapseArrowNavy</div>
            <CollapseArrowNavy />
          </div>

          <div className='d-flex justify-content-between'>
            <div>BackArrowHover</div>
            <BackArrowHover />
          </div>
          <div className='d-flex justify-content-between'>
            <div>BackArrow</div>
            <BackArrow />
          </div>
          <div className='d-flex justify-content-between'>
            <div>Close</div>
            <Close />
          </div>
          <div className='d-flex justify-content-between'>
            <div>CloseActive</div>
            <CloseActive />
          </div>
          <div className='d-flex justify-content-between'>
            <div>CloseBare</div>
            <CloseBare />
          </div>
          <div className='d-flex justify-content-between'>
            <div>CloseModal</div>
            <CloseModal />
          </div>
          <div className='d-flex justify-content-between'>
            <div>CollapseHoverArrow</div>
            <CollapseHoverArrow />
          </div>
          <div className='d-flex justify-content-between'>
            <div>CollapseArrow</div>
            <CollapseArrow />
          </div>
          <div className='d-flex justify-content-between'>
            <div>Edit</div>
            <Edit />
          </div>
          <div className='d-flex justify-content-between'>
            <div>EditFill</div>
            <EditFill />
          </div>
          <div className='d-flex justify-content-between'>
            <div>EditHover</div>
            <EditHover />
          </div>
          <div className='d-flex justify-content-between'>
            <div>GoToIcon</div>
            <GoToIcon />
          </div>
          <div className='d-flex justify-content-between'>
            <div>GoToIconHover</div>
            <GoToIconHover />
          </div>
          <div className='d-flex justify-content-between'>
            <div>LimitActive</div>
            <LimitActive />
          </div>
          <div className='d-flex justify-content-between'>
            <div>LimitInactive</div>
            <LimitInactive />
          </div>
          <div className='d-flex justify-content-between'>
            <div>Logout</div>
            <Logout />
          </div>
          <div className='d-flex justify-content-between'>
            <div>LogoutHover</div>
            <LogoutHover />
          </div>
          <div className='d-flex justify-content-between'>
            <div>Nav</div>
            <Nav />
          </div>
          <div className='d-flex justify-content-between'>
            <div>NavHover</div>
            <NavHover />
          </div>
          <div className='d-flex justify-content-between'>
            <div>Padlock</div>
            <Padlock />
          </div>
          <div className='d-flex justify-content-between'>
            <div>Plus</div>
            <Plus />
          </div>
          <div className='d-flex justify-content-between'>
            <div>PlusInactive</div>
            <PlusInactive />
          </div>
          <div className='d-flex justify-content-between'>
            <div>PlusPlain</div>
            <PlusPlain />
          </div>
          <div className='d-flex justify-content-between'>
            <div>Search</div>
            <Search />
          </div>
          <div className='d-flex justify-content-between'>
            <div>SearchInactive</div>
            <SearchInactive />
          </div>
          <div className='d-flex justify-content-between'>
            <div>Tick</div>
            <Tick />
          </div>
          <div className='d-flex justify-content-between'>
            <div>TickActive</div>
            <TickActive />
          </div>
          <div className='d-flex justify-content-between'>
            <div>TickFill</div>
            <TickFill />
          </div>
          <div className='d-flex justify-content-between'>
            <div>TickInactive</div>
            <TickInactive />
          </div>
          <div className='d-flex justify-content-between'>
            <div>TickOutline</div>
            <TickOutline />
          </div>
          <div className='d-flex justify-content-between'>
            <div>Trash</div>
            <Trash />
          </div>
          <div className='d-flex justify-content-between'>
            <div>TrashFill</div>
            <TrashFill />
          </div>
          <div className='d-flex justify-content-between'>
            <div>TrashHover</div>
            <TrashHover />
          </div>
        </div>
)
