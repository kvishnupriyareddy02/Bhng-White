"use client";

import Scene from "./Scene";

export default function SplitHero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Left Background */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url('/textures/graffiti.jpg')",
        }}
      />

      {/* Right Background */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[#f5f1e8]" />

      {/* Left Text */}
      <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
        <h1
          className="text-WHTE text-7xl font-bold uppercase leading-none"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          BHNG
        </h1>
      </div>

      {/* Right Text */}
      <div className="absolute left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
        <h1
          className="text-black text-7xl font-bold uppercase leading-none"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          WHTE
        </h1>
      </div>

      {/* Human */}
      <div className="absolute inset-0 z-20">
        <Scene />
      </div>

    </section>
  );
}