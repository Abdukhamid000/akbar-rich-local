import mapboxgl from 'mapbox-gl'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import Button from '@components/Button'
import { addressData, regionData } from '@constants/map'
import { DirectionIcon, LocationIcon } from '@constants/icons/navigation'
import { ShareIcon, ZoomInIcon, ZoomOutIcon } from '@constants/icons/action'

import styles from './style.module.css'

mapboxgl.accessToken =
  'pk.eyJ1IjoiaXNtb25zYW5qYXIiLCJhIjoiY2wyOHRqazVsMGNzeDNlcDF5OXZscWNpYSJ9.p9yeEQUgJis-43VOykElpg'

export default function MapExample() {
  const map = useRef(null)
  const mapContainer = useRef(null)
  const [values, setValues] = useState('')
  const [open, setOpen] = useState(false)

  const [selectRegion, setSelectRegion] = useState('Select region')

  const handleZoomIn = () => {
    map.current.zoomIn()
  }
  const handleZoomOut = () => {
    map.current.zoomOut()
  }

  useEffect(() => {
    if (map.current) return

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 12,
      center: [69.28, 41.31],
    })

    map.current.addControl(
      new mapboxgl.NavigationControl({ showCompass: false, showZoom: false })
    )

    addressData.forEach((i) => {
      let marker = new mapboxgl.Marker({ color: '#ff0000' })
        .setLngLat(i?.coordinates)
        .addTo(map.current)

      marker.getElement().addEventListener('click', () => {
        setValues(i)
      })
    })
  }, [])

  const handleValue = (e, coordinate) => {
    map.current.setCenter(coordinate)
    setSelectRegion(e.target.textContent)
    setOpen(false)
  }

  return (
    <section className={styles.map_box}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div ref={mapContainer} className={styles.map}></div>
          <div className={styles.tab}>
            <div className={styles.dropdown}>
              <div
                className={styles.dropdown_box}
                onClick={() => setOpen(!open)}
              >
                {selectRegion}
                {/* <ArrowLeftIcon /> */}
              </div>
              {open && (
                <div className={styles.options}>
                  {regionData.map((i, index) => (
                    <div key={index} className={styles.option}>
                      <span
                        className={styles.option_value}
                        onClick={(e) => handleValue(e, i.coordinates)}
                      >
                        {i.region}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <span onClick={handleZoomIn} className={styles.icon}>
              <ZoomInIcon />
            </span>
            <span onClick={handleZoomOut} className={styles.icon}>
              <ZoomOutIcon />
            </span>
            <div className={styles.route}>
              <DirectionIcon />
              <span>Build route</span>
            </div>
          </div>
        </div>
      </div>
      {values && (
        <>
          <h2 className={styles.title}>Головной офис</h2>
          <div className={styles.map_data}>
            <div className={styles.office_img}>
              <Image src={values?.img || ''} width={440} height={510} alt="" />
            </div>
            <div>
              <h3 className={styles.row}>
                <LocationIcon /> {values.location}
              </h3>
              <div className={styles.col}>
                <h4 className={styles.content_title}>Ориентир:</h4>
                <p>{values.landMark}</p>
              </div>
              <div className={styles.col}>
                <h4 className={styles.content_title}>Номер для связи:</h4>
                <p>
                  {values.contacts.map((i) => (
                    <span key={i}>{i}</span>
                  ))}
                </p>
              </div>
              <div className={styles.col}>
                <h4 className={styles.content_title}>Рабочий график:</h4>
                <p>
                  {values.workSchedule.map((i) => (
                    <span key={i}>{i}</span>
                  ))}
                </p>
              </div>
              <div className={styles.btn}>
                <Button text="Построить маршрут" />
                <ShareIcon />
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}
