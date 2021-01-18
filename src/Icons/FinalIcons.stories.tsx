
import React from 'react'
import { storiesOf } from '@storybook/react'

import { EditIconButton } from './Final/Edit'
import { DeleteIconButton } from './Final/Delete'
import { ArchiveIconButton } from './Final/Archive'
import { UnarchiveIconButton } from './Final/Unarchive'
import './index.scss'
import { HollowCircle } from './HollowCircle'
import { Schedule } from './Schedule'
import { Archive } from './Archive'
import { ChevronIconButton } from './Final/Chevron'
import { SolidCircle } from './SolidCircle'
import { Unarchive } from './Unarchive'
import { Export } from './Export'

const stories = storiesOf('Icon Buttons', module)

stories.add('Icons buttons', () => {
  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <td style={{ width: '150px' }}>Disabled </td>
            <td style={{ width: '150px' }}>Active + hover </td>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>
              <EditIconButton disabled={true} />
            </td>
            <td>
              <EditIconButton />
            </td>
          </tr>

          <tr>
            <td>
              <DeleteIconButton disabled={true} />
            </td>
            <td>
              <DeleteIconButton />
            </td>
          </tr>


          <tr>
            <td>
              <ArchiveIconButton disabled={true} />
            </td>
            <td>
              <ArchiveIconButton />
            </td>
          </tr>


          <tr>
            <td>
              <UnarchiveIconButton disabled={true} />
            </td>
            <td>
              <UnarchiveIconButton />
            </td>
          </tr>


          <tr>
            <td>
              <ChevronIconButton disabled={true} />
            </td>
            <td>
              <ChevronIconButton />
            </td>
          </tr>

          <tr>
            <td>
              <HollowCircle stroke='red' />
            </td>
            <td>
            </td>
          </tr>

          <tr>
            <td>
              <Unarchive background='red' />
            </td>
            <td>
            </td>
          </tr>

          <tr>
            <td>
              <Archive background='red' />
            </td>
            <td>
            </td>
          </tr>


          <tr>
            <td>
              <SolidCircle stroke='green' />
            </td>
            <td>
            </td>
          </tr>

          <tr>
            <td>
              <Schedule stroke='blue' />
            </td>
            <td>
            </td>
          </tr>

          <tr>
            <td>
              <Export />
            </td>
            <td>
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  )
})
