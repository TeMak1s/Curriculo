function playAudio(src) {
  try {
    const audio = new Audio(src)
    audio.volume = 0.5
    audio.play()
  } catch {
    // silently ignore if audio is not available
  }
}

/** Som de hover no menu */
export function playMenuHover() {
  playAudio('/snd_select.wav')
}

/** Som de confirmação */
export function playConfirm() {
  playAudio('/mus_sfx_a_grab.ogg')
}

/** Som de enviar mensagem */
export function playTextNoise() {
  playAudio('/snd_textnoise.wav')
}

/** Som de salvar — botão Download CV */
export function playSave() {
  playAudio('/snd_save.wav')
}

/** Som de telefone — botão Contato */
export function playPhone() {
  playAudio('/snd_phone.wav')
}
