gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "top bottom",
    end: "top top",
    scrub: 1
  }
});

tl.to("#can", {
  x: 355,      
  rotation: -25,
  scale: 0.95,
  ease: "none"
});

gsap.to("#chocolate", {
  y: 200,
  scrollTrigger: {
    trigger: ".about",
    start: "top bottom",
    scrub: true
  }
});

tl.to("#almond", { 
    top: "2%", 
    left: "5%", 
    rotate: "130deg"
});

tl.to("#almond2", { 
    top: "110%", 
    right: "2%", 
    rotate: "130deg"
});
gsap.from(".points", {
  scrollTrigger: {
    trigger: ".points",
    start: "top 73%",
  },
  opacity: 0,
  y: 75,
  duration: 3,
  ease: "power3.out",
  stagger: 1
});
