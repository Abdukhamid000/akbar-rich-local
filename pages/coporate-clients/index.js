import OurTeam from '@components/CoporateClients/OurTeam'
import WorkingTogether from '@components/CoporateClients/WorkingTogether'
import OurPartners from '@components/CoporateClients/OurPartnersCorporate'
import Showcase from '@components/CoporateClients/Showcase'
import CooporateContact from '@components/CoporateClients/CoporateContact'

const CoporateClientsPage = () => {
  return (
    <>
      <Showcase />
      <div className="container">
        <WorkingTogether />
        <OurPartners />
      </div>
      <OurTeam />
      <CooporateContact />
    </>
  )
}

export default CoporateClientsPage
