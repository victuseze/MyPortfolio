
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import skybox from '../assets/3d/Skybox.glb'

export function Skybox(props) {
  const { nodes, materials } = useGLTF(skybox)
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere__0.geometry}
          material={materials['Scene_-_Root']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1000}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/skybox.glb')

export default Skybox;


