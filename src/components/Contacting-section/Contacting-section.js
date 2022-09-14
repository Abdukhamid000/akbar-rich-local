import React from 'react'

import Button from '@components/Button'

import style from '../MainSection/main-section.module.css'

const Contacting_section = () => {
  return (
    <div className={style['contacting-block']}>
      <p className={style['contacting-block_text']}>
        Eсли у вас есть какие-либо предложения или вопросы, вы можете связаться
        с нами через кнопку ниже
      </p>
      <Button text="Связаться с нами" />
    </div>
  )
}

export default Contacting_section
