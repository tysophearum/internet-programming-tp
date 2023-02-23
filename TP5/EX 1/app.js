var type = document.getElementById("type-info")
var participants = document.getElementById("participants-info")
var price = document.getElementById("price-info")
var link = document.getElementById("link-info")
var load = document.getElementById("loader-container")
var info = document.getElementById("info-container")


function fetchNewActivity () {
    info.style.display = "none"
    load.style.display = "flex"
    
    fetch("https://www.boredapi.com/api/activity").then(async (res)=>{
        let data = await res.json();
        renderInfo(data)
        load.style.display = "none"
        info.style.display = "flex"
    })

}

function renderInfo (data) {
    type.textContent = data["type"]
    participants.textContent = data["participants"]
    price.textContent = data["price"]
    link.textContent = data["link"]
}