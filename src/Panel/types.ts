export interface ISection {
  id: number
  element: JSX.Element
}

export interface IPanelHeaderProps { 
  title?: string
  info?: string
}

export interface IPanelBodyProps {
  bodyClassName?: string
}

export interface IPanelProps {
  sections: ISection[]
  className?: string
}

export type TProps = IPanelProps & IPanelHeaderProps & IPanelBodyProps