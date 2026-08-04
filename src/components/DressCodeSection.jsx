import { invitationData as data } from '../data/invitationData'
import { Reveal } from './common/Reveal'
export function DressCodeSection() { const { dressCode } = data; return <section className="dress"><Reveal><div className="simple-heading light"><h2>Dress Code</h2></div><h3>{dressCode.title}</h3><p>{dressCode.description}</p></Reveal></section> }
