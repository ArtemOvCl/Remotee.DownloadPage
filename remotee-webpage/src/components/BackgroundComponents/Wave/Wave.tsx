import React, {useRef} from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { pingpong } from 'three/src/math/MathUtils.js';

const Wave = () => {

const meshRef = useRef<THREE.Mesh>(null!);
const geometryRef = useRef<THREE.BufferGeometry>(null!);

useFrame(({clock}) => {
    const time = clock.getElapsedTime();
    const positions = geometryRef.current.attributes.position.array as Float32Array;
    const count = geometryRef.current.attributes.position.count;

    for(let i = 0; i < count; i++){
        const ix = i*3;
        const x = positions[ix];
        const y = positions[ix + 1];

        positions[ix + 2] = Math.sin(x*2 + time) * Math.cos(y*2 + time) * 0.5;
    }

    geometryRef.current.attributes.position.needsUpdate = true;
})

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]}>
    <planeBufferGeometry args={[10, 10, 100, 100]} ref={geometryRef} />
    <meshStandardMaterial color="#ff69b4" side={THREE.DoubleSide} />
  </mesh>
  )
}

export default Wave
