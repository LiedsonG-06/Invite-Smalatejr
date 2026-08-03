import { invitationData as data } from '../data/invitationData'
import { Reveal } from './common/Reveal'
export function InvitationMessage() {
  const [beforeNames, afterNames] = data.invitationMessage.split('Cheila e Sidónio')
  return <section className="invitation-message section" style={{ '--section-image': `url(${data.images.hero.src})` }}><Reveal><h2>Convite</h2><p>{beforeNames}<strong>Cheila e Sidónio</strong>{afterNames}</p></Reveal></section>
}
