import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky, useGLTF } from '@react-three/drei';

function boat(){
  const { scene } = useGLTF("./boat.gltf");

  return <primitive object={scene} scale={1}

}

function Box(){
  return(
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLamberMaterial attach="material" color="green" />
    </mesh>
  )
}

function ProductView() {
  return <Canvas style = {{height: window.innerHeight}}>
    <OrbitControls />
    <Sky />
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 15, 10]} angle={0.3} />
    <Box />
    <boat />
  </Canvas>;
}

export default App;
