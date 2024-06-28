import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function Particles({ count }) {
  const points = useRef();
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions.set([Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5], i * 3);
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    points.current.rotation.x = state.mouse.y * 0.5;
    points.current.rotation.y = state.mouse.x * 0.5;
  });

  return (
    <Points ref={points} positions={particles} stride={3} frustumCulled>
      <PointMaterial transparent color="#ffffff" size={0.01} sizeAttenuation={true} depthWrite={false} />
    </Points>
  );
}

const ParticleEffect = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <color attach="background" args={['#000000']} />
      <Particles count={5000} />
    </Canvas>
  );
};

export default ParticleEffect;