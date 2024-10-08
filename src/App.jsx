import Contact from "./component/Contact";
import Faq from "./component/Faq";
import Features from "./component/Features";
import Footer from "./component/Footer";
import GetStarted from "./component/GetStarted";
import GrabYourDreamProperty from "./component/GrabYourDreamProperty";
import Hero from "./component/Hero";
import InnovativeTools from "./component/InnovativeTools";
import Navbar from "./component/Navbar";
import TeamSection from "./component/TeamSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <GrabYourDreamProperty />
      <InnovativeTools />
      <GetStarted />
      <Faq />
      <TeamSection />
      <Contact></Contact>
      <Footer />
    </>
  );
}

export default App;
