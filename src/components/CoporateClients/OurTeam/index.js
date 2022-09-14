import { useState } from 'react'
import classes from './style.module.css'
import { RightArrowIcon, LeftArrowIcon } from '@constants/icons'
import 'react-stacked-carousel/dist/index.css'
import { StackedCarousel } from 'react-stacked-carousel'
import avatar from 'public/avatar.png'
import Image from 'next/image'

const teamCardInfo = [
  {
    id: 1,
    header: 'Савлат Султанов',
    date: 'Июнь 05, 2019',
    title: 'Ген. Директор компании Tashkent Index',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation ',
    img: 'public/avatar.png',
  },
  {
    id: 2,
    header: 'John Doe',
    date: 'Июнь 05, 2019',
    title: 'Ген. Директор компании Tashkent Index',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation ',
  },
  {
    id: 3,
    header: 'Tolipov Abduhamid',
    date: 'Июнь 05, 2019',
    title: 'Ген. Директор компании Tashkent Index',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation ',
  },

  {
    id: 4,
    header: 'John Doe',
    date: 'Июнь 05, 2019',
    title: 'Ген. Директор компании Tashkent Index',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation ',
  },

  {
    id: 5,
    header: 'John Doe',
    date: 'Июнь 05, 2019',
    title: 'Ген. Директор компании Tashkent Index',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation ',
  },
]

const OurTeam = () => {
  const [currentI, setCurrentI] = useState(0)
  // const [next, setNext] = useState(1)

  // const moveNext = () => {
  //   setNext((oldState) => oldState + 1, console.log(next))
  // }

  // const movePrev = () => {
  //   setNext((oldState) => oldState - 1, console.log(next))
  // }
  const onCardChange = (e) => {
    console.log(e)
    setCurrentI(e.currentIndex)
  }

  return (
    <div className={classes.ourTeamSection}>
      <h1>Наша команда</h1>
      <div className={classes.cardStyle}>
        <div className={classes.btn}>
          {/* <button
            onClick={movePrev}
            disabled={next === 1}
            className={next === 1 ? classes.disabled : ''}
          >
            <LeftArrowIcon />
          </button> */}
          {/* <button
            disabled={next === teamCardInfo.length}
            className={next === teamCardInfo.length ? classes.disabled : ''}
            onClick={moveNext}
          >
            <RightArrowIcon />
          </button> */}
        </div>

        <StackedCarousel
          autoRotate={false}
          onCardChange={onCardChange}
          leftButton={<CustomLeftArrow />}
          style={{
            width: '588px',
          }}
          rightButton={<CustomRightArrow />}
        >
          {teamCardInfo.map(({ id, header, date, title, content, img }) => (
            <div key={id} className={`${classes.cardContainer} `}>
              <div className={classes.top}>
                <Image src={avatar} width="80px" height="80px" alt="" />
                <div>
                  <h5>{header}</h5>
                  <p>{title}</p>
                </div>

                <span>{date}</span>
              </div>
              <div className={classes.bottom}>
                <p>{content}</p>
              </div>
            </div>
          ))}
        </StackedCarousel>
      </div>
      <div className={classes.indicator}>
        <span className={currentI === 0 ? classes.inde0 : ''}></span>
        <span className={currentI === 1 ? classes.inde1 : ''}></span>
        <span className={currentI === 2 ? classes.inde2 : ''}></span>
        <span className={currentI === 3 ? classes.inde3 : ''}></span>
        <span className={currentI === 4 ? classes.inde4 : ''}></span>
      </div>
    </div>
  )
}

function CustomLeftArrow() {
  return (
    <span className={classes.cardLeftBtn}>
      <LeftArrowIcon />
    </span>
  )
}

function CustomRightArrow() {
  return (
    <span className={classes.cardRightBtn}>
      <RightArrowIcon />
    </span>
  )
}

export default OurTeam
