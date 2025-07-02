import { React, Suspense, useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../Components/Loader';
import HomeInfo from '../Components/HomeInfo';

//import Unstoppable from '../assets/Unstoppable.mp3';
import Baddoo from '../assets/Metaverse.mp3';
import { soundoff, soundon } from '../assets/icons';
import { AppleVisionPro } from '../models/AppleVisionPro';

import { OrbitControls } from '@react-three/drei';
import Skybox from '../models/Skybox';


const Home = () => {
    const audioRef = useRef(new Audio(Baddoo));
    audioRef.current.volume = 0.9;
    audioRef.current.loop = true;

    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    const [isPlayingMusic, setIsPlayingMusic] = useState(false); // Music will start when user clicks play
    const [showPlayOverlay, setShowPlayOverlay] = useState(true); // Show play overlay initially

    useEffect(() => {
        if (isPlayingMusic) {
            audioRef.current.play().catch((error) => {
                console.log("Auto-play was prevented. User interaction is needed to start the audio.");
            });
        }

        return () => {
            audioRef.current.pause();
        };
    }, [isPlayingMusic]);

    const handlePlayMusic = () => {
        setIsPlayingMusic(true);
        setShowPlayOverlay(false); // Hide overlay once music is playing
    };

    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        let rotation = [0.1, 4.7, 0];

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        } else {
            screenScale = [1, 1, 1];
        }

        return [screenScale, screenPosition, rotation];
    };

    const adjustPlaneForScreenSize = () => {
        let screenScale, screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, 1.5, 0];
        } else {
            screenScale = [3, 3, 3];
            screenPosition = [0, -4, -4];
        }

        return [screenScale, screenPosition];
    };

    const [isLandScale, isLandPosition, isLandRotation] = adjustIslandForScreenSize();
    const [planeScale, planePosition] = adjustPlaneForScreenSize();

    return (
        <section className="w-full h-screen">
            {/* Overlay for starting audio */}
            {showPlayOverlay && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
                    <button 
                        onClick={handlePlayMusic} 
                        className="bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold cursor-pointer"
                    >
                        Hello, Click Me
                    </button>
                </div>
            )}

            <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>

            <Canvas

                className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
                camera={{ position: [0, 0, 5], fov: 45, near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <hemisphereLight skycolor="#b1e1ff" groundColor="#000000" intensity={1} />
                    
                    <OrbitControls
                    //enableZoom={true}
                    //enablePan={true}
                    enableRotate={true}
                    autoRotate={true}
                    autoRotateSpeed={2} // slow speed (adjust as needed)
                    />

                    <Skybox is Rotating={isRotating}/>

                    <AppleVisionPro 
                          position={[0, -0.5, 0]}
                          scale={[4, 4, 4]}
                    />
                </Suspense>
            </Canvas>

            <div className="absolute bottom-5 left-5 z-10">
                <img
                    src={!isPlayingMusic ? soundoff : soundon}
                    alt="sound"
                    className="w-10 h-10 cursor-pointer object-contain"
                    onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                />
            </div>
        </section>
    );
};

export default Home;
