import ApplicationCard from '@components/ForPartners/ApplicationCard'
import Contact from '@components/ForPartners/Contact'
import Exprience from '@components/ForPartners/Exprience'
import Flag from '@components/ForPartners/Flag'
import Partners from '@components/ForPartners/Partners'

const ForPartners = () => {
  return (
    <>
      <div
        className="container"
        style={{
          marginTop: '75px',
        }}
      >
        <Partners />
        <Exprience />
      </div>
      <Flag />
      <ApplicationCard />
      <Contact />
    </>
  )
}

export default ForPartners
