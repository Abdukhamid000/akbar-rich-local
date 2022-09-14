import classes from './style.module.css'
import Image from 'next/image'
import contactImg from 'public/images/contact.png'
import Button from '@components/Button'

const Contact = () => {
  return (
    <section className={`container ${classes.contactSection}`}>
      <div className={`row ${classes.md}`}>
        <div className="col-6">
          <h2>
            Наши условия для <br /> дилерской программы
          </h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit amet sint. Velit sit
            aliqua dolor do amet sint. Velit officia consequat duis enim velit
            amet sint. Velit sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit amet sint. Velit{' '}
          </p>
        </div>
        <div className="col-6">
          <Image src={contactImg} alt="" priority />
        </div>
      </div>
      <div className={classes.btn}>
        <p>
          Eсли у вас есть какие-либо предложения или вопросы, <br /> вы можете
          связаться с нами через кнопку ниже
        </p>
        <Button text="Связаться с нами" />
      </div>
    </section>
  )
}

export default Contact
