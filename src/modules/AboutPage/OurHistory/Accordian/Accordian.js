import { useState } from 'react'
import Image from 'next/image'
import classes from './Accordian.module.css'
import ArrowImg from '../../../../assets/images/arrow.png'

const Accordion = ({ title, content }) => {
  const [show, setShow] = useState(false)
  const toggleAccordion = () => {
    setShow(!show)
  }

  return (
    <div>
      <div
        className={classes.content}
        active={show.toString() ? show.toString() : undefined}
        onClick={toggleAccordion}
      >
        <div className={classes.title}>{title}</div>
        <div className={show ? `${classes.open}` : `${classes.close}`}>
          <Image src={ArrowImg} alt="ArrowIMg" />
        </div>
      </div>

      <div className={show ? `${classes.passageActive}` : `${classes.passage}`}>
        <div>{content}</div>
      </div>

    </div>
  )
}

export default Accordion
