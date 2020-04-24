import { IHeaderItem } from '../../SmartList'

export interface IProps {
  cols: IHeaderItem[]
  selectAllCol?: boolean
  onSelectAll?: (checked: boolean) => void
}
