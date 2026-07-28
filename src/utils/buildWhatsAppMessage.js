export function buildWhatsAppMessage(form, couple) {
  if (form.attendance === 'Confirmo presença') {
    return `Olá, ${couple.bride} e ${couple.groom}!\n\nSou ${form.name} e confirmo a minha presença no vosso casamento.\n\nNúmero de acompanhantes: ${form.guests}.${form.note ? `\n\nObservação: ${form.note}` : ''}`
  }

  return `Olá, ${couple.bride} e ${couple.groom}!\n\nSou ${form.name}. Infelizmente, não poderei comparecer ao vosso casamento.\n\nDesejo-vos muitas felicidades nesta nova etapa.${form.note ? `\n\nObservação: ${form.note}` : ''}`
}
