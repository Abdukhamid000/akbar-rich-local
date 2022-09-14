import Logo1 from 'public/images/membrane.png'
import Logo2 from 'public/images/quality-control.png'
import Logo3 from 'public/images/shipped.png'
import BackgroundImg1 from 'public/images/advantagesImg1.webp'
import BackgroundImg2 from 'public/images/advantagesImg2.webp'
import BackgroundImg3 from 'public/images/advantagesImg3.webp'
import RedDoorImg from 'public/images/redDoorImg.webp'
import WhiteDoorImg from 'public/images/whiteDoorImg.webp'
import BrownDoorImg from 'public/images/brownDoorImg.webp'

const advantagesData = [
  {
    id: 1,
    logo: Logo1,
    title: '5 лет гарантии на все наши товары',
    rightFade: 'right',
    arrowDownNum: 1,
    bgImg: BackgroundImg1,
    doorImg: RedDoorImg,
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim',
  },
  {
    id: 2,
    logo: Logo2,
    title: 'Доставка и установка по всему Узбекистану',
    leftFade: 'left',
    arrowDownNum: 2,
    bgImg: BackgroundImg2,
    doorImg: WhiteDoorImg,
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim',
  },
  {
    id: 3,
    logo: Logo3,
    title: 'Бесплатная онлайн и офлайн консултая',
    topFade: 'top',
    arrowDownNum: 3,
    bgImg: BackgroundImg3,
    doorImg: BrownDoorImg,
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim',
  },
]

export default advantagesData
