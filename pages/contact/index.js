import React from 'react'

import Image from 'next/image'
import image from 'public/images/contactimage.png'

import ContactMap from '@components/ContactMap'
import ContactForm from '@components/ContactForm'
import ContactInfo from '@components/ContactInfo'

import style from './style.module.css'

const Contact = () => {
  return (
    <div>
      <div className={`${style.container} container`}>
        <div className={style.wrap}>
          <div className={style.title}>
            <p className={style.titleleft}>Главная /</p>
            <p className={style.titleright}>Наши контакты</p>
          </div>
          <div className={`${style.rowmap} row`}>
            <div className={`${style.map} col-md-7`}>
              <ContactMap />
            </div>
            <div className={`${style.form} col-md-5`}>
              <ContactForm />
            </div>
          </div>
          <div className={`${style.contentcard} row`}>
            <div className={`${style.contentleft} col-md-6`}>
              <ContactInfo />
            </div>
            <div className={`${style.contentright} col-md-6`}>
              <Image src={image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
