import { invitationData as data } from '../data/invitationData'
import { useCountdown } from '../hooks/useCountdown'
import { Reveal } from './common/Reveal'
export function CountdownSection() {
  const time = useCountdown(data.eventDate)
  return <section id="countdown" className="count-section"><Reveal><h2>Faltam apenas...</h2>{time ? <div className="countdown">{Object.entries(time).map(([label, value]) => <div key={label}><strong>{String(value).padStart(2, '0')}</strong><span>{label}</span></div>)}</div> : <p className="arrived">O nosso grande dia chegou!</p>}<p className="count-note">Estamos ansiosos por celebrar este dia consigo.</p></Reveal></section>
}
