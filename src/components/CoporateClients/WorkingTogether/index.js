import classes from './style.module.css'
import work from 'public/images/work.png'
import Image from 'next/image'

const info = [
  {
    id: 1,
    icon: work,
    text: 'Сервисное обслуживание на уровне мировых стандартов',
  },
  {
    id: 2,
    icon: work,
    text: 'Сервисное обслуживание на уровне мировых стандартов',
  },
  {
    id: 3,
    icon: work,
    text: 'Сервисное обслуживание на уровне мировых стандартов',
  },
  {
    id: 4,
    icon: work,
    text: 'Сервисное обслуживание на уровне мировых стандартов',
  },
  {
    id: 5,
    icon: work,
    text: 'Сервисное обслуживание на уровне мировых стандартов',
  },
  {
    id: 6,
    icon: work,
    text: 'Сервисное обслуживание на уровне мировых стандартов',
  },
]

const WorkingTogether = () => {
  return (
    <section className={classes.opportunitesSection}>
      <h2>Преимущества работы с нами</h2>
      <div className={classes.opportunites}>
        {info.map((item) => (
          <div key={item.id}>
            <span>
              <Image src={item.icon} alt="" />
            </span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkingTogether
