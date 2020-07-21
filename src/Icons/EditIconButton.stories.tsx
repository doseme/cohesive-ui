
import React from 'react'
import { storiesOf } from '@storybook/react'

import { EditIconButton } from './Final/Edit/EditIconButton'
import { DeleteIconButton } from './Final/Delete/DeleteIconButton'
import { ArchiveIconButton } from './Final/Archive/ArchiveIconButton'
import { UnarchiveIconButton } from './Final/Unarchive/UnarchiveIconButton'
import './index.scss'

const stories = storiesOf('EditIconButton', module)

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

        </tbody>
      </table>
    </React.Fragment>
  )
})
