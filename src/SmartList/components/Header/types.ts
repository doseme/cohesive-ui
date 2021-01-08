import { IHeaderItem } from '../../../types'

export interface IProps {
  cols: IHeaderItem[]
  className?: string
  selectAllCol?: boolean
  defaultSortDirection?: 'asc' | 'desc'
  defaultSortColumn?: string
  onSelectAll?: (checked: boolean) => void
}
