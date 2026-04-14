"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function SaddleSurface() {
    const groupRef = useRef<THREE.Group>(null);

    const geometry = useMemo(() => {
        // Parabolide hiperbolico (silla de montar) - Hyperbolic paraboloid (saddle)
        const geo = new THREE.PlaneGeometry(50, 50, 70, 70);
        const pos = geo.attributes.position;

        for (let i = 0; i < pos.count; i++) {
            const x = pos.getX(i);
            const y = pos.getY(i);
            // z = (y^2 - x^2)
            const z = (Math.pow(y, 2) - Math.pow(x, 2)) * 0.015;
            pos.setZ(i, z);
        }
        geo.computeVertexNormals();
        return geo;
    }, []);

    useFrame((state) => {
        if (groupRef.current) {
            const t = state.clock.getElapsedTime();
            // Rotar lentamente
            groupRef.current.rotation.z = t * 0.1;
            // Leve oscilacion
            groupRef.current.position.y = Math.sin(t * 0.3) * 0.5 - 2;
        }
    });

    return (
        <group ref={groupRef} rotation={[-Math.PI / 2.5, 0, 0]}>
            {/* Puntos brillantes para los vertices */}
            <points geometry={geometry}>
                <pointsMaterial
                    color="#00a3e0"
                    size={0.15}
                    transparent
                    opacity={0.8}
                />
            </points>
            {/* Wireframe para darle un look de ingenieria/matematicas */}
            <mesh geometry={geometry}>
                <meshBasicMaterial
                    color="#0085ca"
                    wireframe={true}
                    transparent
                    opacity={0.2}
                />
            </mesh>
        </group>
    );
}

export default function HeroCanvas() {
    return (
        <div className="absolute inset-0 bg-gradient-to-b from-[#020b14] to-[#0a192f] z-0 overflow-hidden pointer-events-none">
            <Canvas camera={{ position: [0, 5, 20], fov: 60 }} dpr={[1, 2]}>
                <color attach="background" args={['#020b14']} />
                <ambientLight intensity={0.5} />
                <SaddleSurface />
            </Canvas>
        </div>
    );
}
