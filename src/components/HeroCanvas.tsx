"use client";

import { Canvas, useFrame, type RootState } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 600;

  const positions = useMemo(() => {
    const data = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;
      data[i3] = (Math.random() - 0.5) * 14;
      data[i3 + 1] = (Math.random() - 0.5) * 7;
      data[i3 + 2] = (Math.random() - 0.5) * 10;
    }
    return data;
  }, []);

  useFrame((state: RootState) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.06;
    pointsRef.current.rotation.x = Math.sin(t * 0.2) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#8fd0ff"
        size={0.05}
        opacity={0.6}
        transparent
        depthWrite={false}
      />
    </points>
  );
}

export default function HeroCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.7} />
        <ParticleField />
      </Canvas>
    </div>
  );
}
