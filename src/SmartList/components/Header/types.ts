import { IHeaderItem } from '../../../types'

export interface IProps {
  cols: IHeaderItem[]
  className?: string
  selectAllCol?: boolean
  onSelectAll?: (checked: boolean) => void
}
