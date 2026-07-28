import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { invitationData as data } from './data/invitationData'
import { useAudioPlayer } from './hooks/useAudioPlayer'
import { ContactSection } from './components/ContactSection'
import { CountdownSection } from './components/CountdownSection'
import { CoupleSection } from './components/CoupleSection'
import { DressCodeSection } from './components/DressCodeSection'
import { EventDetails } from './components/EventDetails'
import { Footer } from './components/Footer'
import { GallerySection } from './components/GallerySection'
import { HeroSection } from './components/HeroSection'
import { LocationSection } from './components/LocationSection'
import { MessageSection } from './components/MessageSection'
import { MusicButton } from './components/MusicButton'
import { OpeningScreen } from './components/OpeningScreen'
import { ProgrammeSection } from './components/ProgrammeSection'
import { RSVPSection } from './components/RSVPSection'

export default function App() {
  const [opened, setOpened] = useState(false)
  const audio = useAudioPlayer(data.music)

  useEffect(() => {
    document.body.classList.toggle('locked', !opened)
    return () => document.body.classList.remove('locked')
  }, [opened])

  const openInvitation = async () => {
    setOpened(true)
    if (data.music.autoplayAfterOpening) await audio.play()
  }

  return (
    <>
      <audio {...audio.audioProps} />
      <AnimatePresence>{!opened && <OpeningScreen onOpen={openInvitation} />}</AnimatePresence>
      {opened && (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.7 }}>
          {!audio.error && <MusicButton playing={audio.playing} onToggle={audio.toggle} />}
          <HeroSection />
          <CoupleSection />
          <CountdownSection />
          <EventDetails />
          <LocationSection />
          <ProgrammeSection />
          <DressCodeSection />
          <GallerySection />
          <MessageSection />
          <RSVPSection />
          <ContactSection />
          <Footer />
        </motion.main>
      )}
    </>
  )
}
