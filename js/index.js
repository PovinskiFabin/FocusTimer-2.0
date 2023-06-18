import Timer from "./timer.js"
import Controls from "./soundControls.js"
import Sound from "./sound.js"
import Events from "./events.js"
import { 
  forestSoundOff,
  rainSoundOff,
  coffeeShopSoundOff,
  fireplaceSoundOff,
  forestSoundOn,
  rainSoundOn,
  coffeeShopSoundOn,
  firePlaceSoundOn,
  minutesDisplay,
  secondsDisplay,
 } from "./elements.js"

const timer = Timer({
   minutesDisplay,
   secondsDisplay
  })
const soundControls = Controls({
    forestSoundOn,
    forestSoundOff,
    rainSoundOn,
    rainSoundOff,
    coffeeShopSoundOn,
    coffeeShopSoundOff,
    firePlaceSoundOn,
    fireplaceSoundOff
  })
const sound = Sound()

Events({soundControls, timer, sound})





