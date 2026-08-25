"use client";

import { useState } from "react";

export default function FashionReveal() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  return (
    <section
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
      onMouseMove={(e) => {
        setMouse({
          x: e.clientX,
          y: e.clientY,
        });
      }}
    >

      {/* Human Model Area */}
      <div
        className="
        relative
        w-[350px]
        h-[600px]
        flex
        items-center
        justify-center
        "
      >

        {/* Base Human */}
        <img
          src="/model/human-base.png"
          alt="model"
          className="
          absolute
          w-full
          h-full
          object-contain
          "
        />


        {/* Dark Bhang Clothing */}
        <img
          src="/model/dark-clothes.png"
          alt="dark clothing"
          className="
          absolute
          w-full
          h-full
          object-contain
          opacity-0
          transition-opacity
          duration-300
          "
        />


        {/* White Printed Clothing */}
        <img
          src="/model/white-clothes.png"
          alt="white clothing"
          className="
          absolute
          w-full
          h-full
          object-contain
          opacity-0
          transition-opacity
          duration-300
          "
        />

      </div>

    </section>
  );
}