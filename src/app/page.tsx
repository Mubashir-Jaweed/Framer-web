import Hero from "./components/Hero";
import Marquee from "./components/ui/Marquee";

export default function Home() {
  return (
    <div className="w-full h-auto">
      {/* fixed bg */}
      <div className="fixed ">
        <h1 className="text-[#333] text-5xl text-center pt-40">hellwewesda</h1>
      </div>
      <Hero />
      <Marquee/>



    </div>
  );
}
