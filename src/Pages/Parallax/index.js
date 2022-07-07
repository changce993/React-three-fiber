import React, { useRef } from 'react'
import Parallax from 'parallax-js'

const Index = () => {
  const scene = useRef();
  const parallaxInstance = new Parallax(scene.current);
  return (
    <div ref={scene}>
      <img data-depth="0.6" src="https://images.pexels.com/photos/9584136/pexels-photo-9584136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
    </div>
  )
}

export default Index
