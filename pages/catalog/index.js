import PaginationView from '@components/PaginationView'
import ProductFilter from '@components/ProductFilter'
import ProductView from '@components/ProductView'
import React from 'react'
import style from './style.module.css'

export default function index() {
  return (
    <div className="container">
      <div className={`row ${style.header}`}>
        <div className="col-12 col-md-6">
          <h1>Премиум двери</h1>
        </div>
        <div className="col-12 col-md-6">
          <span>Найдено: 42 дверей</span>
        </div>
      </div>
      <ProductFilter />

      <div className="row product">
        {Array.from(Array(12).keys()).map((itm) => {
          return (
            <div key={itm} className="col-12 col-md-6 col-lg-4">
              <ProductView
                imageUrl={[
                  '/images/redDoorImg.png',
                  '/images/whiteDoorImg.png',
                  '/images/door.png',
                ]}
              />
            </div>
          )
        })}
      </div>

      <PaginationView />
    </div>
  )
}
