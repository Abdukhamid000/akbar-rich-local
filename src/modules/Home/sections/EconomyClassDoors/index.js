import React from 'react'
import Image from 'next/image'

import CollectionDoorsImg from 'public/images/homeCollectionDoors.png'
import HomeYelloLinesImg from 'public/images/homeYellowLines.png'

import style from './economyClass.module.css'

export default function EconomyClassDoors() {
  return (
    <div className={'containerBig'}>
      <div className={style.economyClassContainer}>
        <div className={style.economyClassGrid}>
          <div className={style.economyClassFirstGrid} />
          <div className={style.economyClassSecondGrid}>
            <Image src={HomeYelloLinesImg} alt="" loading="lazy" />
          </div>
        </div>
        <div className={style.economyClassCard}>
          <p className={style.economyClassCardTitle}>
            Больше дверей эконом класса
          </p>
          <p className={style.economyClassCardDescription}>
            Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
            non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis{' '}
          </p>
          <a href="#" className={style.economyClassCardLink}>
            <span>Посмотреть</span>
          </a>
          <div className={style.economyClassCardBorderLeft}></div>
        </div>
        <div className={style.economyClassDoors}>
          <div className={style.economyClassDoorsImg}>
            <Image src={CollectionDoorsImg} alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  )
}
