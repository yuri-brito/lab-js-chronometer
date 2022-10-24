class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime=0;
    this.intervalId=null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.currentTime=0;
    if(printTimeCallback){
      this.intervalId=setInterval( ()=> {
        printTimeCallback();
        this.currentTime++;
      },10)
    }else{this.intervalId=setInterval( ()=> {
      this.currentTime++;
    },10)

    }
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/6000)
  }

  getSeconds() {
    // ... your code goes here
    return (Math.floor((this.currentTime%6000)/100))
  }

  getCentiseconds() {
    // ... your code goes here
    let seg=((Math.floor(this.currentTime%6000))%100)
    return seg
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if ([0,1,2,3,4,5,6,7,8,9].includes(value)){
      return `0${value}`
    }
    return `${value}`
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime=0
  }

  split() {
    // ... your code goes here
    console.log(this.getSeconds())
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
  }
}
