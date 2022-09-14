import Image from 'next/image'

import location from 'public/images/location.svg'
import message from 'public/images/message.svg'
import phone from 'public/images/phone.svg'

import style from './style.module.css'

const ContactMap = () => {
  return (
    <div>
      <div className={style.mapwrap}>
        <iframe
          width="100%"
          height="407"
          // frameborder="0"
          scrolling="no"
          // marginheight="0"
          // marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Akbar%20rich%20+(Akbar%20rich)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <div className={style.mapinfo}>
          <div className={style.office}>
            <Image src={location} />
            <p className={style.infotitle}>Головный офис</p>
            <p className={style.info}>Кичик Халка йули 24</p>
          </div>
          <div className={style.number}>
            <Image className={style.phoneicon} src={phone} />
            <p className={style.infotitle}>Номер телефона</p>
            <p className={style.info}>+998 (97) 344-24-17</p>
          </div>
          <div className={style.pochta}>
            <Image src={message} />
            <p className={style.infotitle}>Электр, почта</p>
            <p className={style.info}>akbar-rich@mail.ru</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMap
