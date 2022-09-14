import Image from 'next/image'
import african from 'public/images/african.png'
import classes from './style.module.css'
import { Line } from '@constants/icons'

const Partners = () => {
  return (
    <div className={`row ${classes.none}`}>
      <div className="col-6">
        <div className={classes.forPartner}>
          <h2>Для партнеров</h2>

          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
          </p>

          <div>
            <button>Связаться с нами</button>
          </div>
          <span>
            <Line />
          </span>
        </div>
      </div>
      <div className={`col-6`}>
        <Image src={african} alt="" priority />
      </div>
    </div>
  )
}

export default Partners
