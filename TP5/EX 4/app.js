var infos = document.getElementById("infos")
var inp = document.getElementById("country")
var load = document.getElementById("loader-container")

function fetchNewActivity () {
    let nameInput = inp.value
    if(nameInput !==""){
        infos.innerHTML = ""
        infos.style.display = "none"
        load.style.display = "grid"
        fetch("http://universities.hipolabs.com/search?country="+nameInput).then(async (res)=>{
            let data = await res.json();
            data.forEach(element => {
                renderInfo(element)
            });
            inp.value = ""
            infos.style.display = "grid"
            load.style.display = "none"
        })
    }
}

function renderInfo (data) {
    infos.innerHTML += `
        <div class="info-container w-full border-gray-300 border-[1px] flex flex-col items-center bg-[#f4f4f4] rounded-lg p-2 m-1">
            <div id="uniname" class="font-bold">${data['name']}</div>
            <div id="country-info" class="text-sm">(${data['country']} - ${data['alpha_two_code']})</div>
            <div class="linkgp flex flex-row justify-center">
                <a href="${data.domains}" class="link text-sm text-blue-700">${data.domains}</a>
            </div>
        </div>
    `
}