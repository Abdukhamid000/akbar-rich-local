import { ArrowIcon } from '@constants/icons'
import React from 'react'
import style from './style.module.css'

export default function PaginationView() {
  return (
    <div className={style.paginationContainer}>
      <div className={style.collector}>
        <div className={style.prevBtn}>
          <ArrowIcon />
        </div>
        <span className={style.activeStep}>1</span>
        <span>2</span>
        <span>3</span>
        <div>...</div>
        <span>23</span>
        <div className={`${style.nextBtn} ${style.activeBtn}`}>
          <ArrowIcon style={{ transform: 'rotate(180deg)' }} />
        </div>
      </div>
      <div className={style.exInfo}>Стр 1/30</div>
    </div>
  )
}
