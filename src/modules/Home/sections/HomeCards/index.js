import React from 'react';

import Cards from '@modules/Blog/sections/Cards';
import data from '@modules/Blog/sections/Data/CardDatas';

import style from './homeCards.module.css';

export default function HomeCards() {
  return (
    <div className={'containerBig'}>
      <div className={style.homeCardsHeader}>
        <p className={style.homeCardTitle}>Зоголовок</p>
        <div>
          <div className={style.bottomLine}></div>
        </div>
      </div>
      <Cards data={data} />
    </div>
  )
}
