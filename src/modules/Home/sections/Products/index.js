import React from 'react'
import Image from 'next/image'

import InteriorDoorImg from '/public/images/interiorDoor.png'
import SheatingImg from '/public/images/sheatingProducts.png'
import FurnitureDoorsImg from '/public/images/furnitureDoors.png'
import BattensImg from '/public/images/battens.png'
import PlinthImg from '/public/images/plinthImg.png'
import WindowImg from '/public/images/windowImg.png'

import style from './Products.module.css'

export default function Products() {
  return (
    <div className={style.productsContainer}>
      <div className={'containerBig'}>
        <div className={style.productsHeader}>
          <p className={style.productsHeaderTitle}>Зоголовок</p>
          <div>
            <div className={style.bottomLine}></div>
          </div>
        </div>
        <div className={style.firstProductGrid}>
          <div className={style.gridElement}>
            <Image src={InteriorDoorImg} loading="lazy" />
            <div className={style.imgTextContainer}>
              <p className={style.imgText}>Межкомнатные двери</p>
            </div>
          </div>
          <div className={style.gridElement}>
            <div className={style.gridElementImg}>
              <Image src={SheatingImg} loading="lazy" />
            </div>
            <div className={style.imgTextContainer}>
              <p className={style.imgText}>Обшивочные изделия</p>
            </div>
          </div>
        </div>
        <div className={style.secondProductGrid}>
          <div className={style.gridElement}>
            <div className={style.gridElementImg}>
              <Image src={FurnitureDoorsImg} loading="lazy" />
            </div>
            <div className={style.imgTextContainer}>
              <p className={style.imgText}>Мебельные створки</p>
            </div>
          </div>
          <div className={style.gridElement}>
            <div className={style.gridElementImg}>
              <Image src={BattensImg} loading="lazy" />
            </div>
            <div className={style.imgTextContainer}>
              <p className={style.imgText}>Обрешетки</p>
            </div>
          </div>
        </div>
        <div className={style.thirdProductGrid}>
          <div className={style.gridElement}>
            <div className={style.gridElementImg}>
              <Image src={PlinthImg} loading="lazy" />
            </div>
            <div className={style.imgTextContainer}>
              <p className={style.imgText}>Плинтус</p>
            </div>
          </div>
          <div className={style.gridElement}>
            <div className={style.gridElementImg}>
              <Image src={WindowImg} loading="lazy" />
            </div>
            <div className={style.imgTextContainer}>
              <p className={style.imgText}>Окна</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
