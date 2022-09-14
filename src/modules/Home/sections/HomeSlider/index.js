import React from 'react'
import Slider from 'react-slick'
import Link from 'next/link'

import style from './HomeSlider.module.css'

function SampleNextArrow(props) {
  const { className, style } = props
  return <div className={className} style={{ ...style, display: 'none' }} />
}

function SamplePrevArrow(props) {
  const { className, style } = props
  return <div className={className} style={{ ...style, display: 'none' }} />
}

export default function HomeSlider({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    cssEase: 'ease-in-out',
    touchThreshold: 100,
    customPaging: function (i) {
      return <div />
    },
    dotsClass: 'slick-dots slick-thumb home-slider',
  }

  return (
    <div className={style.carouselContainer}>
      <div className="containerBig">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index}>
              <img src={item.img.src} width="" height="" />
            </div>
          ))}
        </Slider>
        <div className={style.sliderElements}>
          <p className={style.sliderTitle}>
            Новая коллекция дверей с ореховым покрытием
          </p>
          <p className={style.sliderDescription}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim
          </p>
          <div className={style.btn}>
            <Link href="/contact">
              <p className={style.btntext}>Связаться с нами</p>
            </Link>
            <span className={style.BorderTopBottom}></span>
            <span className={style.BorderLeftRight}></span>
          </div>
        </div>
      </div>
    </div>
  )
}
