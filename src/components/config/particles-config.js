export const particlesConfig = {
    particles: {
      number: {
        value: 43,
        density: {
          enable: true,
          value_area: 552.4033491425909
        }
      },
      color: {
        value: "#00f791"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#ffffff"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "",
          width: 0,
          height: 0
        }
      },
      opacity: {
        value: 0.5291259800856225,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          size_min: 1,
          sync: true
        }
      },
      line_linked: {
        enable: true,
        distance: 176.3753266952075,
        color: "#5bf564",
        opacity: 0.29,
        width: 1.3
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: false,
          mode: "repulse"
        },
        onclick: {
          enable: false,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  }