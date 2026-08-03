import { invitationData as data } from '../data/invitationData'
export function Footer() { const { couple, displayDate, finalMessage, images } = data; return <footer style={{ '--section-image': `url(${images.hero.src})` }}><div className="monogram">{couple.monogram}</div><p>{finalMessage}</p><small>{displayDate} · Feito por Engenheiro Liedson Gove</small></footer> }
