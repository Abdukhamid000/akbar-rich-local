import React from 'react'
import Fade from 'react-reveal/Fade'
import Image from 'next/image'

import ReactScrollJacker from '@components/ScrollJacker'
import { ArrowDown } from '@constants/icons'
import { useWindowSize } from '@hooks/useWindowSize'

import FadeComponent from './fade'
import advantagesData from './advantagesData'

import style from './advantages.module.css'

function ReactElement(props) {
  const { width } = useWindowSize()
  return (
    <div className={'containerBig'}>
      <div className={style.advantagesContainer}>
        <div className={style.advantagesLeftGridContainer}>
          <div>
            <p className={style.leftGridElementsTitle}>Наши преимущества</p>
            <div className={style.leftGridElements}>
              <div className={style.leftGridElementsLogoContainer}>
                <Fade left>
                  <Image
                    src={props.logo}
                    width={width < 751 ? '37px' : '46px'}
                    height={width < 751 ? '37px' : '46px'}
                    alt=""
                  />
                </Fade>
              </div>
              <FadeComponent
                right={props.right}
                left={props.left}
                top={props.top}
              >
                <p className={style.descriptionHeader}>{props.title}</p>
              </FadeComponent>
              <Fade bottom>
                <p className={style.description}>{props.description}</p>
              </Fade>
              <div className={style.gridElementNumber}>
                {' '}
                <p
                  style={{
                    fontWeight: 600,
                    display: 'flex',
                  }}
                >
                  0{' '}
                  <Fade top>
                    <span>{props.arrowDownNum}</span>
                  </Fade>
                </p>
                <ArrowDown width="50px" height="60px" color="white" />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${style.doorImgContainer} ${style.whenResponsiveActive}`}
        >
          <Fade left>
            <Image
              src={props.doorImg}
              alt=""
              className={style.advantagesCenteredImg1}
              width={width < 621 ? '200px' : width < 751 ? '250px' : '280px'}
              height={width < 621 ? '340px' : width < 751 ? '390px' : '450px'}
            />
          </Fade>
        </div>
        <div>
          <div
            className={`${style.advantagesRightGridContainer} stickyContainer`}
          >
            <FadeComponent
              right={props.right}
              left={props.left}
              top={props.top}
            >
              <Image
                src={props.bgImg}
                alt=""
                className={style.advantagesImg1}
                height={
                  width < 785
                    ? '1230px'
                    : width < 822
                    ? '1150px'
                    : width < 860
                    ? '1100px'
                    : width < 901
                    ? '1050px'
                    : width < 949
                    ? '1000px'
                    : width < 1000
                    ? '950px'
                    : width < 1060
                    ? '900px'
                    : width < 1116
                    ? '850px'
                    : '750px'
                }
              />
            </FadeComponent>
            <div className={style.doorImgContainer}>
              <Fade left>
                <Image
                  src={props.doorImg}
                  alt=""
                  className={style.advantagesCenteredImg1}
                  width={
                    width < 751
                      ? '100px'
                      : width < 860
                      ? '200px'
                      : width < 1001
                      ? '220px'
                      : width < 1116
                      ? '250px'
                      : '280px'
                  }
                  height={
                    width < 751
                      ? '100px'
                      : width < 860
                      ? '320px'
                      : width < 1001
                      ? '350px'
                      : width < 1116
                      ? '390px'
                      : '450px'
                  }
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Example() {
  return (
    <ReactScrollJacker height={2400}>
      {advantagesData?.map((i, index) => (
        <ReactElement
          key={index}
          logo={i.logo}
          title={i.title}
          left={i?.leftFade}
          right={i?.rightFade}
          top={i?.topFade}
          description={i.description}
          arrowDownNum={i.arrowDownNum}
          bgImg={i.bgImg}
          doorImg={i.doorImg}
        ></ReactElement>
      ))}
    </ReactScrollJacker>
  )
}
