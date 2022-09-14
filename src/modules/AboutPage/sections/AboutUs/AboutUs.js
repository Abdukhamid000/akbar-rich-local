// Imported files
import AboutExperience from '@modules/AboutPage/sections/AboutExperience'
import OurTeam from '@modules/AboutPage/sections/OurTeam/OurTeam'
import AboutSecondSection from '@modules/AboutPage/sections/AboutSecondSection'
import OurWorks from '@modules/AboutPage/sections/OurWorks'
import OurPartners from '@modules/AboutPage/sections/OurPartners'
import OurAchievments from '@modules/AboutPage/sections/OurAchievments'
import AboutVideo from '@modules/AboutPage/sections/AboutVideo'
import OurHistory from '@modules/AboutPage/OurHistory'

// Images
import certificate from '@assets/images/doc.png'
import headingImg from '@assets/images/Softs.svg'

// Styles
import classes from './AboutUs.module.css'

const AboutUsPage = () => {
  const data = [
    {
      id: 1,
      number: '01',
      image: headingImg,
      title: 'Зоголовок',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velitAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit',
    },
    {
      id: 2,
      number: '02',
      image: headingImg,
      title: 'Зоголовок',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velitAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit',
    },
    {
      id: 3,
      number: '03',
      image: headingImg,
      title: 'Зоголовок',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velitAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit',
    },
  ]

  const certificates = [
    { id: 1, image: certificate },
    { id: 2, image: certificate },
    { id: 3, image: certificate },
  ]

  return (
    <section>
      <div className={classes.aboutBgImg}>
        <h1 className={classes.aboutTitle}>О компании </h1>
      </div>
      <AboutSecondSection />
      <OurWorks data={data} />
      <OurHistory />
      <AboutExperience />
      <OurTeam />
      <OurPartners />
      <OurAchievments certificates={certificates} />
      <AboutVideo />
    </section>
  )
}

export default AboutUsPage
