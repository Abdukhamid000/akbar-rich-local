import React, { useState } from 'react'
import Slider from 'react-slick'

import style from './stickyElements.module.css'

const colorBtns = [
  {
    id: 1,
    index: 0,
    color: 'light grey',
    className: style.bgLightGreyClr,
  },
  {
    id: 2,
    index: 1,
    color: 'black',
    className: style.bgBlackClr,
  },
  {
    id: 3,
    index: 2,
    color: 'green',
    className: style.bgLightGreenClr,
  },
  {
    id: 4,
    index: 3,
    color: 'yellow',
    className: style.bgYellowClr,
  },
]

function ExampleSticky({ stickyDatas }) {
  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()
  const [nav3, setNav3] = useState()
  const [nav4, setNav4] = useState()

  const [active, setActive] = useState(0)

  const handleGoTo = (idx) => {
    nav1.slickGoTo(idx)
    setActive(idx)
  }

  const colorPick = () => {
    return (
      <div className={style.colorCheck}>
        {colorBtns.map((item, index) => (
          <div
            key={index}
            className={`${item.className} ${
              item.index === active && style.active
            }`}
            onClick={() => handleGoTo(item.index)}
          />
        ))}
      </div>
    )
  }

  function slider1() {
    return stickyDatas.map((item, index) => (
      <div className={`${style.firstStickyElementContainer} `} key={index}>
        <div className={style.differentDoors}>
          <div className={style.firstDoorContainer}>
            <img className={style.firstDoorImg} src={item.first.img.src} />
            <p className={`${style.bottomText} ${style.bottomBlackText}`}>
              {' '}
              {item.first.name}
            </p>
          </div>
        </div>
      </div>
    ))
  }

  function slider2() {
    return stickyDatas.map((item, index) => (
      <div className={style.secondStickyElementContainer} key={index}>
        <div className={style.secondDoorContainer}>
          <div className={style.secondDoorImgContainer}>
            <img
              src={item.second.img.src}
              className={style.firstDoorBigImg}
              alt=""
              loading="lazy"
            />
            <p className={`${style.bottomText} ${style.bottomWhiteText}`}>
              {item.second.description}
            </p>
          </div>
        </div>
      </div>
    ))
  }

  function slider3() {
    return stickyDatas.map((item, index) => (
      <div className={style.secondGridRightContainer} key={index}>
        <div className={style.secondGridRightImgContainer}>
          <img
            src={item.fourth.img.src}
            alt=""
            className={style.secondGridRightImg}
            loading="lazy"
          />
          <p
            className={`${style.bottomWhiteText} ${style.bottomText} ${style.secondGridRightContainerText}`}
          >
            {item.fourth.description}
          </p>
        </div>
      </div>
    ))
  }

  function slider4() {
    return stickyDatas.map((item, index) => (
      <div className={style.secondGridLeftContainer} key={index}>
        <div className={style.secondGridLeftImgContainer}>
          <img
            src={item.third.img.src}
            alt=""
            className={style.secondGridLefttImg}
            loading="lazy"
          />
          <p
            className={`${style.bottomText} ${style.bottomWhiteText} ${style.secondGridLeftContainerText}`}
          >
            {item.third.description}
          </p>
        </div>
      </div>
    ))
  }

  return (
    <div className={'containerBig'}>
      <div className={style.stickyElementsContainer}>
        <div className={`${style.notStickyOnMobile} stickyContainer`}>
          <div className={style.sliderContainer}>
            <Slider
              asNavFor={nav2}
              ref={(slider1) => setNav1(slider1)}
              draggable={false}
              className={style.firstSliderContainer}
            >
              {slider1()}
            </Slider>
            {colorPick()}
            <div className={style.imgFlexContainer}>
              {stickyDatas.map((item, index) => (
                <div key={index} className={style.imgFlexContainerElements}>
                  <div className={style.differentDoors}>
                    <div className={style.firstDoorContainer}>
                      <img
                        className={style.firstDoorImg}
                        src={item.first.img.src}
                      />
                      <div className={style.bottomRow}>
                        <p
                          className={`${style.bottomText} ${style.bottomBlackText}`}
                        >
                          {' '}
                          {item.first.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Slider
          asNavFor={nav3}
          ref={(slider2) => setNav2(slider2)}
          className={`${style.notStickyOnMobile} stickyContainer`}
          fade={true}
          draggable={false}
          style={{ overflow: 'hidden' }}
        >
          {slider2()}
        </Slider>

        <Slider
          asNavFor={nav1}
          ref={(slider4) => setNav4(slider4)}
          className={`${style.notStickyOnMobile} stickyContainer`}
          style={{ overflow: 'hidden' }}
          draggable={false}
          fade={true}
        >
          {slider4()}
        </Slider>

        <Slider
          asNavFor={nav4}
          ref={(slider3) => setNav3(slider3)}
          className={`${style.notStickyOnMobile} stickyContainer`}
          style={{ overflow: 'hidden' }}
          draggable={false}
          fade={true}
        >
          {slider3()}
        </Slider>
      </div>
    </div>
  )
}

export default ExampleSticky
