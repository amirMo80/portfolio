export const amongUs = {
    fullScreen: {
        enable: true
    },
    fpsLimit: 60,
    particles: {
        groups: {
            z5000: {
                number: {
                    value: 70
                },
                zIndex: {
                    value: 5000
                }
            },
            z7500: {
                number: {
                    value: 30
                },
                zIndex: {
                    value: 75
                }
            },
            z2500: {
                number: {
                    value: 50
                },
                zIndex: {
                    value: 25
                }
            },
            z1000: {
                number: {
                    value: 40
                },
                zIndex: {
                    value: 10
                }
            }
        },
        number: {
            value: 200,
            density: {
                enable: false,
                value_area: 800
            }
        },
        color: {
            value: "#fff",
            animation: {
                enable: false,
                speed: 20,
                sync: true
            }
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 1,
            random: false,
            animation: {
                enable: false,
                speed: 3,
                minimumValue: 0.1,
                sync: false
            }
        },
        size: {
            value: 3
        },
        links: {
            enable: false,
            distance: 100,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            angle: {
                value: 10,
                offset: 0
            },
            enable: true,
            speed: 5,
            direction: "right",
            random: false,
            straight: true,
            outModes: {
                default: "out"
            },
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        },
        zIndex: {
            value: 5,
            opacityRate: 0.5
        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: false,
                mode: "repulse"
            },
            onClick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                links: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8
            },
            repulse: {
                distance: 200
            },
            push: {
                quantity: 4,
                groups: ["z5000", "z7500", "z2500", "z1000"]
            },
            remove: {
                quantity: 2
            }
        }
    },
    detectRetina: true,
    background: {
        color: "#000000",
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover"
    },
    emitters: {
        position: {
            y: 55,
            x: -30
        },
        rate: {
            delay: 7,
            quantity: 1
        },
        size: {
            width: 0,
            height: 0
        },
        particles: {
            shape: {
                type: "images",
                options: {
                    images: [
                        {
                            src: "https://particles.js.org/images/amongus_blue.png",
                            width: 205,
                            height: 267
                        },
                        {
                            src: "https://particles.js.org/images/amongus_cyan.png",
                            width: 207,
                            height: 265
                        },
                        {
                            src: "https://particles.js.org/images/amongus_green.png",
                            width: 204,
                            height: 266
                        },
                        {
                            src: "https://particles.js.org/images/amongus_lime.png",
                            width: 206,
                            height: 267
                        },
                        {
                            src: "https://particles.js.org/images/amongus_orange.png",
                            width: 205,
                            height: 265
                        },
                        {
                            src: "https://particles.js.org/images/amongus_pink.png",
                            width: 205,
                            height: 265
                        },
                        {
                            src: "https://particles.js.org/images/amongus_red.png",
                            width: 204,
                            height: 267
                        },
                        {
                            src: "https://particles.js.org/images/amongus_white.png",
                            width: 205,
                            height: 267
                        }
                    ]
                }
            },
            size: {
                value: 40
            },
            move: {
                speed: 10,
                outModes: {
                    default: "destroy",
                    left: "none"
                },
                straight: true
            },
            zIndex: {
                value: 0
            },
            rotate: {
                value: {
                    min: 0,
                    max: 360
                },
                animation: {
                    enable: true,
                    speed: 10,
                    sync: true
                }
            }
        }
    }
}

export const links = {
    fps_limit: 60,
    interactivity: {
        detect_on: "canvas",
        events: {
            onclick: { enable: true, mode: "push" },
            onhover: {
                enable: true,
                mode: "attract",
                parallax: { enable: false, force: 60, smooth: 10 },
            },
            resize: true,
        },
        modes: {
            push: { quantity: 4 },
            attract: { distance: 200, duration: 0.4, factor: 5 },
        },
    },
    particles: {
        color: { value: "#FD4795" },
        line_linked: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
        },
        move: {
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
            bounce: false,
            direction: "none",
            enable: true,
            out_mode: "out",
            random: false,
            speed: 2,
            straight: false,
        },
        number: { density: { enable: true, value_area: 800 }, value: 80 },
        opacity: {
            anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
            random: false,
            value: 0.5,
        },
        shape: {
            character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
            },
            image: {
                height: 100,
                replace_color: true,
                src: "images/github.svg",
                width: 100,
            },
            polygon: { nb_sides: 5 },
            stroke: { color: "#000000", width: 0 },
            type: "circle",
        },
        size: {
            anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
            random: true,
            value: 5,
        },
    },
    polygon: {
        draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
        move: { radius: 10 },
        scale: 1,
        type: "none",
        url: "",
    },
    retina_detect: true,
};


export const star = {
    background: {
        color: "#000"
    },
    detectRetina: false,
    fpsLimit: 30,
    interactivity: {
        detectsOn: "canvas",
        events: {
            resize: true
        }
    },
    particles: {
        color: {
            value: "#fff"
        },
        number: {
            density: {
                enable: true,
                area: 1080
            },
            limit: 0,
            value: 400
        },
        opacity: {
            animation: {
                enable: true,
                minimumValue: 0.05,
                speed: 0.25,
                sync: false
            },
            random: {
                enable: true,
                minimumValue: 0.05
            },
            value: 1
        },
        shape: {
            type: "circle"
        },
        size: {
            random: {
                enable: true,
                minimumValue: 0.5
            },
            value: 1
        }
    }
}