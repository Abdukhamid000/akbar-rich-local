import React from 'react'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'

import Button from '@components/Button/index'

import RectangleImg from 'public/images/homeRectangleImg.png'
import HomeVirtualTourImg from 'public/images/homeVirtualTourImg.png'
import RectangleTop from 'public/images/RectangleTop.png'
import RectangleBottom from 'public/images/RectangleBottom.png'

import style from './virtualTour.module.css'
import Link from 'next/link'

export default function VirtualTour() {
  return (
    <div className={'containerBig'}>
      <div className={style.VirtualTourContainer}>
        <div className={style.VirtualTourContainerHeader}>
          <Image
            src={RectangleImg}
            alt=""
            className={style.VirtualTourContainerHeaderImg}
            loading="lazy"
          />
          <Button text="Виртуальный тур" />
        </div>
        <div className={style.VirtualTourContainerMain}>
          <div className={style.VirtualTourContainerMainElements}>
            <Fade bottom delay={400}>
              <p className={style.VirtualTourTitle}>Зоголовок</p>
              <p className={style.VirtualTourDescription}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation Amet minim mollit non deserunt ullamco est sit
                aliqua dolor do amet sint. Velit officia consequat duis enim
                velit mollit. Exercitation Amet minim mollit non deserunt
                ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. Exercitation
              </p>
              <Link href="/address">
                <a className={style.VirtualTourLink}>
                  <Button text="Список магазинов" />
                </a>
              </Link>
            </Fade>
          </div>
          <div className={style.virtualTourImgContainer}>
            <div className={style.virtualTourImg}>
              <Image src={HomeVirtualTourImg} loading="lazy" />
            </div>
            <div className={style.cardImgBackTopRightGround}>
              <Image src={RectangleTop} loading="lazy" />
            </div>
            <div className={style.cardImgBackBottomGround}>
              <Image src={RectangleBottom} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
