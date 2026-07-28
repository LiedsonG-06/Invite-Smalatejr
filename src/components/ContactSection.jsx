import { FiMessageCircle, FiPhone } from 'react-icons/fi'
import { invitationData as data } from '../data/invitationData'
import { Reveal } from './common/Reveal'

function ContactButtons({ contact }) {
  return (
    <div>
      <a href={`tel:${contact.phone}`} aria-label={`Telefonar a ${contact.name}`}><FiPhone /></a>
      <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" aria-label={`WhatsApp de ${contact.name}`}><FiMessageCircle /></a>
    </div>
  )
}

export function ContactSection() {
  return (
    <section className="contacts">
      <Reveal>
        <p className="kicker">Estamos por perto</p>
        <h2>Alguma questão?</h2>
        <div className="contact-grid">
          {data.contacts.map((contact) => (
            <div key={contact.name}>
              <h3>{contact.name}</h3>
              <p>{contact.role}</p>
              <ContactButtons contact={contact} />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
