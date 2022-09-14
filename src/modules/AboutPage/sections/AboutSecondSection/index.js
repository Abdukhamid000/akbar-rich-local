import React from 'react'
import Image from 'next/image'
import classes from './AboutSecondSection.module.css'
import aboutImg from '@assets/images/about 1.svg'
import backgroundArrow from '@assets/images/arrowBG.svg'

const AboutSecondSection = () => {
  return (
    <section>
      <div className="container">
        <div className={`${classes.aboutInfo} row `}>
          <div className={classes.aboutImg}>
            <Image src={aboutImg} alt="aboutimg" />
          </div>
          <div
            className={classes.aboutDescriptionDiv}
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className={classes.triangelBorder}>
              <h5 className={classes.aboutImgInfo}>Кто мы?</h5>
            </div>
            <h2 className={classes.secondtitle}>
              Мы обеспечиваем высокое качество обслуживания с 2000 года
            </h2>
            <p className={classes.aboutDescription}>
              За годы существования компания AKBARR RICH зарекомендовала себя
              как надежного и ответственного производителя, в продукции которого
              вы можете быть уверены. На сегодняшний день предприятие обладает
              одним из крупнейших в Средней Азии автоматизированным
              производственным комплексом
            </p>
            <div className={`${classes.amountOfProjectList} `}>
              <div className={classes.amountOfProject}>
                <b>100+</b>
                <p>Успешных проектов</p>
              </div>
              <div className={classes.amountOfProject}>
                <b>50+</b>
                <p>Опытных специалистов</p>
              </div>
              <div className={classes.amountOfProject}>
                <b>4.8</b>
                <p>Средная оценка наших клиентов </p>
              </div>
            </div>
          </div>
          <div className={`${classes.backgroundImg} row`}>
            <div className={classes.backgroundBlock}></div>
            <div className={classes.backgroundArrowImg}>
              <Image src={backgroundArrow} alt="Background Arrow Img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSecondSection
