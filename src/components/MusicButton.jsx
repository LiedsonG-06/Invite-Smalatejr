import { FiMusic, FiVolumeX } from 'react-icons/fi'

export function MusicButton({ playing, onToggle }) {
  return (
    <button
      className={`music-btn ${playing ? 'playing' : ''}`}
      onClick={onToggle}
      aria-label={playing ? 'Pausar música' : 'Reproduzir música'}
      aria-pressed={playing}
    >
      {playing ? <FiMusic /> : <FiVolumeX />}
      <span />
    </button>
  )
}
