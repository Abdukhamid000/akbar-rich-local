import React from 'react'
import arrowImg from '@assets/images/arrowImg.svg'
import classes from './ourpartners.module.css'
import Image from 'next/image'
import Logo from './Logo'

const OurPartners = () => {
  return (
    <div className="container">
      <h2 className={classes.ourTeamTiltle}>Наша команда</h2>
      <div className={classes.borderLine}></div>
      <div className={`${classes.logosWrapper} `}>
        <Logo />
      </div>
      <div className={classes.allView}>
        <p>Посмотреть все</p>
        <div className={classes.arrowImg}>
          <Image src={arrowImg} alt="arrow img" />
        </div>
      </div>
    </div>
  )
}

export default OurPartners
