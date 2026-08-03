import { FiMapPin } from 'react-icons/fi'
import { invitationData as data } from '../data/invitationData'
import { Reveal } from './common/Reveal'
export function LocationSection() { return <section className="location"><div className="location-image" role="img" aria-label="Representação do mapa dos locais"><FiMapPin /></div><Reveal className="location-card"><h2>Localização</h2><div className="location-links">{data.events.map((event) => <a className="outline-btn" href={event.mapsUrl} target="_blank" rel="noreferrer" key={event.title}><FiMapPin /> {event.title}</a>)}</div></Reveal></section> }
