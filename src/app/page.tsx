import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="w-full h-auto">
      {/* fixed bg */}
      <div className="fixed ">
        <h1 className="text-[#333] text-5xl text-center pt-40">hellwewesda</h1>
      </div>
      <Hero />
      <div className="marquee">
        <span>The Best Digital Marketing AgencyThe Best Digital Marketing AgencyThe Best Digital Marketing AgencyThe Best Digital Marketing AgencyThe Best Digital Marketing AgencyThe Best Digital Marketing AgencyThe Best Digital Marketing AgencyThe Best Digital Marketing AgencyThe Best Digital Marketing Agency</span>
      </div>



    </div>
  );
}
