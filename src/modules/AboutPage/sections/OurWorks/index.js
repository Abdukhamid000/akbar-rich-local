import React from 'react'
import Image from 'next/image'
import classes from './ourworks.module.css'

const OurWorks = ({ data }) => {
  return (
    <section>
      <div className="container">
        <h3 className={classes.thirdTitle}>Цели и Миссия</h3>
        <div className={classes.dataWrapper}>
          {data.map((data) => (
            <div
              key={data.id}
              className={`${classes.aboutInfo} ${classes.aboutInfoDiv} row`}
            >
              <div className={classes.headingImgDiv}>
                <Image src={data.image} alt="img" />
              </div>
              <div
                className={classes.aboutDescriptionDiv}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h2 className={classes.secondtitle}>
                  {data.title}
                  <span className={classes.hiddenNumber}>{data.number}</span>
                </h2>
                <p className={classes.aboutDescription}>{data.description}</p>
              </div>
            </div>
          ))}
          <div className={classes.backgroundBlockRight}></div>
        </div>
      </div>
    </section>
  )
}

export default OurWorks
