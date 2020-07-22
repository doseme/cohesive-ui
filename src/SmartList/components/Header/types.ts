import { IHeaderItem } from '../../../types'

export interface IProps {
  cols: IHeaderItem[]
  className?: string
  selectAllCol?: boolean
  defaultSort?: 'asc' | 'desc'
  onSelectAll?: (checked: boolean) => void
}
