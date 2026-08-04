import { invitationData as data } from '../data/invitationData'
import { Reveal } from './common/Reveal'
export function InvitationMessage() {
  const [beforeNames, afterNames] = data.invitationMessage.split('Cheila e Sidónio')
  return <section className="invitation-message section" style={{ '--section-image': `url(${data.images.hero.src})` }}><Reveal><p>{beforeNames}<strong>Cheila e Sidónio</strong>{afterNames}</p><blockquote className="invitation-verse">“O amor tudo sofre, tudo crê, tudo espera, tudo suporta.”<cite>1 Coríntios 13:7</cite></blockquote></Reveal></section>
}
