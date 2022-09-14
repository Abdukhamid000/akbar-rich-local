import Image from 'next/image'

import heroImage from 'public/images/blog-image.png'

import classes from './Hero.module.css'

export default function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes.container}>
        <div className={classes.bgBlur}></div>
        <div className={classes.contentContainer}>
          <h1 className={classes.title}>
            Двери из 100% мдф не самого лучшего качества?
          </h1>
          <p className={classes.description}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation
          </p>
        </div>
        <div className={classes.imageContainer}>
          <div className={classes.imageBox}>
            <Image
              className={classes.image}
              src={heroImage}
              width={486}
              height={385}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
