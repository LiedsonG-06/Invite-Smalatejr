import { invitationData as data } from '../data/invitationData'
import { Reveal, SectionTitle } from './common/Reveal'

export function CoupleSection() {
  const { couple, images, intro } = data

  return (
    <section id="story" className="section story">
      <Reveal><SectionTitle eyebrow="A nossa história">Tudo começou com um sim</SectionTitle></Reveal>
      <div className="story-grid">
        <Reveal className="portrait-wrap">
          <img
            src={images.couple.src}
            alt={images.couple.alt}
            loading="lazy"
            width="1024"
            height="1536"
            style={{ objectPosition: images.couple.position }}
          />
          <div className="portrait-mark">{couple.monogram}</div>
        </Reveal>
        <Reveal className="story-copy">
          <p className="script">Juntos é o nosso lugar favorito.</p>
          <p>{intro}</p>
          <div className="names">
            <span>{couple.bride}<small>A noiva</small></span>
            <i>&</i>
            <span>{couple.groom}<small>O noivo</small></span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
