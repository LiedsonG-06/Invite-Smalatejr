import { useEffect, useRef, useState } from 'react'

export function useAudioPlayer(config) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = config.initialVolume
  }, [config.initialVolume])

  const play = async () => {
    if (!audioRef.current || error) return
    try {
      await audioRef.current.play()
    } catch {
      setPlaying(false)
    }
  }

  const toggle = async () => {
    if (!audioRef.current || error) return
    try {
      if (audioRef.current.paused) await audioRef.current.play()
      else audioRef.current.pause()
    } catch {
      setPlaying(false)
      setError(true)
    }
  }

  const audioProps = {
    ref: audioRef,
    src: config.src,
    loop: config.loop,
    preload: 'none',
    onPlay: () => setPlaying(true),
    onPause: () => setPlaying(false),
    onError: () => {
      setPlaying(false)
      setError(true)
    },
  }

  return { audioProps, playing, error, play, toggle }
}
