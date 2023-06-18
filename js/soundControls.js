export default function Controls({
  forestSoundOn,
  forestSoundOff,
  rainSoundOn,
  rainSoundOff,
  coffeeShopSoundOn,
  coffeeShopSoundOff,
  firePlaceSoundOn,
  fireplaceSoundOff
}) {
  
  function forestSound() {
    forestSoundOn.classList.toggle('hide')
    forestSoundOff.classList.toggle('hide')
  }

  function rainSound() {
    rainSoundOn.classList.toggle('hide')
    rainSoundOff.classList.toggle('hide')
  }

  function coffeeShopSound() {
    coffeeShopSoundOn.classList.toggle('hide')
    coffeeShopSoundOff.classList.toggle('hide')
  }

  function fireplaceSound() {
    firePlaceSoundOn.classList.toggle('hide')
    fireplaceSoundOff.classList.toggle('hide')
  }

  return {
    forestSound,
    rainSound,
    coffeeShopSound,
    fireplaceSound
  }
}
