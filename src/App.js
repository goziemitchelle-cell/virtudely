import react from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Services from "./component/Services";
import HowItWorks from "./component/HowItWorks";
import Testimonials from "./component/Testimonial";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
    </div>
  );
}

export default App;