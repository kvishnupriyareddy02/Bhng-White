"use client";

import { useGLTF } from "@react-three/drei";

export default function HumanModel() {
  const { scene } = useGLTF("/human.glb");

  return (
    <primitive
  object={scene}
  scale={1}
  position={[0, -1.2, 0]}
/>
  );
}

useGLTF.preload("/human.glb");