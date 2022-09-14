import React, { useState } from 'react'
import Image from 'next/image'
import style from './style.module.css'
import Slider from 'react-slick'

export default function ProductView({ imageUrl }) {
  const [nav1, setNav1] = useState()
  const [active, setActive] = useState(0)

  const colorBtns = [
    {
      id: 1,
      index: 0,
      color: 'red',
      className: style.bgRedClr,
    },
    {
      id: 2,
      index: 1,
      color: 'blue',
      className: style.bgBlueClr,
    },
    {
      id: 3,
      index: 2,
      color: 'grey',
      className: style.bgGreyClr,
    },
  ]

  const handleGoTo = (idx) => {
    nav1.slickGoTo(idx)
    setActive(idx)
  }

  const colorPick = () => {
    return (
      <div className={style.colorCheck}>
        {colorBtns.map((item) => (
          <div
            key={item.id}
            className={`${item.className} ${
              item.index === active && style.active
            }`}
            onClick={() => handleGoTo(item.index)}
          />
        ))}
      </div>
    )
  }

  return (
    <Slider ref={(slider1) => setNav1(slider1)} style={{ overflow: 'hidden' }}>
      <div className={style.product}>
        <div className={style.image}>
          <Image
            src={imageUrl[active]}
            layout="fill"
            objectFit="contain"
            alt="product photo"
          />
          <div className={style.overlay}>Новая коллекция</div>
        </div>
        <div className={style.body}>
          <h2>№ 161 Классик</h2>
          <p>Американский орех</p>
          {colorPick()}
        </div>
      </div>
    </Slider>
  )
}
