import About from "./components/About";
import Brands from "./components/Brands";
import Hero from "./components/Hero";
import Offer from "./components/Offer";

export default function Home() {
  return (
    <div className="w-full h-auto">
      {/* fixed bg */}
      <div className="fixed ">
        <h1 className="text-[#333] text-5xl text-center pt-40">**********</h1>
        <h1 className="text-[#333] text-5xl text-center pt-40">----------</h1>
        <h1 className="text-[#333] text-5xl text-center pt-40">==========</h1>
        <h1 className="text-[#333] text-5xl text-center pt-40">++++++++++</h1>
      </div>
      <Hero />
      <Offer/>
      <Brands/>
      <About/>
      <div className="h-screen">

      </div>



    </div>
  );
}
