var infos = document.getElementById("infos")
var inp = document.getElementById("input-name")
var load = document.getElementById("loader-container")

function fetchNewActivity () {
    let nameInput = inp.value
    if(nameInput !==""){
        infos.style.display = "none"
        load.style.display = "flex"
        infos.innerHTML = ""
        fetch("https://api.nationalize.io/?name="+nameInput).then(async (res)=>{
            let api = await res.json();
            let data = api["country"]
            data.forEach(element => {
                renderInfo(element)
            });
            inp.value = ""
            infos.style.display = "flex"
            load.style.display = "none"
        })
    }
}

function renderInfo (data) {
    infos.innerHTML += `
    <div class="info-container w-full border-gray-300 border-[1px] flex justify-between items-center bg-[#f4f4f4] rounded-lg p-2 m-1">
        <div id="name-info" class="font-bold">${data["country_id"]}</div>
        <div id="gender" class="text-orange-600 font-bold">${(data["probability"]*100).toPrecision(2)}%</div>
    </div>
    `
}