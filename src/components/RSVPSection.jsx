import { useState } from 'react'
import { FiMessageCircle } from 'react-icons/fi'
import { invitationData as data } from '../data/invitationData'
import { buildWhatsAppMessage } from '../utils/buildWhatsAppMessage'
import { Reveal, SectionTitle } from './common/Reveal'

export function RSVPSection() {
  const [form, setForm] = useState({ name: '', guests: 0, attendance: 'Confirmo presença', note: '' })
  const [error, setError] = useState('')

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value })
  const submit = (event) => {
    event.preventDefault()
    if (!form.name.trim()) {
      setError('Por favor, indique o seu nome.')
      return
    }
    const message = buildWhatsAppMessage(form, data.couple)
    window.open(`https://wa.me/${data.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    setError('')
  }

  return (
    <section className="section rsvp">
      <Reveal>
        <SectionTitle eyebrow="RSVP">Celebre connosco</SectionTitle>
        <p className="section-intro">Agradecemos que confirme a sua presença até {data.rsvpDeadline}.</p>
      </Reveal>
      <Reveal>
        <form className="rsvp-form" onSubmit={submit} noValidate>
          <label>O seu nome<input name="name" value={form.name} onChange={update} placeholder="Nome completo" /></label>
          <div className="form-row">
            <label>Acompanhantes<select name="guests" value={form.guests} onChange={update}>{[0, 1, 2, 3, 4].map((number) => <option key={number}>{number}</option>)}</select></label>
            <label>Resposta<select name="attendance" value={form.attendance} onChange={update}><option>Confirmo presença</option><option>Não poderei comparecer</option></select></label>
          </div>
          <label>Observação <span>(opcional)</span><textarea name="note" value={form.note} onChange={update} placeholder="Restrições alimentares ou uma mensagem..." /></label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="primary-btn" type="submit"><FiMessageCircle /> Confirmar pelo WhatsApp</button>
        </form>
      </Reveal>
    </section>
  )
}
