import { invitationData as data } from '../data/invitationData'

export function Footer() {
  const { couple, displayDate, finalMessage } = data

  return (
    <footer>
      <div className="monogram">{couple.monogram}</div>
      <h2>{couple.bride} <em>&</em> {couple.groom}</h2>
      <p>{finalMessage}</p>
      <small>{displayDate} · Feito com carinho por Liedson Gove</small>
    </footer>
  )
}
