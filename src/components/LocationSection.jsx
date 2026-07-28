import { FiMapPin } from 'react-icons/fi'
import { invitationData as data } from '../data/invitationData'
import { Reveal } from './common/Reveal'

export function LocationSection() {
  const { location, mapsUrl } = data

  return (
    <section className="location">
      <div className="location-image" aria-hidden="true"><FiMapPin /></div>
      <Reveal className="location-card">
        <span className="kicker">O destino</span>
        <h2>{location.name}</h2>
        <p>{location.description}</p>
        <address>{location.address}</address>
        <a className="outline-btn" href={mapsUrl} target="_blank" rel="noreferrer">
          <FiMapPin /> Ver localização
        </a>
      </Reveal>
    </section>
  )
}
