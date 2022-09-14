import React from 'react'

import css from './page-header.module.css'

const header = () => {
  return (
    <div className={`${css['header']}`}>
      <h1 className={css['heading_big']}>Предоставляемые Услуги</h1>
    </div>
  )
}

export default header
