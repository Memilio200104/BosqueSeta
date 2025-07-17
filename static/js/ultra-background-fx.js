
// === VANTA.JS Background Animation ===
if (window.VANTA) {
  VANTA.FOG({
    el: "body",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0xd9b176,
    midtoneColor: 0x644526,
    lowlightColor: 0x322213,
    baseColor: 0x1e140a,
    blurFactor: 0.5,
    speed: 1.5,
    zoom: 0.8
  });
}

// === Scroll-triggered class animation ===
const observerSuper = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('super-reveal');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.section, .card, .slide, .img-about').forEach(el => {
  observerSuper.observe(el);
});
