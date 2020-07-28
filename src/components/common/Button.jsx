import React from 'react'
import './Button.css'

export default (props) => {
  return (
    <button className={props.className}>{props.children}</button>
  )
}