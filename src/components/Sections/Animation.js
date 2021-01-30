import gsap from "gsap";

// adds serves image once you hover on
export const handleServes = (serves, target) => {
  gsap.to(target, {
    duration: 0,
    background: `url(${ serves }) center center`,
  });
  gsap.to(target, {
    duration: 0.4,
    opacity: 1,
    ease: "power3.inOut"
  });
  gsap.from(target, {
    duration: 0.4,
    skewY: -1.5,
    
    transformOrigin: "right top"
  });
};

// Removes the serves image once you hover off
export const handleServesReturn = target => {
  gsap.to(target, {
    duration: 0,
    skewY: 0
  });
  gsap.to(target, {
    duration: 0.4,
    opacity: 0,
    skewY: 0
  });
};
