const box1 = document.getElementById("box1");

gsap.registerPlugin(ScrollTrigger);

//1

gsap.from(".linea1", {
  scrollTrigger: {
    trigger: ".linea1",
    scrub: true,
    start: "top center",
    end: "top top"
  },
  scaleY: 0,
  transformOrigin: "left top", 
  ease: "none"
});

//2

gsap.from(".linea2", {
  scrollTrigger: {
    trigger: ".linea2",
    scrub: true,
    start: "top center",
    end: "top top"
  },
  scaleY: 0,
  transformOrigin: "left top", 
  ease: "none"
});

//3

gsap.from(".linea3", {
  scrollTrigger: {
    trigger: ".linea3",
    scrub: true,
    start: "top center",
    end: "top top"
  },
  scaleY: 0,
  transformOrigin: "left top", 
  ease: "none"
});

//4

gsap.from(".linea4", {
  scrollTrigger: {
    trigger: ".linea4",
    scrub: true,
    start: "top center",
    end: "top top"
  },
  scaleY: 0,
  transformOrigin: "left top", 
  ease: "none"
});

//5

gsap.from(".linea5", {
  scrollTrigger: {
    trigger: ".linea5",
    scrub: true,
    start: "top center",
    end: "top top"
  },
  scaleY: 0,
  transformOrigin: "left top", 
  ease: "none"
});

//6

gsap.from(".linea6", {
  scrollTrigger: {
    trigger: ".linea6",
    scrub: true,
    start: "top center",
    end: "top top"
  },
  scaleY: 0,
  transformOrigin: "left top", 
  ease: "none"
});


