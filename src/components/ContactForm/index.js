import Image from 'next/image'

import upload from 'public/images/upload.svg'

import style from './style.module.css'

const ContactForm = () => {
  return (
    <div>
      <div className={style.form}>
        <div className={style.header}>Связаться с нами</div>
        <hr className={style.line} />
        <input className={style.input} type="text" placeholder="Полная названия компании" />
        <input className={style.input} type="text" placeholder="Email адрес / Номер телефона" />
        <input
          className={style.formcomment}
          type="text"
          placeholder="Комментарий"
        />
        <div className={style.addfile}>
          <Image src={upload} />
          <p>Добавить файл</p>
        </div>
        <div className={style.addbutton}>Связаться с нами</div>
      </div>
    </div>
  )
}
export default ContactForm;
