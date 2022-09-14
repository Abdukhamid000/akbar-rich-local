import { DropDownArrowIcon } from '@constants/icons'
import React from 'react'
import { useState } from 'react'
import style from './style.module.css'

const ProductSelect = () => {
  const [isActive, setIsActive] = useState(false)
  console.log('child')

  return (
    <>
      <div
        onClick={setIsActive.bind(this, !isActive)}
        className={style.dropDown}
      >
        Категория{' '}
        <div style={{ transform: `rotate(${isActive ? '270deg' : '90deg'})` }}>
          <DropDownArrowIcon />
        </div>
        {isActive && (
          <ul className={style.dropMenu}>
            <li>Межкомнатные двери</li>
            <li>Окна</li>
            <li>Плинтус</li>
            <li>Обрешетки</li>
            <li>Мебельные створки</li>
            <li>Обшивочные изделия</li>
          </ul>
        )}
      </div>
      <div className={style.verticalLine} />
    </>
  )
}

export default function ProductFilter() {
  return (
    <div className={style.container}>
      {Array.from(Array(5).keys()).map((itm) => {
        return <ProductSelect key={itm} />
      })}
    </div>
  )
}
