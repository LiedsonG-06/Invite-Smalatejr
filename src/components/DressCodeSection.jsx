import { invitationData as data } from '../data/invitationData'
import { Reveal, SectionTitle } from './common/Reveal'

export function DressCodeSection() {
  const { dressCode } = data

  return (
    <section className="dress">
      <Reveal>
        <SectionTitle eyebrow="Dress code" light>Elegância em cada detalhe</SectionTitle>
        <h3>{dressCode.title}</h3>
        <p>{dressCode.description}</p>
        <div className="palette">
          {dressCode.colors.map((color) => (
            <span key={color.name} style={{ background: color.hex }} title={color.name} />
          ))}
        </div>
        <small>{dressCode.note}</small>
      </Reveal>
    </section>
  )
}
