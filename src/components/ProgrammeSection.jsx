import { invitationData as data } from '../data/invitationData'
import { Reveal, SectionTitle } from './common/Reveal'

function ProgrammeItem({ item }) {
  return (
    <Reveal className="timeline-item">
      <time>{item.time}</time>
      <span><i /></span>
      <div><h3>{item.title}</h3><p>{item.description}</p></div>
    </Reveal>
  )
}

export function ProgrammeSection() {
  return (
    <section className="section programme">
      <Reveal><SectionTitle eyebrow="O nosso dia">Programa da celebração</SectionTitle></Reveal>
      <div className="timeline">
        {data.programme.map((item) => <ProgrammeItem item={item} key={item.time} />)}
      </div>
    </section>
  )
}
