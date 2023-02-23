class counter {
    number = 0
    constructor (num) {
        this.number = num
    }
    decrease() {
        this.number--
        localStorage.setItem("counter", JSON.stringify(this.number))
    }
    increase() {
        this.number++
        localStorage.setItem("counter", JSON.stringify(this.number))
    }
    reset() {
        this.number = 0
        localStorage.setItem("counter", JSON.stringify(this.number))
    }
}

function checkNum() {
    if (c.number > 0) {
        counterEl.style.color = "green"
    }
    else if (c.number < 0) {
        counterEl.style.color = "red"
    }
    else if (c.number == 0) {
        counterEl.style.color = "grey"
    }
}

var decrease = document.getElementById("decrease")
var increase = document.getElementById("increase")
var reset = document.getElementById("reset")
var counterEl = document.getElementById("counter")
var c = new counter(0)
if (localStorage.getItem("counter") != null) {
    c = new counter(JSON.parse(localStorage.getItem("counter")))
}

checkNum()

counterEl.innerText = c.number

increase.addEventListener("click", ()=> {
    c.increase()
    counterEl.innerText = c.number
    checkNum()
})

decrease.addEventListener("click", ()=> {
    c.decrease()
    counterEl.innerText = c.number
    checkNum()
})

reset.addEventListener("click", ()=> {
    c.reset()
    counterEl.innerText = c.number
    checkNum()
})

