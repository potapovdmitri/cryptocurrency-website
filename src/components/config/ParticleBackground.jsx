import React from 'react';
import Particles from "react-tsparticles"
import { particlesConfig} from './particles-config';
import { loadFull } from 'tsparticles';

const ParticleBackground = () => {
    async function loadParticles(main) {
       await loadFull(main)
    }
    return (
        <Particles id='tsparticles'
                    init={loadParticles}
                    options={particlesConfig}
        />
    );
};

export default ParticleBackground;