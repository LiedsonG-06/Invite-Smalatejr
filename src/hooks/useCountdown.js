import { useEffect, useState } from 'react'

function calculateTimeRemaining(targetDate) {
  const difference = new Date(targetDate).getTime() - Date.now()
  if (difference <= 0) return null

  return {
    Dias: Math.floor(difference / 86400000),
    Horas: Math.floor(difference / 3600000) % 24,
    Minutos: Math.floor(difference / 60000) % 60,
    Segundos: Math.floor(difference / 1000) % 60,
  }
}

export function useCountdown(targetDate) {
  const [time, setTime] = useState(() => calculateTimeRemaining(targetDate))

  useEffect(() => {
    const timer = window.setInterval(
      () => setTime(calculateTimeRemaining(targetDate)),
      1000,
    )
    return () => window.clearInterval(timer)
  }, [targetDate])

  return time
}
