import { motion } from 'framer-motion'
import { invitationData as data } from '../data/invitationData'

export function OpeningScreen({ onOpen }) {
  const { couple, displayDate, images } = data

  return (
    <motion.div className="opening" exit={{ opacity: 0, scale: 1.03 }} transition={{ duration: 0.8 }}>
      <div
        className="opening-bg"
        style={{
          '--hero-image': `url(${images.hero.src})`,
          '--hero-position': images.hero.position,
          '--hero-mobile-position': images.hero.mobilePosition,
        }}
        role="img"
        aria-label={images.hero.alt}
      />
      <div className="opening-card">
        <div className="monogram">{couple.monogram}</div>
        <p className="kicker">Temos a alegria de convidar</p>
        <h1>{couple.bride}<em>&</em>{couple.groom}</h1>
        <p className="opening-date">{displayDate}</p>
        <button className="outline-btn light" onClick={onOpen}>Abrir convite <span>→</span></button>
        <small>Uma celebração de amor aguarda por si</small>
      </div>
    </motion.div>
  )
}
