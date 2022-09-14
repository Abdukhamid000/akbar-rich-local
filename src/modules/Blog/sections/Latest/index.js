import LatestItem from '../LatestItem/LatestItem'
import Data from '@modules/Blog/sections/Data/LatestData'

import styles from './Latest.module.css'

export default function Latest() {
  return (
    <article className={styles.latest}>
      <div className={styles.container}>
        <h1 className={styles.title}>Последные новости</h1>
        <div className={styles.cardsContainer}>
          {Data.slice(0, 3).map((item, index) => (
            <LatestItem data={item} key={index} />
          ))}
        </div>
      </div>
    </article>
  )
}
