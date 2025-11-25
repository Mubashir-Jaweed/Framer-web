import About from "./components/About";
import Blogs from "./components/Blogs";
import Brands from "./components/Brands";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Offer from "./components/Offer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/ui/Navbar";
import Why from "./components/Why";

export default function Home() {
  return (
    <div className="w-full h-auto scroll-smooth">
      {/* fixed bg */}
      <div className="fixed-bg ">
       
      </div>
      <Navbar/>
      {/* <Hero /> */}
      <Offer/>
      <Brands/>
      <About/>
      <CaseStudies/>
      <Testimonials/>
      <Pricing/>
      <Why/>
      <Blogs/>
      {/* <Faq/>  */}
      {/* <Contact/> */}



    </div>
  );
}
