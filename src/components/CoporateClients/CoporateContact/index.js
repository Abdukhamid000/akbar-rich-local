import React from 'react'
import Image from 'next/image'
import assign from 'public/images/assign.png'
import classes from './style.module.css'
import Button from '@components/Button'
import Link from 'next/link'

const CooporateContact = () => {
  return (
    <div className={`container ${classes.contactSection}`}>
      <div className={`${classes.sm} row`}>
        <div className="col">
          <Image src={assign} alt="" />
        </div>
        <div
          className="col"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
          }}
        >
          <h2>Зоголовок</h2>
          <p>
            Eсли у вас есть какие-либо предложения или <br />
            вопросы, вы можете связаться с нами через кнопку ниже
          </p>
          <Link href="/contact">
            <a>
              <Button width="270px" mt="20px" text="Связаться с нами" />
            </a>
          </Link>
        </div>
      </div>
      {/* <div className={classes.info}>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit amet sint. Velit sit
          aliqua dolor do amet sint. Velit officia consequat duis enim velit
          amet sint. Velit sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit amet sint. Velit
        </p>
      </div> */}
    </div>
  )
}

export default CooporateContact
