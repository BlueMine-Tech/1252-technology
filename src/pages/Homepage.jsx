import FinalCTASection from '../components/FinalCTASection';
import HeroSection from '../components/HeroSection';
import LifecycleAssuranceSection from '../components/LifecycleAssuranceSection';
import WhoWereBestForSection from '../components/WhoWereBestForSection';
import IndustriesWeSupport from './../components/IndustriesWeSupport';
import { Helmet } from "react-helmet";

import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Best Logo & Web Design Services in Tamil Nadu | 1252 Technology</title>

        <meta
          name="description"
          content="1252 Technology offers professional logo design, branding, and web design services in Tamil Nadu. Build your brand with us."
        />

        <meta
          name="keywords"
          content="logo design, web design, branding, graphic designer tamil nadu, business branding india"
        />

        <link rel="canonical" href="https://www.1252technology.com/" />
      </Helmet>

      {/* your existing code */}
    </>
  );
}

export default Home;

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
