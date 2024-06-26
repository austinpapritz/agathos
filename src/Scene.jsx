/*
  Auto-generated by Spline
*/

import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/NoiURfbSSxDhHESy/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#1e6f96']} />
      <group {...props} dispose={null}>
        <scene name="Scene 1">
          <mesh
            name="Blob 2"
            geometry={nodes['Blob 2'].geometry}
            material={materials['Blob 2 Material']}
            castShadow
            receiveShadow
            position={[-688.7, 0, -1436.83]}
            rotation={[0.14, -0.03, 0.42]}
            scale={[1.84, 3, 1.74]}
          />
          <mesh
            name="Blog 1"
            geometry={nodes['Blog 1'].geometry}
            material={materials['Blog 1 Material']}
            castShadow
            receiveShadow
            position={[621.8, 312.05, -1566.64]}
            scale={[1.92, 3.16, 2.06]}
          />
          <group name="UI" position={[61.84, -50.46, -12.17]} rotation={[-0.2, 0.78, 0.21]}>
            <mesh
              name="bricks"
              geometry={nodes.bricks.geometry}
              material={materials['bricks Material']}
              castShadow
              receiveShadow
              position={[323.07, -303.34, -50]}
            />
            <mesh
              name="red sun"
              geometry={nodes['red sun'].geometry}
              material={materials['red sun Material']}
              castShadow
              receiveShadow
              position={[86.92, -303.34, -50]}
            />
            <mesh
              name="blue mtns"
              geometry={nodes['blue mtns'].geometry}
              material={materials['blue mtns Material']}
              castShadow
              receiveShadow
              position={[-146.76, -303.34, -50]}
            />
            <mesh
              name="fern"
              geometry={nodes.fern.geometry}
              material={materials['fern Material']}
              castShadow
              receiveShadow
              position={[-383.32, -303.34, -50]}
            />
            <mesh
              name="Craggy"
              geometry={nodes.Craggy.geometry}
              material={materials['Craggy Material']}
              castShadow
              receiveShadow
              position={[220.84, -1.41, -55]}
            />
            <mesh
              name="Gold foil"
              geometry={nodes['Gold foil'].geometry}
              material={materials['Gold foil Material']}
              castShadow
              receiveShadow
              position={[-274.89, -1.41, -55]}
            />
            <mesh
              name="Exploding world"
              geometry={nodes['Exploding world'].geometry}
              material={materials['Exploding world Material']}
              castShadow
              receiveShadow
              position={[-36.77, 389, -45]}
            />
            <mesh
              name="Agatha avi hex"
              geometry={nodes['Agatha avi hex'].geometry}
              material={materials['Agatha avi hex Material']}
              castShadow
              receiveShadow
              position={[715, 365, -53]}
            />
            <mesh
              name="Zoe hex"
              geometry={nodes['Zoe hex'].geometry}
              material={materials['Zoe hex Material']}
              castShadow
              receiveShadow
              position={[600.62, 32.83, -50]}
            />
            <mesh
              name="Nat hex"
              geometry={nodes['Nat hex'].geometry}
              material={materials['Nat hex Material']}
              castShadow
              receiveShadow
              position={[600.23, -141.32, -50]}
            />
            <mesh
              name="Todd hex"
              geometry={nodes['Todd hex'].geometry}
              material={materials['Todd hex Material']}
              castShadow
              receiveShadow
              position={[599.34, -309.48, -50.2]}
            />
            <mesh
              name="August hex"
              geometry={nodes['August hex'].geometry}
              material={materials['August hex Material']}
              castShadow
              receiveShadow
              position={[600.52, -471.42, -50]}
              rotation={[0, 0, -0.01]}
            />
            <mesh
              name="BG"
              geometry={nodes.BG.geometry}
              material={materials['BG Material']}
              castShadow
              receiveShadow
              position={[0, 0, -55]}
              scale={[1, 1, 34.66]}
            />
          </group>
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={0.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-750}
            shadow-camera-right={750}
            shadow-camera-top={750}
            shadow-camera-bottom={-750}
            position={[349.19, 216.22, 2311.2]}
            rotation={[0.03, 0, 0]}
          />
          <OrthographicCamera name="1" makeDefault={true} far={10000} near={-50000} />
          <hemisphereLight name="Default Ambient Light" intensity={0.7} color="#eaeaea" />
        </scene>
      </group>
    </>
  )
}
