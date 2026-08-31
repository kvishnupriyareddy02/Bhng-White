"use client";

import Scene from "@/components/Scene";

export default function Hero() {
  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/textures/graffiti.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* 3D layer */}
      <div className="absolute inset-0 z-10">
        <Scene />
      </div>

      {/* Text layer */}
      <div className="relative z-20 h-screen flex flex-col items-center justify-center text-WHTE">
        <h1 className="text-8xl font-serif">
          B & W
        </h1>

        <p className="mt-10 tracking-[1rem]">
          BHNG & WHTE
        </p>
      </div>

    </section>
  );
}