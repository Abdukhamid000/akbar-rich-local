import { DropDownArrowIcon } from '@constants/icons'
import React, { useState } from 'react'
import style from './style.module.css'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className={style.accordionItem}>
      <div
        className={style.accordionTitle}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
        <div style={{ transform: `rotate(${isActive ? '90deg' : 0})` }}>
          <DropDownArrowIcon />
        </div>
      </div>
      {isActive && <div className={style.accordionContent}>{content}</div>}
    </div>
  )
}

export default Accordion
