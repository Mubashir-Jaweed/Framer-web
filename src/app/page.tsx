import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="w-full h-auto">
      {/* fixed bg */}
      <div className="fixed">
        <h1 className="text-[#333] text-5xl text-center pt-40"></h1>
      </div>
      <Hero/>

      
      
    </div>
  );
}
