function ParticlesBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black">
      <div className="undertale-bg-image absolute inset-0" />
      <div className="absolute inset-0 bg-black/35" />
      <div className="undertale-vignette absolute inset-0" />
    </div>
  )
}

export default ParticlesBackground
