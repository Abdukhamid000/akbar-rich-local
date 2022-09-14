import React from 'react'
import Image from 'next/image'
import work from '@assets/images/work.svg'
import classes from './AboutExperience.module.css'

const AboutExperience = () => {
  const cardsInfo = [
    {
      id: 1,
      image: work,
      title: 'Многолетний опыт',
      text: 'За годы существования компания AKBARR RICH зарекомендовала себя как надежного и ответственного ',
    },
    {
      id: 2,
      image: work,
      title: 'Многолетний опыт',
      text: 'За годы существования компания AKBARR RICH зарекомендовала себя как надежного и ответственного ',
    },
    {
      id: 3,
      image: work,
      title: 'Многолетний опыт',
      text: 'За годы существования компания AKBARR RICH зарекомендовала себя как надежного и ответственного ',
    },
    {
      id: 4,
      image: work,
      title: 'Многолетний опыт',
      text: 'За годы существования компания AKBARR RICH зарекомендовала себя как надежного и ответственного ',
    },
  ]

  return (
    <section>
      <div
        className={classes.cardWrapper}
      
      >
        <div className="container">
          <div className={`${classes.aboutCardMainDiv} `}>
            {cardsInfo.map((info) => (
              <div className={classes.card} key={info.id}>
                <Image src={info.image} alt="" />
                <h4 className={classes.cardTitle}>{info.title}</h4>
                <p className={classes.cardText}>{info.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutExperience
