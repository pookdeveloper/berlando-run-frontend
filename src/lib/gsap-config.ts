import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register plugin once on client side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
  
  // Global performance config
  gsap.config({
    force3D: true,
    nullTargetWarn: false
  })
}

export { gsap, ScrollTrigger }
