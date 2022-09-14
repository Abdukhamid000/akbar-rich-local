import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'

import ProductView from '@components/ProductView/index'
import Button from '@components/Button/index'

import DoorCollectionImg1 from 'public/images/doorCollectionImg1.png'
import DoorCollectionImg2 from 'public/images/doorCollectionImg2.png'
import DoorCollectionImg3 from 'public/images/doorCollectionImg3.png'
import DoorCollectionImg4 from 'public/images/doorCollectionImg4.png'
import DoorCollectionImg5 from 'public/images/doorCollectionImg5.png'
import BottomMaskImg from 'public/images/maskImg.png'

import style from './collections.module.css'

export default function Collections() {
  return (
    <div className={'containerBig'}>
      <div className={style.collectionsContainer}>
        <div className={style.collectionsFlexContainer}>
          <Fade bottom delay={400}>
            <p className={style.collectionsFlexTitle}>
              Новая коллекция дверей премиум класса
            </p>
            <p className={style.collectionsFlexDescription}>
              Exercitation veniam consequat sunt nostrud amet.Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis{' '}
            </p>
            <a className={style.collectionsButton}>
              <Link href="/contact">
                <span className={style.collectionsButtonSpan}>
                  Связаться с нами
                </span>
              </Link>
            </a>
          </Fade>
        </div>
        <div className={style.collectionDoorContainer}>
          <div className={`${style.DoorCollectionImg} ${style.doorImg5}`}>
            <Image src={DoorCollectionImg5} alt="" />
          </div>
          <div className={`${style.DoorCollectionImg} ${style.doorImg4}`}>
            <Image src={DoorCollectionImg4} alt="" />
          </div>
          <div className={`${style.DoorCollectionImg} ${style.doorImg3}`}>
            <Image src={DoorCollectionImg3} alt="" />
          </div>
          <div className={`${style.DoorCollectionImg} ${style.doorImg4}`}>
            <Image src={DoorCollectionImg2} alt="" />
          </div>
          <div className={`${style.DoorCollectionImg} ${style.doorImg5}`}>
            <Image src={DoorCollectionImg1} alt="" />
          </div>
          <div className={style.doorsCollectionBottomImg}>
            <Image src={BottomMaskImg} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <p className={style.collectionsDoorTitle}>Зоголовок</p>
        <div className={`${style.doorCollectionRow} row product`}>
          {Array.from(Array(3).keys()).map((itm) => {
            return (
              <div key={itm} className="col-12 col-md-6 col-lg-4">
                <ProductView
                  imageUrl={[
                    '/images/redDoorImg.png',
                    '/images/whiteDoorImg.png',
                    '/images/door.png',
                  ]}
                />
              </div>
            )
          })}
        </div>{' '}
        <Button text="Посмотреть все" />
      </div>
    </div>
  )
}
