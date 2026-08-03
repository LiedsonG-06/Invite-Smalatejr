import { FiCheckCircle } from 'react-icons/fi'
import { Reveal } from './common/Reveal'
const guidelines = ['Confirme a sua presença com antecedência.', 'Chegue pontualmente à cerimónia.', 'Respeite os horários indicados.', 'Apresente o convite quando solicitado.', 'Evite levar acompanhantes que não tenham sido confirmados.', 'Mantenha o telemóvel no modo silencioso durante a cerimónia.', 'Celebre este momento com alegria, respeito e carinho pelos noivos.']
export function GoodGuestGuide() { return <section className="section guest-guide"><Reveal><div className="simple-heading"><h2>Manual do Bom Convidado</h2></div></Reveal><ul className="guide-list">{guidelines.map((text) => <li key={text}><FiCheckCircle aria-hidden="true" /><span>{text}</span></li>)}</ul></section> }
