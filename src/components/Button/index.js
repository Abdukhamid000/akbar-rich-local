import React from 'react'
import classes from './button.module.css'

const Button = ({ text }) => {
  return (
    <div>
      <div className={classes.btn}>
        <p className={classes.btntext}>{text}</p>
        <span className={classes.BorderTopBottom}></span>
        <span className={classes.BorderLeftRight}></span>
      </div>
    </div>
  )
}

export default Button
