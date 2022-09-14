import React from 'react'
import Image from 'next/image'
import { Fade } from 'react-reveal'

import ReactScrollJacker from '@components/ScrollJacker'
import { useWindowSize } from '@hooks/useWindowSize'

import FirstMainImg from 'public/images/HomeCategoryImages/do-white-gold.png'
import FirstRightImg from 'public/images/HomeCategoryImages/white-gold-right1.png'
import FirstLeftImg from 'public/images/HomeCategoryImages/white-gold-left1.png'
import SecondRightImg from 'public/images/HomeCategoryImages/white-gold-right2.png'
import SecondLeftImg from 'public/images/HomeCategoryImages/white-gold-left2.png'

import style from './animatedDoors.module.css'

function ScrollJackerElements() {
  const { width } = useWindowSize()
  return (
    <div className={'containerBig'}>
      <div className={style.doorsContainer}>
        <div className={style.doorsContainerElements}>
          <div className={style.doorsImg}>
            <Fade right delay={5000}>
              <Image src={SecondLeftImg} />
            </Fade>
            <Fade right delay={3000}>
              <Image src={FirstLeftImg} />
            </Fade>
            <Fade bottom>
              <Image src={FirstMainImg} delay={500} />
            </Fade>
            <Fade left delay={3000}>
              <Image src={FirstRightImg} />
            </Fade>
            <Fade left delay={5000}>
              <Image src={SecondRightImg} />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AnimatedDoors() {
  return (
    <ReactScrollJacker>
      <ScrollJackerElements />
      <ScrollJackerElements />
    </ReactScrollJacker>
  )
}
