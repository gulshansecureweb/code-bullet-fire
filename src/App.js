//Styles
import './assets/css/style.css';

//images
import bannerImg1 from './assets/img/meetup-logo.png';
import bannerImg2 from './assets/img/rocket.png';
import speaker_1 from './assets/img/speakers/speaker-1.png';
import speaker_2 from './assets/img/speakers/speaker-2.png';
import speaker_3 from './assets/img/speakers/speaker-3.png';
import speaker_4 from './assets/img/speakers/speaker-4.png';
import speaker_5 from './assets/img/speakers/speaker-5.png';
import speaker_6 from './assets/img/speakers/speaker-6.png';
import site_logo from './assets/img/site_logo.png';

//Components
import Footer from './components/Footer';
import Banner from './components/Banner';
import SiteHeader from './components/SiteHeader';
import ThreeGridSection from './components/ThreeGridSection';
import SixGridSection from './components/SixGridSection';
import TicketsSection from './components/TicketsSection';

function App() {

  const bannerInfo = () =>{
    return { 
      img1: bannerImg1,
      img2: bannerImg2,
      h1: 'Attend the most awaited Conference of 2015',
      h3: 'to start you up with your business!',
      h4: '20th to 22nd October, 2015',
      btnText: 'Buy Tickets Now',
      btnLink: '#'
    };
  }
  const bannerData = bannerInfo();

  const SixGridSectionInfo = () => {
    return { 
      img1: speaker_1,
      img2: speaker_2,
      img3: speaker_3,
      img4: speaker_4,
      img5: speaker_5,
      img6: speaker_6,
    };
  }
  const SixGridSectionData = SixGridSectionInfo();

  const SiteHeaderInfo = () => {
    return { 
      site_logo: site_logo,
    };
  }
  const SiteHeaderData = SiteHeaderInfo();

  
  return (
    <div className="App">
      <SiteHeader info={SiteHeaderData} />
      <Banner info={bannerData} />
      <div className="container">
        <div id="super-cool">
          <ThreeGridSection/>
        </div>
        <SixGridSection info={SixGridSectionData}/>
      </div>
      <TicketsSection />
      <Footer />
    </div>
  );
}

export default App;
