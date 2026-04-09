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
        <title>Best IT hardware solutions in Singapore | 1252 Technology</title>

        <meta
          name="description"
          content="We Power Modern Businesses with Trusted Enterprise IT Infrastructure & Network Solutions 12 Months. 52 Weeks. Always On."
        />

        <meta
          name="keywords"
          content="technology solutions Singapore, IT services Singapore, digital transformation Singapore, enterprise technology consulting, technology strategy Singapore, managed IT services Singapore, network infrastructure solutions, technology consulting firms in Singapore, best IT support company Singapore, how to choose IT solutions provider Singapore, cloud migration strategy for SMEs Singapore, AI solutions for businesses Singapore, IoT solutions Singapore, digital transformation for SMEs Singapore, IT hardware solutions in Singapore, technology consultancy Singapore CBD, tech services in Singapore, top IT hardware companies in Singapore, best IT firms in Singapore 2026, top software companies Singapore, leading tech consultants Singapore, IT solutions Singapore, business technology Singapore, IT services Singapore, digital solutions Singapore, technology company Singapore, enterprise IT Singapore"
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
