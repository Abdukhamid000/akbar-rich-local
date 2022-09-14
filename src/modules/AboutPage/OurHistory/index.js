import React from 'react'
import Image from 'next/image'
import classes from './ourhistory.module.css'
import aboutImg from '@assets/images/about 1.svg'
import Accordion from './Accordian/Accordian'
import accordionData from './Content'

const OurHistory = () => {
  return (
    <section>
      <div className="container">
        <div className={`${classes.aboutInfo} row`}>
          <div className={classes.headingImgDiv}>
            <Image src={aboutImg} alt="img" />
          </div>
          <div
            className={classes.aboutDescriptionDiv}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className={classes.secondtitle}>Наша история</h2>
            <p className={classes.aboutDescription}>
              Компания «Акбар-Рич» начала свою производственную деятельность в
              2008 г. Наша компания известна своей надежностью и неизменно
              высоким качеством своей продукции, а также широким ассортиментом.
              Всё это позволило нам занять лидирующее положение на рынке и
              завоевать доверие клиентов.Основным преимуществом является то, что
              компания «Акбар-Рич» – производит высококачественные шпонированные
              двери.
            </p>
            <div className="accordion">
              {accordionData?.map(({ title, content }, index) => (
                <Accordion key={index} title={title} content={content} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurHistory
