import AllNews from "@modules/Blog/sections/AllNews"
import Latest from "@modules/Blog/sections/Latest"
import styles from "./BlogNews.module.css"

export default function BlogNews() {
  return (
    <div className={styles.blogNews}>
        <div className={styles.container}>
            <Latest />
            <AllNews />
        </div>
    </div>
  )
}
