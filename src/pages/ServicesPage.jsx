import FinalCTASection from "../components/FinalCTASection"
import CoreServicesSection from "../components/ServicesComponent/CoreServicesSection"
import IndustriesSection from "../components/ServicesComponent/IndustriesSection"
import ServicesHeroSection from "../components/ServicesComponent/Serviceshero"
import ServiceOfferingsSection from "../components/ServicesComponent/ServicesOffering"
import TechEcosystemSection from "../components/ServicesComponent/Techechosystem"

const ServicesPage = () => (
  <div>
 <CoreServicesSection/>
 <ServiceOfferingsSection/>
 <IndustriesSection/>
 <FinalCTASection/>
  </div>
)
export default ServicesPage