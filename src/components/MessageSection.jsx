import { invitationData as data } from '../data/invitationData'
import { Reveal } from './common/Reveal'

export function MessageSection() {
  return (
    <section className="quote-section">
      <Reveal>
        <span>“</span>
        <blockquote>{data.guestMessage}</blockquote>
        <p>— {data.couple.bride} & {data.couple.groom}</p>
      </Reveal>
    </section>
  )
}
