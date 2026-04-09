import FinalCTASection from '../components/FinalCTASection';
import HeroSection from '../components/HeroSection';
import LifecycleAssuranceSection from '../components/LifecycleAssuranceSection';
import WhoWereBestForSection from '../components/WhoWereBestForSection';
import IndustriesWeSupport from './../components/IndustriesWeSupport';
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.1252technology.com/" />
      </Helmet>

      {/* your existing code */}
    </>
  );
}

export default Home;

function HomePage() {
  return (
    <div>
      <HeroSection />
      <LifecycleAssuranceSection/>

 <FinalCTASection/>
 
    </div>
  );
}

export default HomePage;
