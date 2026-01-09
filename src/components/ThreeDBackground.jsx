import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Torus } from "@react-three/drei";

const ThreeDBackground = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <Torus args={[1.5, 0.3, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#dc2626"
          emissive="#dc2626"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.6}
        />
      </Torus>
    </mesh>
  );
};

export default ThreeDBackground;
