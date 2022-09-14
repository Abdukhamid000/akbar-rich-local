import classes from './style.module.css'

const data = [
  {
    id: 1,
    header: 'Многолетний опыт',
    text: 'За годы существования компания AKBARR RICH зарекомендовала себя как надежного и ответственного ',
  },
  {
    id: 2,
    header: 'Многолетний опыт',
    text: 'За годы существования компания AKBARR RICH зарекомендовала себя как надежного и ответственного ',
  },
  {
    id: 3,
    header: 'Многолетний опыт',
    text: 'За годы существования компания AKBARR RICH зарекомендовала себя как надежного и ответственного ',
  },
  {
    id: 4,
    header: 'Многолетний опыт',
    text: 'За годы существования компания AKBARR RICH зарекомендовала себя как надежного и ответственного ',
  },
]

const Exprience = () => {
  return (
    <div className={classes.ExprienceSection}>
      <h2>Зоголовок</h2>
      <div className="row">
        {data.map((item) => (
          <div key={item.id} className={`col ${classes.exp_item}`}>
            <span></span>
            <h3>{item.header}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Exprience
