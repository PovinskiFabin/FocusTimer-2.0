export default function Timer({
  minutesDisplay,
  secondsDisplay
}) {

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)


  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
  function reset() {
    updateDisplay(minutes, 0)
    hold()
  }

  function contdown() {
    timerTimeOut = setTimeout(function() {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isfineshed = minutes <= 0 && seconds <= 0
  
      updateDisplay(minutes, 0)
  
      if(isfineshed) {
        reset()
        return
      }
  
      if(seconds <= 0){
        seconds = 60
        --minutes
      }
  
      updateDisplay(minutes, String(seconds - 1))
  
      contdown()
  
    }, 1000)
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function moreTime() {
    minutes = minutesDisplay.textContent = Number(minutes + 5)
    updateDisplay(minutes, 0)
  }

  function lessTime() {
    if(minutes <= 0) {
      return
    }
    minutes = minutesDisplay.textContent = Number(minutes - 5)
    updateDisplay(minutes, 0)
  }
  
  return {
    contdown,
    reset,
    updateDisplay,
    hold,
    moreTime,
    lessTime
  }

}




