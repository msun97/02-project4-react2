import React from 'react'
import "@/styles/componnent.scss";

const Button = ({children, Bg}) => {
  return (
    <div className={`btn-component ${Bg}`}>{children}</div>
  )
}

export default Button