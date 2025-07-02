import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import vrhead from '../assets/3d/VRhead.glb'

export function VRhead(props) {
  const { nodes, materials } = useGLTF(vrhead)
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI]} scale={4.061}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, 0]} scale={0.001}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_0.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_0_1.geometry}
              material={materials.material_5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_0_2.geometry}
              material={materials.material_0}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_0_3.geometry}
              material={materials['17_-_Default']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_0_4.geometry}
              material={materials.material_3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_0_5.geometry}
              material={materials.material_4}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_0_6.geometry}
              material={materials.material_6}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_0_7.geometry}
              material={materials.material_7}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_0_8.geometry}
              material={materials['Material.001']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_0_9.geometry}
              material={materials.material_9}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/VRhead.glb')

export default VRhead