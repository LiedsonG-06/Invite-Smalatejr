import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'
import { invitationData as data } from '../data/invitationData'
import { Reveal } from './common/Reveal'

export function GallerySection() {
  const { gallery, hero } = data.images
  const [selected, setSelected] = useState(null)
  const hasMultipleImages = gallery.length > 1
  const move = (step) => setSelected((selected + step + gallery.length) % gallery.length)

  useEffect(() => {
    const handleKey = (event) => {
      if (selected === null) return
      if (event.key === 'Escape') setSelected(null)
      if (event.key === 'ArrowRight') setSelected((current) => (current + 1) % gallery.length)
      if (event.key === 'ArrowLeft') setSelected((current) => (current - 1 + gallery.length) % gallery.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [gallery.length, selected])

  return (
    <section className="section memories">
      <Reveal><div className="simple-heading"><h2>Galeria</h2></div></Reveal>
      <div className={`gallery ${gallery.length === 1 ? 'gallery-single' : ''}`}>
        {gallery.map((image, index) => (
          <button
            key={image.src}
            className={`gallery-${image.orientation}`}
            onClick={() => setSelected(index)}
            aria-label={`Ampliar: ${image.alt}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              width="1024"
              height="1536"
              style={{ objectPosition: image.position }}
              onError={(event) => { event.currentTarget.src = hero.src }}
            />
          </button>
        ))}
      </div>
      <AnimatePresence>
        {selected !== null && (
          <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <button className="lightbox-close" onClick={() => setSelected(null)} aria-label="Fechar fotografia ampliada"><FiX /></button>
            {hasMultipleImages && <button className="lightbox-prev" onClick={(event) => { event.stopPropagation(); move(-1) }} aria-label="Fotografia anterior"><FiChevronLeft /></button>}
            <motion.img key={selected} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} src={gallery[selected].src} alt={gallery[selected].alt} onClick={(event) => event.stopPropagation()} />
            {hasMultipleImages && <button className="lightbox-next" onClick={(event) => { event.stopPropagation(); move(1) }} aria-label="Fotografia seguinte"><FiChevronRight /></button>}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
