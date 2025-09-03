import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

function FloatingIcon({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
      floatingRange={[0, 0.5]}
    >
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[0.5]} />
        <meshStandardMaterial color={color} wireframe />
      </mesh>
    </Float>
  );
}

function RotatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={1}
    >
      <mesh ref={meshRef}>
        <torusGeometry args={[1.5, 0.3, 16, 100]} />
        <meshStandardMaterial color="#8B5CF6" wireframe />
      </mesh>
    </Float>
  );
}

const Scene3D = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#06B6D4" />
        
        <RotatingTorus />
        
        <FloatingIcon position={[-3, 2, 0]} color="#EC4899" />
        <FloatingIcon position={[3, -1, 0]} color="#06B6D4" />
        <FloatingIcon position={[2, 2, -1]} color="#8B5CF6" />
        <FloatingIcon position={[-2, -2, 0]} color="#F59E0B" />
      </Canvas>
    </div>
  );
};

export default Scene3D;