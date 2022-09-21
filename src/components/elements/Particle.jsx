import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import React from 'react'

const Particle = () => {

    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            Loaded={particlesLoaded}
            style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: "0",
                  left: "0"
                }}
            options={{
                fullScreen: {
                    enable: false,
                    zIndex: -1
                },

                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "bubble",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: false,
                        opacity: 0.5,
                        width: 1,
                    },
                    
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "destroy",
                        },
                        random: true,
                        speed: 0.5,
                        direction: "top",
                        out_mode: "out"
                    },
                    number: {
                        density: {
                            enable: false,
                        },
                        value: 70,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
    )
}

export default Particle