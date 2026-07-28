import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi'
import { invitationData as data } from '../data/invitationData'
import { Reveal, SectionTitle } from './common/Reveal'

function EventCard({ event, index }) {
  return (
    <Reveal className="detail-card">
      <span className="card-number">0{index + 1}</span>
      <div className="detail-icon">{index ? <FiClock /> : <FiCalendar />}</div>
      <h3>{event.title}</h3>
      <p><FiCalendar /> {event.date}</p>
      <p><FiClock /> {event.time}</p>
      <p><FiMapPin /> {event.location}</p>
      <small>{event.address}</small>
    </Reveal>
  )
}

export function EventDetails() {
  return (
    <section className="section details">
      <Reveal><SectionTitle eyebrow="Guarde a data">Onde tudo acontecerá</SectionTitle></Reveal>
      <div className="detail-grid">
        {data.events.map((event, index) => <EventCard event={event} index={index} key={event.title} />)}
      </div>
    </section>
  )
}
