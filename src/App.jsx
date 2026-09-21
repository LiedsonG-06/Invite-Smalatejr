import { motion } from 'framer-motion'
import { invitationData as data } from './data/invitationData'
import { useAudioPlayer } from './hooks/useAudioPlayer'
import { ContactSection } from './components/ContactSection'
import { CountdownSection } from './components/CountdownSection'
import { DressCodeSection } from './components/DressCodeSection'
import { EventDetails } from './components/EventDetails'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { MusicButton } from './components/MusicButton'
import { RSVPSection } from './components/RSVPSection'
import { GiftSection } from './components/GiftSection'
import { GoodGuestGuide } from './components/GoodGuestGuide'

export default function App() {
  const audio = useAudioPlayer(data.music)
  return <><audio {...audio.audioProps} /><motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>{!audio.error && <MusicButton playing={audio.playing} onToggle={audio.toggle} />}<HeroSection /><CountdownSection /><EventDetails /><DressCodeSection /><GiftSection /><RSVPSection /><GoodGuestGuide /><ContactSection /><Footer /></motion.main></>
}
