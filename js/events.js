import {
  buttonPlay,
  buttonStop,
  buttonMore,
  buttonLess,
  forestSoundOn,
  forestSoundOff,
  rainSoundOn,
  rainSoundOff,
  coffeeShopSoundOn,
  coffeeShopSoundOff,
  firePlaceSoundOn,
  fireplaceSoundOff
} from "./elements.js"

export default function Events({soundControls, sound, timer}) {

  buttonPlay.addEventListener('click', function() {
    timer.contdown()
  })
  buttonStop.addEventListener('click', function() {
    timer.hold()
  })
  buttonMore.addEventListener('click', function() {
    timer.moreTime()
  })
  buttonLess.addEventListener('click', function() {
    timer.lessTime()
  })

  forestSoundOff.addEventListener('click', function() {
    soundControls.forestSound()
    sound.soundForestStart()
  })
  forestSoundOn.addEventListener('click', function() {
    soundControls.forestSound()
    sound.soundForestEnd()
  })
  rainSoundOff.addEventListener('click', function() {
    soundControls.rainSound()
    sound.soundRainStart()
  })
  rainSoundOn.addEventListener('click', function() {
    soundControls.rainSound()
    sound.soundRainEnd()
  })
  coffeeShopSoundOff.addEventListener('click', function() {
    soundControls.coffeeShopSound()
    sound.soundCoffeeStart()
  })
  coffeeShopSoundOn.addEventListener('click', function() {
    soundControls.coffeeShopSound()
    sound.soundCoffeeEnd()
  })
  fireplaceSoundOff.addEventListener('click', function() {
    soundControls.fireplaceSound()
    sound.soundFireplaceStart()
  })
  firePlaceSoundOn.addEventListener('click', function() {
    soundControls.fireplaceSound()
    sound.soundFireplaceEnd()
  })
}