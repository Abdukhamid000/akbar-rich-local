import Hero from '@modules/Blog/sections/Hero'
import Text from '@modules/Blog/sections/Text'
import CardHeader from '@modules/Blog/sections/CardHeader'
import Cards from '@modules/Blog/sections/Cards'
import Data from '@modules/Blog/sections/Data/CardDatas'

import classes from './Blog.module.css'

export default function Blog() {
  return (
    <div className={classes.blog}>
      <div className={classes.container}>
        <Hero />
        <Text />
        <CardHeader />
        <Cards data={Data} />
      </div>
    </div>
  )
}
