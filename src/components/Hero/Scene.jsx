import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function Cube() {
  return (
    <Float speed={2}>
      <mesh rotation={[10, 10, 0]}>
        <boxGeometry args={[2,2,2]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <Canvas style={{ height: "400px" }}>
      <ambientLight intensity={2} />
      <Cube />
    </Canvas>
  );
}