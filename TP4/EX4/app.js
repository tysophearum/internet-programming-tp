class Color {
    colorType = ""
    record = []
    constructor (type) {
        this.colorType = type
    }

    generate () {
        if(this.colorType.toLocaleUpperCase() === "RGB"){
            let r = this.getRandomNumber();
            let g = this.getRandomNumber();
            let b = this.getRandomNumber();
            return [r,g,b];
        }
        else if (this.colorType.toLocaleUpperCase() === "HEX"){
            return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
        }
    }
    getRandomNumber() {
        return Math.floor(Math.random()*(255 + 1));
    }
    getRecords(color) {
        this.record.push(color)
    }
    reset() {
        this.record = []
    }
}

var col = new Color("hex")
var generate = document.getElementById("generate")
var reset = document.getElementById("reset")
var backgroundEl = document.getElementById("background")
var colorsEl = document.getElementById("colors")
var colorsText = document.getElementById("color-text")

if (JSON.parse(localStorage.getItem("colorsArray")) != null){
    col.record = JSON.parse(localStorage.getItem("colorsArray"))
    backgroundEl.style.backgroundColor = col.record[0]
    if (col.record[0] != undefined) {
        colorsText.innerText = col.record[0]
    }
    colorsText.style.color = col.record[0]
    renderRecord()
}

generate.addEventListener("click", ()=>{
    let randomCol = col.generate()
    backgroundEl.style.backgroundColor = randomCol
    colorsText.innerText = randomCol
    colorsText.style.color = randomCol
    col.record.unshift(randomCol)
    localStorage.setItem("colorsArray", JSON.stringify(col.record))
    renderRecord()
})

reset.addEventListener("click", ()=>{
    col.reset()
    backgroundEl.style.backgroundColor = null
    colorsText.innerText = null
    colorsText.style.color = null
    renderRecord()
    localStorage.setItem("colorsArray", JSON.stringify(col.record))
})

function renderRecord() {
    let colRecs = ""
    for (let i = 0; i<col.record.length; i++){
        colRecs += `
        <div class="w-fit flex justify-center items-center">
            <div>${col.record[i]}</div>
            <div class="w-4 h-4 ml-1 bg-[${col.record[i]}]"></div>
        </div>
        `
    }
    colorsEl.innerHTML = colRecs
}