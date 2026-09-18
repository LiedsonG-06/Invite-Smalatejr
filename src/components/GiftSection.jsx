import { useCallback, useState } from 'react'
import { FiCreditCard, FiMessageCircle } from 'react-icons/fi'
import { Reveal } from './common/Reveal'
import { TransferModal } from './TransferModal'
const giftContactUrl = `https://wa.me/258874247084?text=${encodeURIComponent('Olá, Nadia Marcelo! Gostaria de receber informações sobre a lista de presentes do casamento da Cheila e do Sidónio.')}`
export function GiftSection() {
  const [modalOpen, setModalOpen] = useState(false); const closeModal = useCallback(() => setModalOpen(false), [])
  return <section className="section gifts"><Reveal><div className="simple-heading"><h2>Presentes</h2></div><p className="section-intro gift-intro">A vossa presença é o nosso maior presente. Contudo, para quem desejar oferecer-nos uma lembrança, disponibilizamos as seguintes opções.</p><div className="gift-actions"><a className="outline-btn" href={giftContactUrl} target="_blank" rel="noreferrer"><FiMessageCircle /> Contactar Responsavel</a><button className="outline-btn" type="button" onClick={() => setModalOpen(true)}><FiCreditCard /> Fazer Transferência</button></div></Reveal><TransferModal open={modalOpen} onClose={closeModal} /></section>
}

