import weddingMusic from '../assets/audio/dom_bruno-mars-when-i-was-your-man.mp3'
import coupleHero from '../assets/images/couple-hero.png'

export const invitationData = {
  couple: {
    bride: 'Cheila',
    groom: 'Sidónio',
    displayName: 'Cheila & Sidónio',
    monogram: 'C · S',
  },
  eventDate: '2026-12-12T15:00:00+02:00',
  displayDate: '12 de Dezembro de 2026',
  intro: 'Entre encontros, risos e sonhos partilhados, construímos uma história que agora ganha um novo capítulo. Queremos vivê-lo rodeados por quem faz parte da nossa caminhada.',
  music: {
    src: weddingMusic,
    autoplayAfterOpening: true,
    loop: true,
    initialVolume: 0.4,
  },
  images: {
    hero: {
      src: coupleHero,
      alt: 'Cheila e Sidónio juntos num jardim',
      position: '50% 20%',
      mobilePosition: '50% 0%',
    },
    bride: null,
    groom: null,
    couple: {
      src: coupleHero,
      alt: 'Cheila e Sidónio abraçados no jardim',
      position: '50% 18%',
    },
    location: null,
    gallery: [
      {
        src: coupleHero,
        alt: 'Fotografia de Cheila e Sidónio no jardim',
        orientation: 'vertical',
        position: '50% 18%',
      },
    ],
  },
  whatsapp: '258840000000',
  mapsUrl: 'https://maps.google.com/?q=Maputo+Mozambique',
  rsvpDeadline: '20 de Novembro de 2026',
  location: {
    city: 'Maputo',
    name: 'Jardins do Índico',
    address: 'Avenida da Marginal, Maputo, Moçambique',
    description: 'Um cenário verde e sereno junto ao Índico, escolhido para partilharmos convosco cada instante deste dia.',
  },
  events: [
    { title: 'Cerimónia', date: '12 de Dezembro de 2026', time: '15h00', location: 'Capela de Santo António', address: 'Av. Friedrich Engels, Maputo' },
    { title: 'Recepção', date: '12 de Dezembro de 2026', time: '18h00', location: 'Jardins do Índico', address: 'Avenida da Marginal, Maputo' },
  ],
  programme: [
    { time: '15h00', title: 'Recepção dos convidados', description: 'Sejam bem-vindos ao início da nossa celebração.' },
    { time: '16h00', title: 'Cerimónia', description: 'O momento em que dizemos sim para sempre.' },
    { time: '18h00', title: 'Cocktail & fotografias', description: 'Brindes, abraços e memórias para guardar.' },
    { time: '19h30', title: 'Jantar', description: 'Uma mesa preparada com carinho para todos.' },
    { time: '21h30', title: 'Festa', description: 'Música, dança e alegria até ao último instante.' },
  ],
  dressCode: {
    title: 'Formal & sofisticado',
    description: 'Sugerimos tons naturais e elegantes que complementem o ambiente da nossa celebração.',
    colors: [
      { name: 'Sálvia', hex: '#89927c' },
      { name: 'Areia', hex: '#d8c6aa' },
      { name: 'Terracota', hex: '#a96f52' },
      { name: 'Champanhe', hex: '#eadfc9' },
      { name: 'Verde', hex: '#263b30' },
    ],
    note: 'O branco e o marfim estão reservados à noiva.',
  },
  guestMessage: 'A nossa história torna-se ainda mais especial com a presença das pessoas que amamos. Será uma alegria partilhar este momento consigo.',
  finalMessage: 'Com carinho, aguardamos por si neste dia tão especial.',
  contacts: [
    { name: 'Cheila', role: 'Noiva', phone: '+258 84 000 0000', whatsapp: '258840000000' },
    { name: 'Sidónio', role: 'Noivo', phone: '+258 85 000 0000', whatsapp: '258850000000' },
    { name: 'Dulce', role: 'Organização', phone: '+258 86 000 0000', whatsapp: '258860000000' },
  ],
}
