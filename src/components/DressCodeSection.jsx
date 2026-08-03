import { invitationData as data } from '../data/invitationData'
import { Reveal } from './common/Reveal'
export function DressCodeSection() { const { dressCode } = data; return <section className="dress"><Reveal><div className="simple-heading light"><h2>Dress Code</h2></div><h3>{dressCode.title}</h3><p>{dressCode.description}</p><div className="palette">{dressCode.colors.map((color) => <span key={color.name} style={{ background: color.hex }} title={color.name} />)}</div><small>{dressCode.note}</small></Reveal></section> }
