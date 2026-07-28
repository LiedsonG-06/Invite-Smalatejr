import { FiArrowDown } from 'react-icons/fi'
import { invitationData as data } from '../data/invitationData'

export function HeroSection() {
  const { couple, displayDate, images, location } = data

  return (
    <section
      className="hero"
      style={{
        '--hero-image': `url(${images.hero.src})`,
        '--hero-position': images.hero.position,
        '--hero-mobile-position': images.hero.mobilePosition,
      }}
      role="img"
      aria-label={images.hero.alt}
    >
      <div className="hero-content">
        <p>O casamento de</p>
        <h1>{couple.bride} <em>&</em> {couple.groom}</h1>
        <div className="hero-line" />
        <p className="hero-date">{displayDate} • {location.city}</p>
      </div>
      <a href="#story" className="scroll-cue" aria-label="Continuar">
        <span>Deslize para descobrir</span>
        <FiArrowDown />
      </a>
    </section>
  )
}
