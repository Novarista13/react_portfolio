import React from "react";
import { useCallback, useMemo } from "react";
import Particles from "react-particles";

import { loadFull } from "tsparticles";

const ParticlesComponent = (props) => {
  const options = useMemo(() => {

  return ( {
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                area: 1500,
              },
            },
            links: {
              enable: true,
              opacity: 0.02,
            },
            move: {
              direction: "right",
              speed: 0.05,
            },
            size: {
              value: 1,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                value: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                quantity: 1,
              },
            },
          },
        })
     }, []);

  const particlesInit = useCallback((engine) => {
  loadFull(engine);
  // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
}, []);

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
}

export default ParticlesComponent;
