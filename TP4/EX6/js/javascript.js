var menu = document.getElementById("menu")
var more = document.getElementById("more")
var pos = {start: 0, end: 320}
var op = false

function render(x) {
    menu.style.width = x+'px';
}

function animate() {
	requestAnimationFrame(animate)
	TWEEN.update()
}
requestAnimationFrame(animate)

const init = (start, End) => {
    const coords = { x: start}
    const tween = new TWEEN.Tween(coords)
        .to({ x:End}, 500)
        .easing(TWEEN.Easing.Quadratic.out)
        .onUpdate(() => {
            render(coords.x)
        })
        .start()
}

function openn () {
    if (!op){
        init(pos.start, pos.end)
        op = true

    }
}

function closse () {
    init(pos.end, pos.start)
    op = false
}