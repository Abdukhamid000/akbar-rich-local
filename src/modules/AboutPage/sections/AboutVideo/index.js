import Button from '@components/Button'
import React from 'react'
import classes from './aboutvideo.module.css'

const AboutVideo = () => {
  return (
    <div className="container">
      <div className={classes.aboutVideoWrapper}>
        <iframe
          width="100%"
          height="536px"
          src="https://www.youtube.com/embed/dYZifq-bKPk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className={classes.videoDescription}>
          <p className={classes.videotext}>
            Eсли у вас есть какие-либо предложения или вопросы, вы можете
            связаться с нами через кнопку ниже
          </p>
          <Button text="Посмотреть все" />
        </div>
      </div>
    </div>
  )
}

export default AboutVideo
