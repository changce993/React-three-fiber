import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { Center, Plane, shaderMaterial } from '@react-three/drei';
import { fragmentShader, vertexShader } from './shader';

const NoiseMaterial = shaderMaterial(
  {
    scale: 5,
    size: .1,
    density: 1,
    time: 0,
    bg: new THREE.Color('#111033'),
    yellow: new THREE.Color('#ffd600'),
    orange: new THREE.Color('#ff7300'),
  },
  vertexShader,
  fragmentShader
);

extend({ NoiseMaterial });

const Data = () => {
  const material = useRef();

  useFrame(({clock}) => {
    material.current.uniforms.time.value = Math.sin(
      (2 * Math.PI * clock.getElapsedTime()) / 10
    );
  });

  return (
    <Plane args={[15,15]}>
      <noiseMaterial
        ref={material}
        side={THREE.DoubleSide}
      />
    </Plane>
  )
}

const Index = () => {
  const [hidden, set] = useState()
  return (
    <Canvas camera={{ position: [0,0,10] }}>
      <color attach="background" args={["#111033"]}/>
      <Center>
        <Data/>
      </Center>
    </Canvas>
  )
}

export default Index
