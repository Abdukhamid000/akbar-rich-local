import Image from 'next/image'
import React from 'react'
import classes from './ourTeam.module.css'
import cardImg from '@assets/images/cardImg.svg'

const OurTeam = () => {
  const TeamData = [
    {
      id: 1,
      img: cardImg,
      name: 'Savlat Sultonov',
      work: 'Учредитель',
    },
    {
      id: 2,
      img: cardImg,
      name: 'Savlat Sultonov',
      work: 'Учредитель',
    },
    {
      id: 3,
      img: cardImg,
      name: 'Savlat Sultonov',
      work: 'Учредитель',
    },
    {
      id: 4,
      img: cardImg,
      name: 'Savlat Sultonov',
      work: 'Учредитель',
    },
    {
      id: 5,
      img: cardImg,
      name: 'Savlat Sultonov',
      work: 'Учредитель',
    },
    {
      id: 6,
      img: cardImg,
      name: 'Savlat Sultonov',
      work: 'Учредитель',
    },
    {
      id: 7,
      img: cardImg,
      name: 'Savlat Sultonov',
      work: 'Учредитель',
    },
    {
      id: 8,
      img: cardImg,
      name: 'Savlat Sultonov',
      work: 'Учредитель',
    },
  ]

  return (
    <div className={classes.ourTeam}>
      <div className="container">
        <h2 className={classes.ourTeamTiltle}>Наша команда</h2>
        <div className={classes.borderLine}></div>
        <div className={`${classes.cadWrapper} row`}>
          {TeamData.map((card) => (
            <div className={classes.card} key={card.id}>
              <Image src={card.img} alt="card Image" />
              <div className={classes.cardTitleDiv} >
                <h5 className={classes.cardTitle}>{card.name}</h5>
                <p className={classes.cardParagraph}>{card.work}</p>
              </div>
              <div className={classes.cardImgBackGround}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurTeam
