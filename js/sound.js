export default function() {
  const forestAudio = new Audio('assets/sounds/Floresta.wav')
  const rainNoise = new Audio('assets/sounds/Chuva.wav')
  const coffeeShopAudio = new Audio('assets/sounds/Cafeteria.wav')
  const fireplaceAudio = new Audio('assets/sounds/Lareira.wav')

  const soundForestStart = () => {
    forestAudio.play()
    forestAudio.loop = true
  }

  const soundRainStart = () => {
    rainNoise.play()
    rainNoise.loop = true
  }

  const soundCoffeeStart = () => {
    coffeeShopAudio.play()
    coffeeShopAudio.loop = true
  }

  const soundFireplaceStart = () => {
    fireplaceAudio.play()
    fireplaceAudio.loop = true
  }

  const soundForestEnd = () => {
    forestAudio.pause()
  }

  const soundRainEnd = () => {
    rainNoise.pause()
  }

  const soundCoffeeEnd = () => {
    coffeeShopAudio.pause()
  }

  const soundFireplaceEnd = () => {
    fireplaceAudio.pause()
  }


  return {
    soundForestStart,
    soundRainStart,
    soundCoffeeStart,
    soundFireplaceStart,
    soundForestEnd,
    soundRainEnd,
    soundCoffeeEnd,
    soundFireplaceEnd,
  }
}


