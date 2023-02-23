var nameInfo = document.getElementById("name-info")
var gender = document.getElementById("gender")
var probability = document.getElementById("probability")
var inp = document.getElementById("input-name")
var nameInput = inp.value
var load = document.getElementById("loader-container")
var info = document.getElementById("info-container")

function fetchNewActivity () {
    var nameInput = inp.value
    info.style.display = "none"
    load.style.display = "flex"

    fetch("https://api.genderize.io?name="+nameInput).then(async (res)=>{
        let data = await res.json();
        renderInfo(data)
        inp.value = ""
        load.style.display = "none"
        info.style.display = "flex"
    })
}

function renderInfo (data) {
    nameInfo.textContent = data["name"]
    gender.textContent = data["gender"]
    probability.textContent = (data["probability"]*100) + "%"
}