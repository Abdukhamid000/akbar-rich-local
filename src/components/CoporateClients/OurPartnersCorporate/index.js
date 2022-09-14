import React from 'react'
import Logo from '@modules/AboutPage/sections/OurPartners/Logo'
import arrowImg from '@assets/images/arrowImg.svg'
import Image from 'next/image'
import classes from './ourPartners.module.css'

export default function OurPartners() {
  return (
    <div className="container">
      <h2 className={classes.ourTeamTiltle}>Наша команда</h2>
      <div className={classes.borderLine}></div>
      <div className={`${classes.logosWrapper} `}>
        <Logo />
      </div>
      <div className={classes.allView}>
        <p>Посмотреть все</p>
        <Image src={arrowImg} alt="arrow img" />
      </div>
    </div>
  )
}
