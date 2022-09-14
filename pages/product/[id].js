import { Tabs as CustomTabs, TabPane } from '@components/Tab'
import { BookMarkIcon, ShareIcon, StarIcon } from '@constants/icons'
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
import style from './style.module.css'
import ProductView from '@components/ProductView'
import commonstyle from '@styles/common.module.css'
import Accordion from '@components/Accordion'
import Button from '@components/Button'

const CustomSlide = function ({ imageUrl, title, index, ...props }) {
  return (
    <div {...props}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={style.sliderContainer}
      >
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default function ProductInfo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: style.slickContainer,
  }

  const renderSystemProduct = (url, description) => {
    return (
      <div className={style.doorItem}>
        <Image
          src={url}
          alt=""
          title=""
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
        />
        <p className={style.paragraph}>{description}</p>
      </div>
    )
  }

  const sytemProducts = [
    {
      url: '/images/doorPng1.png',
      description: 'Распашная дверь, открывание на себя',
    },
    {
      url: '/images/doorPng2.png',
      description: 'Раздвижная дверь в пенал',
    },
    {
      url: '/images/doorPng3.png',
      description: 'Дверь-книжка',
    },
    {
      url: '/images/doorPng4.png',
      description: 'Раздвижная перегородка вдоль стены',
    },
    {
      url: '/images/doorPng5.png',
      description: 'Обрамление проема',
    },
  ]

  const StarRatingComponent = () => {
    return (
      <div className={style.starRatingContainer}>
        <div className={style.starIconBox}>
          {Array.from(Array(5).keys()).map((itm) => {
            return (
              <div
                className={`${style.star} ${itm < 2 && style.active}`}
                key={itm}
              >
                <StarIcon />
                <span>Отличный</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="container-fluid" style={{ padding: 0 }}>
        <div className={style.carouselContainer}>
          <Slider {...settings}>
            <CustomSlide
              imageUrl={'/images/foto.png'}
              title={'Европейская фурнитура'}
            />
            <CustomSlide
              imageUrl={'/images/foto1.png'}
              title={'Французская решётка'}
            />
            <CustomSlide
              imageUrl={'/images/foto2.png'}
              title={'Двустороннее зеркало'}
            />
          </Slider>
        </div>
      </div>

      <div className="container">
        <div className={`row ${style.productDetailContainer}`}>
          <div className="col-md-6 col-12">
            <div className="row">
              <div className={`col-md-2 col-12 ${style.productBtnContainer}`}>
                <div className={style.productMapView}>
                  <img src={'/images/doorPng.png'} />
                </div>
                <div className={style.productMapView}>
                  <img src={'/images/doorPng.png'} />
                </div>
                <div className={style.productMapView}>
                  <img src={'/images/doorPng.png'} />
                </div>
              </div>
              <div className="col-md-9 col-12 ">
                <div className={style.productScale}>
                  <Image
                    src={'/images/doorPng.png'}
                    alt=""
                    title=""
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <CustomTabs>
              <TabPane tabStyle={style.tabStyle} name="Описания товара" key="1">
                <div className="row">
                  {Array.from(Array(5).keys()).map((itm) => {
                    return (
                      <div key={itm} className="col" style={{ padding: 0 }}>
                        <Image
                          src={`/images/wood${itm + 1}.png`}
                          alt=""
                          width="100%"
                          height="100%"
                          layout="responsive"
                          objectFit="contain"
                        />
                      </div>
                    )
                  })}
                  <div className="col-12">
                    <p className={style.productDecription}>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.Amet minim mollit non deserunt ullamco est
                      sit aliqua dolor do amet sint. Velit officia consequat
                      duis enim velit
                    </p>
                  </div>
                </div>
                <div className={style.productFooter}>
                  <button className={style.btnGreenFilled}>Узнать цену</button>
                  <div className={style.iconsContainer}>
                    <BookMarkIcon />
                    <ShareIcon />
                  </div>
                </div>
              </TabPane>
              <TabPane name="Характеристики" key="2">
                test
              </TabPane>
            </CustomTabs>
          </div>
        </div>
      </div>

      <div className={`container-fluid ${style.systemContainer}`}>
        <div className="container">
          <div className="row">
            <div className={`col-5 ${style.header}`}>
              <h2>Системы</h2>
              <p className={style.paragraph}>
                Ваша дверь может быть функциональной и уникальной. Доступные
                системы в коллекции
              </p>
            </div>
          </div>

          <div className={`row ${style.doorsContainer}`}>
            {sytemProducts.map((item) => {
              return (
                <div key={item.url} className="col">
                  {renderSystemProduct(item.url, item.description)}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className={`container ${style.featuresContainer}`}>
        <div className="row">
          <div className="col-md-6 col-12" style={{ height: 500 }}>
            <Image
              src={'/images/livingRoom.png'}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={`col-md-6 col-12 ${style.featuresItem}`}>
            <h1>
              Зоголовок <span>01</span>
            </h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.Amet
              minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velitAmet minim mollit non
              deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis enim velit mollit.Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim velit
            </p>
          </div>
          <div className={`col-md-6 col-12 ${style.featuresItem}`}>
            <h1>
              Зоголовок <span>02</span>
            </h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.Amet
              minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velitAmet minim mollit non
              deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis enim velit mollit.Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim velit
            </p>
          </div>
          <div className="col-md-6 col-12" style={{ height: 500 }}>
            <Image
              src={'/images/livingRoom.png'}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="col-md-6 col-12" style={{ height: 500 }}>
            <Image
              src={'/images/livingRoom.png'}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={`col-md-6 col-12 ${style.featuresItem}`}>
            <h1>
              Зоголовок <span>03</span>
            </h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.Amet
              minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velitAmet minim mollit non
              deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis enim velit mollit.Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim velit
            </p>
          </div>
        </div>
      </div>

      <div className={`container ${style.section}`}>
        <div className="row">
          <div className="col-12">
            <h1
              className={`${style.sectionTitle} ${style.titleBottomBordered}`}
            >
              Зоголовок
            </h1>
          </div>
        </div>
        <div className={`row ${style.productValue}`}>
          <div className={`col-md-6 col-12 ${style.overAllRating}`}>
            <h1>8/10</h1>
            <span>15 отзывов</span>
            <p>Качество двери</p>
            <StarRatingComponent />
            <button className={`${commonstyle.btn} ${commonstyle.btnLight}`}>
              Оставить отзыв
            </button>
          </div>
          <div className={`col-md-6 col-12 ${style.clientsReccomendation}`}>
            {Array.from(Array(3).keys()).map((itm) => {
              return (
                <div key={itm} className={style.reccomendation}>
                  <div className={style.header}>
                    <b>Cameron Williamson</b>
                    <span>March 23, 2013</span>
                  </div>
                  <p>
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime
                  </p>
                  <StarRatingComponent />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className={`container ${style.exProducts}`}>
        <div className="row">
          <div className="col-12">
            <h1 className={style.sectionTitle}>Зоголовок</h1>
          </div>
          {Array.from(Array(3).keys()).map((itm) => {
            return (
              <div key={itm} className="col-12 col-md-6 col-lg-4">
                <ProductView imageUrl={'/images/door.png'} />
              </div>
            )
          })}
          <div className={style.footer}>
            <Button text="Посмотреть все" />
            {/* <button className={commonstyle.btn}>Посмотреть все</button> */}
          </div>
        </div>
      </div>

      <div className={`container ${style.section}`}>
        <div className="row">
          <div className="col-12">
            <h1
              className={`${style.sectionTitle} ${style.titleBottomBordered}`}
            >
              Зоголовок
            </h1>
          </div>
          {Array.from(Array(5).keys()).map((itm) => {
            return (
              <div key={itm} className="col-12">
                <Accordion
                  title={'Названия темы'}
                  content={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                  }
                />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
