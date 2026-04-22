import { Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import Hero from "./component/Hero";
import Services from "./component/Services";
import HowItWorks from "./component/HowItWorks";
import Testimonials from "./component/Testimonial";
import About from "./component/AboutUs";
import ContactUs from "./component/ContactUs";
import Footer from "./component/Footer";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

function App() {
  return (
    <Routes>
      {/* HOME PAGE */}
      <Route
        path="/"
        element={
          <div>
            <Header />
            <Hero />
            <Services />
            <HowItWorks />
            <Testimonials />
            <About />
            <ContactUs />
            <Footer />
          </div>
        }
      />

      {/* EXTRA PAGES */}
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
}

export default App;