import { useCallback, useState } from 'react'
import { FiCreditCard, FiExternalLink, FiGift } from 'react-icons/fi'
import { Reveal } from './common/Reveal'
import { TransferModal } from './TransferModal'
const giftListUrl = import.meta.env.VITE_GIFT_LIST_URL?.trim()
export function GiftSection() {
  const [modalOpen, setModalOpen] = useState(false); const [notice, setNotice] = useState(''); const closeModal = useCallback(() => setModalOpen(false), [])
  const openGiftList = () => { if (!giftListUrl) setNotice('A lista de presentes será disponibilizada em breve.'); else window.open(giftListUrl, '_blank', 'noopener,noreferrer') }
  return <section className="section gifts"><Reveal><div className="simple-heading"><h2>Presentes</h2></div><p className="section-intro gift-intro">A vossa presença é o nosso maior presente. Contudo, para quem desejar oferecer-nos uma lembrança, disponibilizamos as seguintes opções.</p><div className="gift-actions"><button className="outline-btn" type="button" onClick={openGiftList}><FiGift /> Ver Lista de Presentes <FiExternalLink /></button><button className="outline-btn" type="button" onClick={() => setModalOpen(true)}><FiCreditCard /> Fazer Transferência</button></div>{notice && <p className="gift-notice" role="status">{notice}</p>}</Reveal><TransferModal open={modalOpen} onClose={closeModal} /></section>
}

