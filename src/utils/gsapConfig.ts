import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';


// GSAP Plugins registrieren
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MorphSVGPlugin);


// Basis GSAP Einstellungen
gsap.config({
  nullTargetWarn: false
});

// ScrollTrigger Defaults
ScrollTrigger.defaults({
  toggleActions: "play none none reverse",
  scroller: window as any
});

export { gsap, ScrollTrigger };