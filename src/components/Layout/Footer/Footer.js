import React from 'react'
import cls from './Footer.module.css'

import Image from 'next/image'
import Link from 'next/link'
import { data, secondData } from './data'
import {
  Facebook,
  Humo,
  Instagram,
  PayMe,
  SmallPhone_icon,
  Visa,
  Youtube,
} from '@constants/icons'

const Footer = () => {
  return (
    <footer className={cls.footer}>
      <div className={cls.footerContainer}>
        <div className={cls.footerMain}>
          <div className={cls.footerMain_payment}>
            <Link href={'/'} passHref>
              <Image
                src="/akbarRich_logo.svg"
                alt="me"
                width="145"
                height="72"
              />
            </Link>
            <p className={cls.textGray}>
              Amet minim mollit non deserunt
              <br />
              ullamco est sit aliqua dolor do amet
              <br /> sint. Velit officia consequat duis enim
            </p>
            <div className={cls.payment_methods}>
              <div>
                <Link href="/">
                  <Humo />
                </Link>
              </div>
              <div>
                <Link href="/">
                  <PayMe />
                </Link>
              </div>
              <div>
                <Link href="/">
                  <Visa />
                </Link>
              </div>
            </div>
          </div>

          <div className={cls.footerColumn}>
            <h5 className={cls.columnTitle}>Компании</h5>
            {data.map((item, index) => {
              return (
                <Link href={item.path} key={index} passHref>
                  <span className={`${cls.textGray16} ${cls.hoverEffect}`}>
                    {item.title}
                  </span>
                </Link>
              )
            })}
          </div>

          <div className={cls.footerColumn}>
            <h5 className={cls.columnTitle}>Сервисы</h5>
            {secondData.map((item, index) => {
              return (
                <Link href={item.path} key={index} passHref>
                  <span className={`${cls.textGray16} ${cls.hoverEffect}`}>
                    {item.title}
                  </span>
                </Link>
              )
            })}
          </div>

          <div className={cls.footerColumn}>
            <h5 className={cls.columnTitle}>График работы</h5>
            <div>
              <span className={cls.textGray16}>
                Отдел прадаж: <br />
                Пн - Пя с 9.00 до 18.00 <br />
                Сб - Вс с 10.00 до 18.00
              </span>
            </div>
            <div>
              <span className={cls.textGray16}>
                Отдел дизайна: <br />
                Пн - Сб с 9.00 до 18.00{' '}
              </span>
            </div>
          </div>

          <div className={cls.footerColumn}>
            <h5 className={cls.columnTitle}>Call - Центр</h5>
            <div>
              <span className={cls.textWhite16}>
                <SmallPhone_icon /> +998 97 344 24 17
                <br />
                <SmallPhone_icon /> +998 97 344 24 17
              </span>
            </div>
            <button className={`${cls.btn} ${cls.btn16}`}>
              Связаться с нами
            </button>
            <div className={cls.socialMedia}>
              <div className={cls.btn}>
                <Link href="/">
                  <Instagram />
                </Link>
              </div>
              <div className={cls.btn}>
                <Link href="/">
                  <Facebook />
                </Link>
              </div>
              <div className={cls.btn}>
                {' '}
                <Link href="/">
                  <Youtube />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr className={cls.hr_rule} />
        <div className={cls.footer_bottom}>
          <p className={`${cls.textGray} ${cls.hoverEffect}`}>
            © Все права защищены. AKBAR RICH
          </p>
          <p className={`${cls.textGray} ${cls.hoverEffect}`}>
            Разработано компанией: nolbir
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
