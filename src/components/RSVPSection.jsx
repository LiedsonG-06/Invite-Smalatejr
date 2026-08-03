import { useRef, useState } from 'react'
import { invitationData as data } from '../data/invitationData'
import { Reveal } from './common/Reveal'

const RSVP_ENDPOINT = import.meta.env.VITE_RSVP_ENDPOINT;
const initialForm = { nomeCompleto: '', telefone: '', confirmacao: '', numeroAcompanhantes: 0, nomesAcompanhantes: '', mensagem: '' }
export function RSVPSection() {
  const [form, setForm] = useState(initialForm); const [status, setStatus] = useState({ type: '', message: '' }); const [sending, setSending] = useState(false); const submitting = useRef(false)
  const update = ({ target }) => { const next = { ...form, [target.name]: target.value }; if (target.name === 'confirmacao' && target.value === 'Não') { next.numeroAcompanhantes = 0; next.nomesAcompanhantes = '' } setForm(next); setStatus({ type: '', message: '' }) }
  const submit = async (event) => {
    event.preventDefault(); if (submitting.current) return
    if (!form.nomeCompleto.trim() || !form.telefone.trim() || !form.confirmacao) { setStatus({ type: 'error', message: 'Preencha o nome, o telefone e a confirmação de presença.' }); return }
    const guestCount = Number(form.numeroAcompanhantes)
    if (!Number.isInteger(guestCount) || guestCount < 0) { setStatus({ type: 'error', message: 'O número de acompanhantes deve ser zero ou um número positivo.' }); return }
    if (!RSVP_ENDPOINT) { setStatus({ type: 'error', message: 'A confirmação online ainda precisa de ser configurada pelos noivos.' }); return }
    const payload = { nomeCompleto: form.nomeCompleto.trim(), telefone: form.telefone.trim(), confirmacao: form.confirmacao, numeroAcompanhantes: form.confirmacao === 'Sim' ? guestCount : 0, nomesAcompanhantes: form.confirmacao === 'Sim' ? form.nomesAcompanhantes.split(/[,\n]/).map((name) => name.trim()).filter(Boolean) : [], mensagem: form.mensagem.trim(), dataSubmissao: new Date().toISOString() }
    submitting.current = true; setSending(true); setStatus({ type: '', message: '' })
    try { const response = await fetch(RSVP_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) }); if (!response.ok) throw new Error('Falha no envio'); const result = await response.json().catch(() => ({})); if (result.success === false) throw new Error(result.message || 'Falha no envio'); setStatus({ type: 'success', message: 'Presença registada com sucesso. Obrigado!' }); setForm(initialForm) } catch { setStatus({ type: 'error', message: 'Não foi possível enviar a confirmação. Tente novamente mais tarde.' }) } finally { submitting.current = false; setSending(false) }
  }
  const attending = form.confirmacao === 'Sim'
  return <section className="section rsvp" style={{ '--section-image': `url(${data.images.hero.src})` }}><Reveal><div className="simple-heading"><h2>Confirme a sua presença</h2></div></Reveal><Reveal><form className="rsvp-form" onSubmit={submit} noValidate><label>Nome completo *<input name="nomeCompleto" value={form.nomeCompleto} onChange={update} autoComplete="name" required /></label><label>Número de telefone *<input name="telefone" type="tel" value={form.telefone} onChange={update} autoComplete="tel" required /></label><label>Confirmação de presença *<select name="confirmacao" value={form.confirmacao} onChange={update} required><option value="">Seleccione</option><option>Sim</option><option>Não</option></select></label>{attending && <><label>Número de acompanhantes<input name="numeroAcompanhantes" type="number" min="0" step="1" value={form.numeroAcompanhantes} onChange={update} /></label>{Number(form.numeroAcompanhantes) > 0 && <label>Nome dos acompanhantes<textarea name="nomesAcompanhantes" value={form.nomesAcompanhantes} onChange={update} placeholder="Separe os nomes por vírgulas ou linhas" /></label>}</>}<label>Mensagem para os noivos <span>(opcional)</span><textarea name="mensagem" value={form.mensagem} onChange={update} /></label>{status.message && <p className={`form-status ${status.type}`} role="status">{status.message}</p>}<button className="primary-btn" type="submit" disabled={sending}>{sending ? 'A enviar…' : 'Confirmar presença'}</button></form></Reveal></section>
}
