import style from './style.module.css'

const ContactInfo = () => {
    return(
        <div>
              <div className={style.headercard}>
              <h1 className={style.header}>Зоголовок</h1>
              <p className={style.headertext}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation Amet minim mollit non deserunt ullamco est sit
                aliqua dolor do amet sint. Velit officia consequat duis enim
                velit mollit. Exercitation Amet minim mollit non deserunt
                ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. Exercitation{' '}
              </p>
              <div className={style.headerbtn}>
                <div className={style.btnleft}>Наши магазины</div>
                <div className={style.btnright}>Наши магазины</div>
              </div>
            </div>
        </div>
    )
}
export default ContactInfo;