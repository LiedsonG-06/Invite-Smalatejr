import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { invitationData as data } from '../data/invitationData'
export function HeroSection() {
  const { couple, displayDate, images } = data
  return <section className="hero cinematic-hero" style={{ '--hero-image': `url(${images.hero.src})`, '--hero-position': images.hero.position, '--hero-mobile-position': images.hero.mobilePosition }} role="img" aria-label={images.hero.alt}><motion.div className="hero-content" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}><div className="hero-monogram">{couple.monogram}</div><h1>{couple.landingName}</h1><div className="hero-line" /><p className="hero-date">{displayDate}</p><p className="hero-intro">Uma celebração de amor aguarda por si</p></motion.div><a href="#countdown" className="scroll-cue" aria-label="Deslize para descobrir"><span>Deslize para descobrir</span><FiArrowDown /></a></section>
}
