import { IHeaderItem } from '../../../types'

export interface IProps {
  cols: IHeaderItem[]
  onSort?: (colIndex: number, ascending: boolean) => void
  selectAllCol?: boolean
  onSelectAll?: (checked: boolean) => void
}
