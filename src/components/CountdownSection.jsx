import { invitationData as data } from '../data/invitationData'
import { useCountdown } from '../hooks/useCountdown'
import { Reveal } from './common/Reveal'

export function CountdownSection() {
  const time = useCountdown(data.eventDate)

  return (
    <section className="count-section">
      <Reveal>
        <p className="kicker">Contagem decrescente</p>
        <h2>Falta pouco para o nosso sim</h2>
        {time ? (
          <div className="countdown">
            {Object.entries(time).map(([label, value]) => (
              <div key={label}>
                <strong>{String(value).padStart(2, '0')}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        ) : <p className="arrived">O nosso grande dia chegou!</p>}
      </Reveal>
    </section>
  )
}
