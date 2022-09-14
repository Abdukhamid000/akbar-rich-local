import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'

import { ArrowIcon, ChevronRight } from '@constants/icons'

import CategoryImg from '/public/images/CategoryImg.png'

import style from './homeCategory.module.css'

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <div className={style.carouselCardButtons}>
      <div className={style.ArrowLeftIconWrap}>
        <div className={style.ArrowLeftIcon}>
          <div className={`${style.prevBtn} ${style.activeBtn}`}>
            <ArrowIcon
              style={{ transform: 'rotate(270deg)' }}
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <div className={style.ArrowRightIconWrap}>
      <div className={style.ArrowRightIcon}>
        <div className={`${style.nextBtn} ${style.activeBtn}`}>
          <ArrowIcon
            style={{ transform: 'rotate(180deg)' }}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  )
}

export default function HomeCategory() {
  let productsCategoryCard = [
    {
      image: CategoryImg,
      title: 'Обкладные',
    },
    {
      image: CategoryImg,
      title: 'Филенчатые',
    },
    {
      image: CategoryImg,
      title: 'Фрезерованные',
    },
    {
      image: CategoryImg,
      title: 'Обкладные',
    },
    {
      image: CategoryImg,
      title: 'Филенчатые',
    },
    {
      image: CategoryImg,
      title: 'Фрезерованные',
    },
  ]
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    customPaging: function (i) {
      return <div />
    },
    dotsClass: 'slick-dots slick-thumb category',
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1116,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  }

  return (
    <div className={'containerBig'}>
      <div className={style.homeCategoryContainer}>
        <div className={style.productsCategory}>
          <Fade bottom delay={400}>
            <div className={style.productsCategoryLeft}>
              <p className={style.productsCategoryLeftTitle}>
                Категория товаров
              </p>
              <p className={style.productsCategoryLeftText}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation{' '}
              </p>
            </div>
          </Fade>
          <div className={style.sliderContainer}>
            <Slider {...settings}>
              {productsCategoryCard.map((item, index) => (
                <a
                  className={style.productsCategoryRightContainer}
                  key={index}
                  href="#"
                >
                  <div className={style.productsCategoryRightCard}>
                    <Link href="/catalog">
                      <img
                        src={item.image.src}
                        alt=""
                        className={style.productsCategoryCardImg}
                      />
                    </Link>
                    <div className={style.productsCategoryRightCardElements}>
                      <p className={style.productsCategoryRightCardTitle}>
                        {item.title}
                      </p>
                      <ChevronRight
                        className={style.arrowForwardIcon}
                        width="30px"
                        height="30px"
                      />
                    </div>
                  </div>
                </a>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}
