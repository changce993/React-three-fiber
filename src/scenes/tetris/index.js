import React, { useMemo, useState } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Extrude, Center, OrbitControls } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

const SIDE = 10;
const extrudeConfig = {
  steps: 10,
  depth: 1,
  bevelEnabled: false
};

const Z = ({  }) => {
  const [ isClicked, setIsClicked ] = useState(false);

  const shape = useMemo(() => {
    const _shape = new THREE.Shape();
    
    _shape.moveTo(0,0);
    _shape.lineTo(SIDE,0);
    _shape.lineTo(SIDE,SIDE*2)
    _shape.lineTo(0,SIDE*2)
    _shape.lineTo(0,SIDE*3)
    _shape.lineTo(-SIDE,SIDE*3)
    _shape.lineTo(-SIDE,SIDE)
    _shape.lineTo(0,SIDE)

    return _shape;
  }, []);

  const { position, rotation, color } = useSpring({
    position: isClicked ? [SIDE*1.5,SIDE*1.5,0] : [0,0,0],
    rotation: isClicked ? [0,Math.PI*2,Math.PI/2] : [0,0,0],
    color: isClicked ? "#ff7300" : "#ffd600"
  })

  return (
    <animated.mesh
      position={position}
      rotation={rotation}
      onClick={() => setIsClicked(!isClicked)}
    >
      <Extrude args={[shape, extrudeConfig]}>
        <animated.meshPhysicalMaterial
          flatShading
          color={color}
          thickness={SIDE}
          roughness={.25}
          clearcoat={1}
          clearcoatRoughness={1}
          transmission={.8}
          ior={1.25}
          attenuationTint="#fff"
          attenuationDistance={0}
        />
      </Extrude>
    </animated.mesh>
  )
}

const L = ({  }) => {
  const [ isClicked, setIsClicked ] = useState(false);

  const shape = useMemo(() => {
    const _shape = new THREE.Shape();
    
    _shape.moveTo(0,0);
    _shape.lineTo(0, SIDE)
    _shape.lineTo(-SIDE, SIDE)
    _shape.lineTo(-SIDE, SIDE*3)
    _shape.lineTo(-SIDE*2,SIDE*3)
    _shape.lineTo(-SIDE*2,0)

    return _shape;
  }, []);

  const { position, rotation, color } = useSpring({
    position: isClicked ? [SIDE*1.5,SIDE*1.5,0] : [0,0,0],
    rotation: isClicked ? [0,Math.PI*2,Math.PI/2] : [0,0,0],
    color: isClicked ? "#red" : "#blue"
  })

  return (
    <animated.mesh
      position={position}
      rotation={rotation}
      onClick={() => setIsClicked(!isClicked)}
    >
      <Extrude args={[shape, extrudeConfig]}>
        <animated.meshPhysicalMaterial
          flatShading
          color={color}
          thickness={SIDE}
          roughness={.25}
          clearcoat={1}
          clearcoatRoughness={1}
          transmission={.8}
          ior={1.25}
          attenuationTint="#fff"
          attenuationDistance={0}
        />
      </Extrude>
    </animated.mesh>
  )
}

const Index = ({  }) => {
  const [ isClicked, setIsClicked ] = useState(false);

  return (
    <Canvas camera={{ position: [0,0,50] }} onClick={() => setIsClicked(!isClicked)}>
      <color attach="background" args={["#06092c"]}/>
      <pointLight position={[-20,10,50]}/>
      {/* <gridHelper
        args={[500,100,"#4D089A", "#4D089A"]}
        position={[0,0,0]}
        rotation={[Math.PI / 2,0,0]}
      /> */}
      <Center>
        <Z isClicked={isClicked}/>
        <L isClicked={isClicked}/>
      </Center>
      <OrbitControls/>
    </Canvas>
  )
}

export default Index
