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
  <title>1252 Technology pte ltd</title>
  <meta
    name="description"
    content="1252 Technology provides reliable IT solutions and business technology services in Singapore."
  />

        <meta
          name="keywords"
          content="Ubiquiti reseller Singapore, MikroTik supplier Singapore, industrial router Singapore, Teltonika distributor Singapore, IT hardware procurement Singapore SME, it support services singapore, it hardware support, technology solutions, solution in technology, solutions and technology, solutions of technology, it solution singapore, technology solutions Singapore, IT services Singapore, digital transformation Singapore, enterprise technology consulting, technology strategy Singapore, managed IT services Singapore, network infrastructure solutions, technology consulting firms in Singapore, best IT support company Singapore, how to choose IT solutions provider Singapore, cloud migration strategy for SMEs Singapore, AI solutions for businesses Singapore, IoT solutions Singapore, digital transformation for SMEs Singapore, IT hardware solutions in Singapore, technology consultancy Singapore CBD, tech services in Singapore, top IT hardware companies in Singapore, best IT firms in Singapore 2026, top software companies Singapore, leading tech consultants Singapore, IT solutions Singapore, business technology Singapore, IT services Singapore, digital solutions Singapore, technology company Singapore, enterprise IT Singapore"
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
