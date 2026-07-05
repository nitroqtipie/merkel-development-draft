import InvestmentSection from "./components/merkel/InvestmentSection";
import ServicesSection from "./components/merkel/ServicesSection";
import Navbar from "./components/merkel/Navbar";
import HeroSection from "./components/merkel/HeroSection";
import AboutSection from "./components/merkel/AboutSection";
import ProcessSection from "./components/merkel/ProcessSection";
import ContactSection from "./components/merkel/ContactSection";
import Footer from "./components/merkel/Footer";



function App() {

  return (
    <div className="bg-[#0F0F0F] min-h-screen">

      <Navbar />

      <HeroSection />

      <AboutSection />

      <ServicesSection />

      <InvestmentSection />

      <ProcessSection />

      <ContactSection />

      <Footer />

    </div>
  );

}

export default App;