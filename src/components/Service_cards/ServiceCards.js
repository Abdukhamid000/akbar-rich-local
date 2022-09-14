import React from 'react'

import WorkImg from '../../../public/images/work.png'

import style from '../MainSection/main-section.module.css'

const sevice_cards = () => {
  return (
    <div classsName={style['service_cards_block']}>
      <div className={style['service-title-block']}>
        <h1 className={style['service-title']}>Профессиональный сервис</h1>
        <hr className={style['service-title-horizontal-line']} />
      </div>
      <div className={style['cards_container']}>
        <div className={style['card']}>
          <img src={WorkImg.src} className={style['card_image']} />
          <p className={style['card_text']}>
            Сервисное обслуживание на уровне мировых стандартов
          </p>
        </div>
        <hr className={['cards-block-hr-line']} />

        <div className={style['card']}>
          <img src={WorkImg.src} className={style['card_image']} />
          <p className={style['card_text']}>
            Сервисное обслуживание на уровне мировых стандартов
          </p>
        </div>
        <hr className={['cards-block-hr-line']} />

        <div className={style['card']}>
          <img src={WorkImg.src} className={style['card_image']} />
          <p className={style['card_text']}>
            Сервисное обслуживание на уровне мировых стандартов
          </p>
        </div>
        <hr className={['cards-block-hr-line']} />

        <div className={style['card']}>
          <img src={WorkImg.src} className={style['card_image']} />
          <p className={style['card_text']}>
            Сервисное обслуживание на уровне мировых стандартов
          </p>
        </div>
      </div>
    </div>
  )
}

export default sevice_cards
