var menu = document.getElementById("menu-small")
var more = document.getElementById("more")
var pos = {start: 0, end: 170}

function render(x) {
    menu.style.position = 'absolute';
    menu.style.height = x+'px';
    more.style.rotate = -(x/1.88888)+"deg"
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
            let tmp = pos.start
            pos.start = pos.end
            pos.end = tmp
        })
        .start()
}

function run () {
    init(pos.start, pos.end)
}