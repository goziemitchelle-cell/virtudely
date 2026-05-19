import { Routes, Route } from "react-router-dom";

import MainLayout from "./layout/Mainlayout";

// pages/components
import Hero from "./component/Hero";
import Services from "./component/Services";
import HowItWorks from "./component/HowItWorks";
import Testimonials from "./component/Testimonial";
import About from "./component/AboutUs";
import ContactUs from "./component/ContactUs";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

// ✅ ADD THIS IMPORT
import ScrollToTop from "./ScrollToTop";

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <About />
      <ContactUs />
    </>
  );
}

function App() {
  return (
    <>
      {/* 🔥 THIS FIXES SCROLL ON ROUTE CHANGE */}
      <ScrollToTop />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />

        {/* PRIVACY POLICY */}
        <Route
          path="/privacy-policy"
          element={
            <MainLayout>
              <PrivacyPolicy />
            </MainLayout>
          }
        />

        {/* TERMS */}
        <Route
          path="/terms"
          element={
            <MainLayout>
              <Terms />
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;