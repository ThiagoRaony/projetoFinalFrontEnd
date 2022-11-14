// Carrossel 1

let images1 = document.getElementById('images-carrossel1')
let image1 = document.querySelectorAll('#images-carrossel1 img')

let imagemAtual1 = 0

function carrosselAutomatico1() {
  imagemAtual1++
  if (imagemAtual1 > image1.length - 1) {
    imagemAtual1 = 0
  }
  images1.style.transform = `translateX(${-imagemAtual1 * 500}px)`
}

setInterval(carrosselAutomatico1, 3000)

// ---------------------------

// Carrossel 2

let images = document.getElementById('carrossel2')
let image = document.querySelectorAll('#carrossel2 .slide')

let imagemAtual = 0

function carrosselAutomatico() {
  imagemAtual++
  if (imagemAtual > image.length + 2) {
    imagemAtual = 0
  }
  images.style.transform = `translateX(${-imagemAtual * 500}px)`
}

setInterval(carrosselAutomatico, 5000)

// --------------------

//images.style.transform = `translateX(${-imagemAtual * 500}px)`//