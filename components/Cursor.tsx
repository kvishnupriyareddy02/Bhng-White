"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let resetTimer: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      // Tilt glass based on movement direction
      if (e.movementX > 0) {
        setRotation(6);
      } else if (e.movementX < 0) {
        setRotation(-6);
      }

      clearTimeout(resetTimer);

      // Smoothly return upright when stopped
      resetTimer = setTimeout(() => {
        setRotation(0);
      }, 150);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(resetTimer);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        pointerEvents: "none",
        zIndex: 9999,

        transform: `
          translate(-50%, -50%)
          rotate(${rotation}deg)
        `,

        transition:
          "transform 180ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <img
        src="/cursor/bhang-glass.png"
        alt="Bhang glass cursor"
        style={{
          width: "55px",
          height: "55px",
          objectFit: "contain",

          filter:
            "drop-shadow(0 8px 14px rgba(0,0,0,0.28))",

          animation:
            "float 3s ease-in-out infinite",
        }}
      />

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-5px);
          }

          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
}