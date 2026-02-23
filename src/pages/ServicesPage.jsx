import FinalCTASection from "../components/FinalCTASection"
import CoreServicesSection from "../components/ServicesComponent/CoreServicesSection"
import IndustriesSection from "../components/ServicesComponent/IndustriesSection"
import ServicesHeroSection from "../components/ServicesComponent/Serviceshero"
import TechEcosystemSection from "../components/ServicesComponent/Techechosystem"

const ServicesPage = () => (
  <div>
 <ServicesHeroSection/>
 <CoreServicesSection/>
 <IndustriesSection/>
 <TechEcosystemSection/>
 <FinalCTASection/>
  </div>
)
export default ServicesPage