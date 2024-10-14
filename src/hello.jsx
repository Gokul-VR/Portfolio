"use client"

import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Text3D, OrbitControls, Center } from '@react-three/drei'

function HelloText() {
    const [hovered, setHovered] = useState(false)

    return (
        <Center>
            <Text3D
                curveSegments={32}
                bevelEnabled
                bevelSize={0.04}
                bevelThickness={0.1}
                height={0.5}
                lineHeight={0.5}
                letterSpacing={0.06}
                size={1.5}
                font="/fonts/Inter_Bold.json"
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                {`Hello`}
                <meshPhongMaterial
                    color={hovered ? '#ffffff' : '#ffffff'}
                    shininess={100}
                    specular="#ffffff"
                />
            </Text3D>
        </Center>
    )
}

export default function Hello3D() {
    return (
        <div className="w-full h-screen bg-gray-900">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />
                <HelloText />
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    )
}