import * as React from "react";
import placeholder from './placeholder.svg'

const Icon = (props: {
  name?: string
  className?: string
}) => {
  const { name, className } = props
  return <span className='inline-flex items-center'>
    <img alt={name} src={placeholder} className={className}/>
  </span>
}

export default Icon
