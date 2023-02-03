var historyBtn = document.getElementById("history")
var visionBtn = document.getElementById("vision")
var goalsBtn = document.getElementById("goals")
var title = document.getElementById("title")
var content = document.getElementById("content")

historyBtn.addEventListener("click", () => {
    historyBtn.style.backgroundColor = "white"
    visionBtn.style.backgroundColor = "#dbe2ec"
    goalsBtn.style.backgroundColor = "#dbe2ec"
    
    title.innerText = "History"
    
    content.innerText = `What is the basic story of Little Red Riding Hood?
    "Little Red Riding Hood" by Charles Perrault tells of a young girl who comes across a cunning wolf on the way to her grandmother's home. The wolf deceives both her and her grandmother and eats them, a grim ending for the protagonist of the story. This version, by Charles Perrault, was first published in France in 1697.`

})

visionBtn.addEventListener("click", () => {
    historyBtn.style.backgroundColor = "#dbe2ec"
    visionBtn.style.backgroundColor = "white"
    goalsBtn.style.backgroundColor = "#dbe2ec"

    title.innerText = "Vision"
    
    content.innerText = `A father's wish magically brings a wooden boy to life in Italy, giving him a chance to care for the child. However, the two of them have to struggle to find a place for themselves as Italy becomes embroiled in fascism.`

})

goalsBtn.addEventListener("click", () => {
    historyBtn.style.backgroundColor = "#dbe2ec"
    visionBtn.style.backgroundColor = "#dbe2ec"
    goalsBtn.style.backgroundColor = "white"
    
    title.innerText = "Goals"
    
    content.innerText = `Mountain View is a city in Santa Clara County, California, United States. Named for its views of the Santa Cruz Mountains, it has a population of 82,376. Mountain View was integral to the early history and growth of Silicon Valley, and is the location of many high technology companies.`

})