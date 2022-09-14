import React from 'react'

import Image from '../../../public/images/book_door.jpg'
import tableImage from '../../../public/images/table.jpg'
import ServiceCards from '@components/Service_cards/ServiceCards'
import ContactingSection from '@components/Contacting-section/Contacting-section'

import style from './main-section.module.css'

const index = () => {
  const servicesData = [
    {
      id: 1,
      img: Image,
      title: 'Зоголовок',
      text: [
        'Amet minim mollit non deserunt ullamco es',
        'Amet minim mollit non deserunt ullamco es',
        'Amet minim mollit non deserunt ullamco es',
        'Amet minim mollit non deserunt ullamco es',
        'Amet minim mollit non deserunt ullamco es',
        'Amet minim mollit non deserunt ullamco es',
      ],
    },
  ]

  const serviceData = [
    {
      id: 2,

      title: 'Зоголовок',
      text: [
        'Amet minim mollit non deserunt ullamco es',
        'Amet minim mollit non deserunt ullamco es',
        'Amet minim mollit non deserunt ullamco es',
        'Amet minim mollit non deserunt ullamco es',
        'Amet minim mollit non deserunt ullamco es',
        'Amet minim mollit non deserunt ullamco es',
      ],
      img: tableImage,
    },
  ]

  return (
    <div className={`${style['main_section']} container`}>
      <ServiceCards />

      {servicesData.map((item) => (
        <div
          className={` row ${style['image-textblock-container']}`}
          key={index}
        >
          <div className={`${style['image-block']} col-6`}>
            <img src={item.img.src} className={style['image-block_item']} />
          </div>
          <div className={`${style['textblock']} col-6`}>
            <h1 className={style['textblock-heading']}>{item.title}</h1>
            <div className={style['description-container']}>
              {item.text.map((i, index) => (
                <div key={index} className={style['textblock_description']}>
                  <hr className={style['description-dash']} /> {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {serviceData.map((item, index) => (
        <div
          className={`${style['image-textblock-container-middle']} row`}
          key={index}
        >
          <div className={`${style['textblock-middle']} col-6`}>
            <h1 className={style['textblock-heading']}>{item.title}</h1>
            <div className={style['description-container']}>
              {item.text.map((i, index) => (
                <div key={index} className={style['textblock_description']}>
                  <hr className={style['description-dash']} /> {i}
                </div>
              ))}
            </div>
          </div>
          <div className={`${style['image-block-middle']} col-6`}>
            <img
              src={item.img.src}
              className={style['image-block-middle_item']}
            />
          </div>
        </div>
      ))}

      {servicesData.map((item, index) => (
        <div
          className={`${style['image-textblock-container']} row`}
          key={index}
        >
          <div className={`${style['image-block']} col-6`}>
            <img src={item.img.src} className={style['image-block_item']} />
          </div>
          <div className={`${style['textblock']} col-6`}>
            <h1 className={style['textblock-heading']}>{item.title}</h1>
            <div className={style['description-container']}>
              {item.text.map((i, index) => (
                <div key={index} className={style['textblock_description']}>
                  <hr className={style['description-dash']} /> {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <ContactingSection />
    </div>
  )
}

export default index
