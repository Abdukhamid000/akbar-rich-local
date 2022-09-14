import Image from 'next/image'
import React from 'react'
import classes from './ourachievment.module.css'

const OurAchievments = ({ certificates }) => {
  return (
    <section>
      <div className={`${classes.certificatesWrapper} container`}>
        <h2 className={classes.OurAchievmentTitle}>
          Наши <br /> достижения
        </h2>
        <div className={`${classes.certificateDiv} row`}>
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className={classes.certificate}
              data-aos="zoom-out"
              data-aos-duration="1500"
            >
              <Image src={certificate.image} alt="certificate Img" />
            </div>
          ))}
        </div>
        <div
          className={classes.achievmentDescriptionDiv}
          data-aos="zoom-in-left"
          data-aos-duration="2000"
        >
          <p className={classes.achievmentDescription}>
            Компания «Акбар-Рич» начала свою производственную деятельность в
            2008 г. Наша компания известна своей надежностью и неизменно высоким
            качеством своей продукции, а также широким ассортиментом. Всё это
            позволило нам занять лидирующеe
          </p>
        </div>
      </div>
    </section>
  )
}

export default OurAchievments
