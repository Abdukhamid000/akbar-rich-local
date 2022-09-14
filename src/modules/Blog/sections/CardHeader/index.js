import React from 'react'

import Link from 'next/link'

import classes from './CardHeader.module.css'

export default function CardHeader() {
  return (
    <>
      <div className={classes.cardTitle}>
        <h1 className={classes.title}>Зоголовок</h1>
        <Link href="/news" lassName={classes.link}>
          Смотреть все
        </Link>
      </div>
    </>
  )
}
