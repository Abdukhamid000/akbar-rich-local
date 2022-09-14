import React from 'react'

import Image from 'next/image'
import Slider from 'react-slick'
import Link from 'next/link'

import { ArrowRight } from '@constants/icons'

import classes from './Cards.module.css'

function CardPrevArrow(props) {
  const { className, onClick } = props
  return (
    <div
      className={`${className} ${classes.prevArrow} ${classes.slickArrow}`}
      onClick={onClick}
    >
      <ArrowRight className={`${classes.arrowIcon} ${classes.prevBtn} `} />
    </div>
  )
}
function CardNextArrow(props) {
  const { className, onClick } = props
  return (
    <div
      className={`${className} ${classes.nextArrow} ${classes.slickArrow}`}
      onClick={onClick}
    >
      <ArrowRight className={`${classes.arrowIcon} ${classes.nextBtn} `} />
    </div>
  )
}
export default function Cards({ data }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: <CardPrevArrow />,
    nextArrow: <CardNextArrow />,
    responsive: [
      {
        breakpoint: 1044,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  }
  return (
    <div className={classes.cards}>
      <Slider {...settings} className={classes.container}>
        {data.map((item, index) => (
          <div className={classes.card} key={index}>
            <div className={classes.cardContainer}>
              <div className={classes.cardImageContainer}>
                <Image
                  className={classes.cardImage}
                  src={item.img}
                  width={384}
                  height={265}
                />
              </div>
              <div className={classes.cardContent}>
                <h3 className={classes.cardTitle}>{item.title}</h3>
                <div className={classes.cardLinkContainer}>
                  <Link href="/blog">
                    <p className={classes.cardLink}>Подробно</p>
                  </Link>
                  <ArrowRight className={classes.cardLinkIcon} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
