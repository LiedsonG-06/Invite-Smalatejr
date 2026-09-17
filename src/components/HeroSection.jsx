import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { invitationData as data } from '../data/invitationData'
export function HeroSection() {
  const { images } = data
  return <section className="hero cinematic-hero" style={{ '--hero-image': `url(${images.hero.src})`, '--hero-position': images.hero.position, '--hero-mobile-position': images.hero.mobilePosition }} role="img" aria-label={images.hero.alt}><motion.div className="hero-content" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}><p className="hero-save-date">Save the Date</p><div className="hero-monogram">C · S</div></motion.div><a href="#countdown" className="scroll-cue" aria-label="Deslize para descobrir o convite"><span>Deslize para descobrir/ver o convite</span><FiArrowDown /></a></section>
}
