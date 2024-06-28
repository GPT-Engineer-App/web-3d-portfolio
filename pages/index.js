import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div style={{ height: '100vh', background: '#000' }}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}