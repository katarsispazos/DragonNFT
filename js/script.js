// Animación principal del dragón
const mainTimeline = gsap.timeline({
    repeat: -1,
    defaults: { ease: "none" }
});

// Movimiento fluido del dragón
gsap.to('.dragon-structure', {
    y: "+=30",
    rotation: "+=2",
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

// Efecto de perspectiva mejorado
document.addEventListener('mousemove', (e) => {
    const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

    gsap.to('.dragon-structure', {
        rotateY: mouseX * 45,
        rotateX: mouseY * 25,
        duration: 1.5,
        ease: "power2.out"
    });
});

// Animación de las escamas
gsap.to('.scale', {
    scale: 1.2,
    duration: 1,
    stagger: {
        each: 0.2,
        repeat: -1,
        yoyo: true,
        from: "center"
    },
    ease: "sine.inOut"
});

// Animación de las líneas de construcción
gsap.to('.construction-lines line', {
    strokeDashoffset: 20,
    duration: 2,
    repeat: -1,
    ease: "none",
    stagger: {
        each: 0.1,
        from: "random"
    }
});

// Parallax en las escamas
gsap.to('.scales-technical', {
    x: mouseX * 20,
    y: mouseY * 20,
    duration: 1,
    ease: "power2.out"
});

// Pulso en la columna vertebral
gsap.to('.spine', {
    strokeWidth: "+=1",
    filter: "drop-shadow(0 0 15px rgba(0,255,255,0.5))",
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// Función para crear partículas
function createParticles(total) {
    const particles = [];
    const container = document.querySelector('.particles');
    const template = container.querySelector('.particle');
    
    for(let i = 0; i < total; i++) {
        const particle = template.cloneNode();
        container.appendChild(particle);
        particles.push(particle);
    }
    return particles;
}

// Efecto de perspectiva en el colisionador
document.addEventListener('mousemove', (e) => {
    const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

    gsap.to('.collider-rings', {
        rotateY: mouseX * 20,
        rotateX: mouseY * 20,
        duration: 1,
        ease: "power2.out"
    });
});

// Actualizar el efecto de brillo en las líneas
gsap.to('.tech-line', {
    filter: "drop-shadow(0 0 20px rgba(0,255,255,0.8))",
    duration: 1,
    repeat: -1,
    yoyo: true,
    stagger: {
        each: 0.1,
        from: "random"
    }
});

// Mejorar el brillo del núcleo
gsap.to('.core-ring', {
    filter: "drop-shadow(0 0 30px rgba(0,255,255,1))",
    scale: 1.1,
    opacity: 1,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// Aumentar el brillo de las partículas
gsap.to('.particle', {
    filter: "drop-shadow(0 0 15px rgba(0,255,255,1))",
    scale: 1.5,
    duration: 1,
    repeat: -1,
    yoyo: true,
    stagger: {
        each: 0.05,
        from: "random"
    }
});

// Animación de las alas
gsap.to('.wing', {
    rotateY: 15,
    rotateX: 5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: {
        each: 0.5
    }
});

// Pulso en los nodos de energía
gsap.to('.node', {
    scale: 1.5,
    opacity: 0.8,
    duration: 1,
    repeat: -1,
    yoyo: true,
    stagger: {
        each: 0.3,
        from: "center"
    }
});

// Flujo de energía en los circuitos
gsap.to('.circuit-line', {
    strokeDashoffset: 20,
    duration: 1.5,
    repeat: -1,
    ease: "none",
    stagger: {
        each: 0.2
    }
});

// Parpadeo del ojo
gsap.to('.eye', {
    scale: 0.8,
    opacity: 0.5,
    duration: 0.1,
    repeat: -1,
    repeatDelay: 3,
    yoyo: true,
    ease: "none"
});

// Movimiento de la mandíbula
gsap.to('.mandible', {
    scaleY: 0.9,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    repeatDelay: 2
});

// Agregar el evento del botón
document.querySelector('.tech-button').addEventListener('click', () => {
    // Rotar las líneas del botón
    gsap.to('.button-line:first-child', {
        rotation: 45,
        transformOrigin: 'center',
        duration: 0.3
    });
    gsap.to('.button-line:last-child', {
        rotation: -45,
        transformOrigin: 'center',
        duration: 0.3
    });
    
    // Iniciar la transformación
    transformToCollider();
});
