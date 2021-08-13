const loadText = document.querySelector('.loading-text')
const backgroundImage = document.querySelector('.bg-img')
const enterBtn = document.querySelector('.enter-button')

let load = 0

let int = setInterval(bluring, 20)

function bluring() {
    load ++

    if (load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    backgroundImage.style.filter = `blur(${scale(load, 0, 100, 32, 0)}px)`
    enterBtn.style.opacity = scale(load, 0, 100, -10, 1)
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min)
}