import React from 'react'

import './index.scss'

export interface IToggleOption {
  id: string
  value: string
  label: string
  testid?: string
  element?: JSX.Element
}

type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
interface IProps extends React.HTMLAttributes<HTMLElement> {
  selected: string
  name: string
  options: IToggleOption[]
}
export type TToggleProps = Overwrite<IProps, {
  onChange: (option: IToggleOption) => any
}>

const Toggle: React.FC<TToggleProps> = (props): JSX.Element => {
  const handleChange = (event: React.FormEvent<HTMLDivElement>) => {
    const selectedOption = props.options.find(x => x.id === event.currentTarget.id)!
    props.onChange(selectedOption)
  }

  const radioButtons: JSX.Element[] = props.options.map(x =>
    <label 
      htmlFor={x.id}
      key={x.id}
      className={x.id === props.selected ? 'co-toggle-label co-toggle-label-selected' : 'co-toggle-label'}
    >
      {x.element || x.label}
      <input 
        type='radio' 
        onChange={handleChange}
        name={props.name}
        checked={x.value === props.selected}
        id={x.id}
        value={x.value}
        data-testid={x.testid}
      />
    </label>
  )

  const className = `co-toggle-group ${props.className}`
  return (
    <div className={className} id={props.id} style={props.style}>
      {radioButtons}
    </div>
  )
}


export { Toggle }
