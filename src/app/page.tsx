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
import Why from "./components/Why";

export default function Home() {
  return (
    <div className="w-full h-auto scroll-smooth">
      {/* fixed bg */}
      <div className="fixed-bg ">
        <h1 className="text-[#333] text-5xl text-center pt-40">**********</h1>
        <h1 className="text-[#333] text-5xl text-center pt-40">----------</h1>
      </div>
      <Hero />
      <Offer/>
      <Brands/>
      <About/>
      <CaseStudies/>
      <Testimonials/>
      <Pricing/>
      <Why/>
      <Blogs/>
      <Faq/> 
      <Contact/>



    </div>
  );
}
