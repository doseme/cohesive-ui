export interface ISection {
  id: number
  element: JSX.Element
}

export interface IProps {
  title?: string
  className?: string
  bodyClassName?: string
  sections: ISection[]
  info?: string
}
