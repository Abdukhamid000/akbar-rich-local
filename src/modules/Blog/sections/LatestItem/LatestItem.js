import Link from 'next/link'
import Image from 'next/image'

import styles from './LatestItem.module.css'

export default function LatestItem({ data }) {
  const { id, link, img, date, title } = data
  return (
    <article className={styles.item}>
      <Link href={link+id}>
        <div className={styles.container}>
          <div className={styles.itemImageContainer}>
            <Image
              className={styles.itemImage}
              src={img}
              width={384}
              height={265}
            />
          </div>
          <div className={styles.itemContent}>
            <p className={styles.itemDate}>{date}</p>
            <h1 className={styles.itemTitle}>{title}</h1>
          </div>
        </div>
      </Link>
    </article>
  )
}
