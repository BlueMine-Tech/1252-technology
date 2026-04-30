import FinalCTASection from '../components/FinalCTASection';
import HeroSection from '../components/HeroSection';
import LifecycleAssuranceSection from '../components/LifecycleAssuranceSection';
import WhoWereBestForSection from '../components/WhoWereBestForSection';
import IndustriesWeSupport from './../components/IndustriesWeSupport';
import { Helmet } from "react-helmet-async";  // ← changed from react-helmet

function Home() {
  return (
    <>
      <Helmet>
        <title>1252 Technology Pte Ltd | IT Hardware & Network Solutions Singapore</title>
        <meta name="description" content="1252 Technology Pte Ltd is a leading IT hardware and network solutions provider in Singapore." />
        <meta property="og:title" content="1252 Technology pte ltd" />
        <link rel="canonical" href="https://www.1252technology.com/" />
      </Helmet>

      <HeroSection />
      <LifecycleAssuranceSection />
      <WhoWereBestForSection />
      <IndustriesWeSupport />
      <FinalCTASection />
    </>
  );
}

export default Home;