import { IHeaderItem } from '../../../types'

export interface IProps {
  cols: IHeaderItem[]
  selectAllCol?: boolean
  onSelectAll?: (checked: boolean) => void
}
