import Link from 'next/link'

import AllNewsItem from '../AllNewsItem'

import Data from '../Data/AllNewsData'
import { ArrowDown } from '@constants/icons'

import styles from './AllNews.module.css'

export default function AllNews() {
  return (
    <article className={styles.allNews}>
      <div className={styles.container}>
        <h1 className={styles.title}>Все новости</h1>
        <div className={styles.itemsContainer}>
          {Data.map((item, index) => (
            <AllNewsItem
              key={index}
              data={item}
              img={item.img}
              title={item.title}
              description={item.desc}
            />
          ))}
        </div>
        <div className={styles.seeAll}>
          <Link href="/blog">
            <p className={styles.link}>Посмотреть еще</p>
          </Link>
          <ArrowDown />
        </div>
      </div>
    </article>
  )
}
