import { useEffect, useRef, useState } from 'react'

function BackgroundMusic() {
  const audioRef = useRef(null)
  const [started, setStarted] = useState(false)
  const [muted, setMuted] = useState(false)

  // Define volume baixo assim que o elemento montar
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = 0.18
  }, [])

  // Inicia a música na primeira interação do usuário
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!started) {
        audioRef.current?.play()
        setStarted(true)
      }
    }

    window.addEventListener('click', handleFirstInteraction, { once: true })
    window.addEventListener('keydown', handleFirstInteraction, { once: true })

    return () => {
      window.removeEventListener('click', handleFirstInteraction)
      window.removeEventListener('keydown', handleFirstInteraction)
    }
  }, [started])

  const toggleMute = (e) => {
    e.stopPropagation()
    const next = !muted
    setMuted(next)
    if (audioRef.current) audioRef.current.muted = next
  }

  return (
    <>
      <audio ref={audioRef} src="/shop.flac" loop preload="auto" />
      <button
        onClick={toggleMute}
        title={muted ? 'Ativar música' : 'Silenciar música'}
        className="fixed bottom-4 right-4 z-50 border-2 border-white bg-black px-3 py-2 text-base text-white transition hover:border-yellow-400 hover:text-yellow-400"
      >
        {muted ? '♪ OFF' : '♪ ON'}
      </button>
    </>
  )
}

export default BackgroundMusic
