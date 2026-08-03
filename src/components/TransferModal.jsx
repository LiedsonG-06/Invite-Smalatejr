import { useEffect, useRef, useState } from 'react'
import { FiCheck, FiCopy, FiX } from 'react-icons/fi'
const transferDetails = [['Nome do titular', '[Nome do titular]'], ['Banco', '[Nome do banco]'], ['Número da conta', '[Número da conta]'], ['NIB', '[NIB]'], ['IBAN', '[IBAN]'], ['Carteira móvel', '[Número de telefone]']]
export function TransferModal({ open, onClose }) {
  const [copied, setCopied] = useState(''); const closeRef = useRef(null)
  useEffect(() => { if (!open) return undefined; closeRef.current?.focus(); const onKey = (event) => { if (event.key === 'Escape') onClose() }; document.addEventListener('keydown', onKey); return () => document.removeEventListener('keydown', onKey) }, [open, onClose])
  if (!open) return null
  const copy = async (label, value) => { try { await navigator.clipboard.writeText(value); setCopied(label); window.setTimeout(() => setCopied(''), 1800) } catch { setCopied('') } }
  return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}><div className="transfer-modal" role="dialog" aria-modal="true" aria-labelledby="transfer-title"><button ref={closeRef} className="modal-close" type="button" onClick={onClose} aria-label="Fechar dados de transferência"><FiX /></button><h3 id="transfer-title">Dados para transferência</h3><p>Os dados abaixo serão disponibilizados pelos noivos.</p><dl>{transferDetails.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd><button type="button" onClick={() => copy(label, value)} aria-label={`Copiar ${label}`}>{copied === label ? <FiCheck /> : <FiCopy />}</button></div>)}</dl></div></div>
}
