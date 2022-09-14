import classes from './style.module.css'
import flag from 'public/images/flag.png'
import Image from 'next/image'
import Button from '@components/Button'

const Flag = () => {
  return (
    <section className={classes.flagSection}>
      <div className="container">
        <div className={`row ${classes.flag}`}>
          <div
            className="col-6"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
            }}
          >
            <h2>Зоголовок</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim velit
              mollit. Exercitation{' '}
            </p>
            <Button text="Подробнее" />
          </div>
          <div className="col-6">
            <Image src={flag} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Flag
