import React, { useRef, useState } from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import { Effects } from '../../effects/bloom';

const vw = window.innerWidth;
const vh = window.innerHeight;

const Box = ({ isClicked, setIsClicked }) => {
  const mesh = useRef();
  const [ isHovered, setIsHovered ] = useState(false);

  // useFrame(() => mesh.current.rotation.x = mesh.current.rotation.y += .01);
  useFrame(() => mesh.current.rotation.y += .01);

  const { color, scale, wireframe, position } = useSpring({
    color: isClicked ? "#F1F1F1" : "#FFAE00",
    scale: isHovered || isClicked ? [2,2,2] : [1,1,1],
    wireframe: !isClicked,
    // loop: { reverse: true },
    // from: { position: [-1, 0, 0] },
    // to: { position: [1, 0, 0] },
    // config: { duration: 2000 },
  })

  return (
    <animated.mesh
      position={position}
      scale={scale}
      rotation={[0,0,Math.PI/4]}
      ref={mesh}
      castShadow
      onClick={() => setIsClicked(!isClicked)}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <boxGeometry attach="geometry" args={[1,1,.1, 3,3,1]}/>
      <animated.meshStandardMaterial
        color={color}
        wireframe={false}
        wireframeLinewidth={5}
        wireframeLinejoin="bevel"
      />
    </animated.mesh>
  )
}

const App = () => {
  const [ isClicked, setIsClicked ] = useState(false);
  return (
    <>
      <Canvas>
        <color attach="background" args={["#06092c"]}/>
        <perspectiveCamera
          fov={75}
          aspect={vw/vh}
          near={0.1}
          far={100}
          position={[0,0,10]}
        />
        <OrbitControls minDistance={5} maxDistance={10}/>
        <pointLight position={[3,3,3]}/>
        <ambientLight/>
        <Box isClicked={isClicked} setIsClicked={setIsClicked}/>
        {isClicked && <Effects/>}
      </Canvas>
    </>
  )
}

export default App
