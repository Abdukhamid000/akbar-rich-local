import React from 'react'
import style from './ourPartners.module.css'
import Image from 'next/image'
import Link from 'next/link'

import Button from '@components/Button/index'
import Logo from '@modules/AboutPage/sections/OurPartners/Logo'

export default function OurPartners() {
  return (
    <div className={'containerBig'}>
      <div className={style.partnersContainer}>
        <div className={style.partnersContainerHeader}>
          <div className={style.partnersTitleContainer}>
            <div>
              <p className={style.partnersTitle}>Зоголовок</p>
            </div>
            <div className={style.bePartnerTextContainer}>
              <Image src="/vector.png" alt="vector" width="25" height="25" />
              <Link href="/for-partners">
                <p className={style.bePartnerText}>Стать партнером</p>
              </Link>
            </div>
            <div className={style.partnerBottomLine} />
          </div>
        </div>
        <Logo /> <br /> <br />
        <Button text="Посмотреть все" />
      </div>
    </div>
  )
}
