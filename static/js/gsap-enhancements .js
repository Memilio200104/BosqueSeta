
// == GSAP ANIMATIONS - Bosque Seta == //
gsap.registerPlugin(ScrollTrigger);

// Animación general por secciones
gsap.utils.toArray(".section").forEach((section, index) => {
  gsap.fromTo(section,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
      delay: index * 0.1,
    }
  );
});

// Stagger para tarjetas del recetario o productores
gsap.utils.toArray(".card, .slide").forEach((el) => {
  gsap.fromTo(el,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      }
    });
});

// Navbar animación al cargar
gsap.from(".custom-navbar", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "bounce.out",
});

// Logo en Hero con rebote
gsap.from(".logo-img-hero", {
  scale: 0.5,
  opacity: 0,
  duration: 1.2,
  ease: "elastic.out(1, 0.5)",
  delay: 0.5,
});
