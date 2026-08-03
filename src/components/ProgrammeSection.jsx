import { invitationData as data } from '../data/invitationData'
import { Reveal } from './common/Reveal'
function ProgrammeItem({ item }) { return <Reveal className="timeline-item"><time>{item.time}</time><span><i /></span><div><h3>{item.title.replace('Cocktail & fotografias', 'Cocktail')}</h3></div></Reveal> }
export function ProgrammeSection() { return <section className="section programme"><Reveal><div className="simple-heading"><h2>Programa do casamento</h2></div></Reveal><div className="timeline">{data.programme.map((item) => <ProgrammeItem item={item} key={item.time} />)}</div></section> }
