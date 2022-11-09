// Text Area pra mostrar o pedido
let pedidos = document.getElementById('pedidos')


// Mostra a quantidade de Itens
let mostraNItens01 = document.getElementById('nItens01')
let mostraNItens02 = document.getElementById('nItens02')
let mostraNItens03 = document.getElementById('nItens03')
let mostraNItens04 = document.getElementById('nItens04')
let mostraNItens05 = document.getElementById('nItens05')
let mostraNItens06 = document.getElementById('nItens06')
let mostraNItens07 = document.getElementById('nItens07')
let mostraNItens08 = document.getElementById('nItens08')
let mostraNItens09 = document.getElementById('nItens09')
let mostraNItens10 = document.getElementById('nItens10')
let mostraNItens11 = document.getElementById('nItens11')
let mostraNItens12 = document.getElementById('nItens12')

// Numero que vai ser mostrado na quantidade de itens
let nItens01 = 0
let nItens02 = 0
let nItens03 = 0
let nItens04 = 0
let nItens05 = 0
let nItens06 = 0
let nItens07 = 0
let nItens08 = 0
let nItens09 = 0
let nItens10 = 0
let nItens11 = 0
let nItens12 = 0


// Botões
let add01 = document.getElementById('add01')
let ex01 = document.getElementById('ex01')

let add02 = document.getElementById('add02')
let ex02 = document.getElementById('ex02')

let add03 = document.getElementById('add03')
let ex03 = document.getElementById('ex03')

let add04 = document.getElementById('add04')
let ex04 = document.getElementById('ex04')

let add05 = document.getElementById('add05')
let ex05 = document.getElementById('ex05')

let add06 = document.getElementById('add06')
let ex06 = document.getElementById('ex06')

let add07 = document.getElementById('add07')
let ex07 = document.getElementById('ex07')

let add08 = document.getElementById('add08')
let ex08 = document.getElementById('ex08')

let add09 = document.getElementById('add09')
let ex09 = document.getElementById('ex09')

let add10 = document.getElementById('add10')
let ex10 = document.getElementById('ex10')

let add11 = document.getElementById('add11')
let ex11 = document.getElementById('ex11')

let add12 = document.getElementById('add12')
let ex12 = document.getElementById('ex12')

// Valor Itens
let valor01 = 30
let valor02 = 34
let valor03 = 36
let valor04 = 40
let valor05 = 6
let valor06 = 6
let valor07 = 8
let valor08 = 8
let valor09 = 4
let valor10 = 6
let valor11 = 16
let valor12 = 16

// Valor Total
let valorPedido = 0

let mostraValorPedido = document.getElementById('mostraValorPedido')

// Primeiro item
function adicionar01() {
  nItens01++
  mostraNItens01.innerHTML = `Quantidade: ${nItens01}`
  pedidos.innerHTML += `\n${nItens01} Vegetariano Especial`
  
  if (nItens01 != 0) {
    ex01.style.filter = 'brightness(1.2)'
    ex01.style.color = 'white'
  }
}

function excluir01() {
  if (nItens01 > 0) {
    nItens01--
    mostraNItens01.innerHTML = `Quantidade: ${nItens01}`
    pedidos.innerHTML += `\n${nItens01} Vegetariano Especial`
  }
  
}

// Segundo item
function adicionar02() {
  nItens02++
  mostraNItens02.innerHTML = `Quantidade: ${nItens02}`
  pedidos.innerHTML += `\n${nItens02}  Especial da Casa`

  if (nItens02 != 0) {
    ex02.style.filter = 'brightness(1.2)'
    ex02.style.color = 'white'
  }
}

function excluir02() {
  if (nItens02 > 0) {
    nItens02--
    mostraNItens02.innerHTML = `Quantidade: ${nItens02}`
    pedidos.innerHTML += `\n${nItens02} Especial da Casa`
  }
}

// Terceiro item
function adicionar03() {
  nItens03++
  mostraNItens03.innerHTML = `Quantidade: ${nItens03}`
  pedidos.innerHTML += `\n${nItens03} Maionese Especial`
  if (nItens03 != 0) {
    ex03.style.filter = 'brightness(1.2)'
    ex03.style.color = 'white'
  }
}

function excluir03() {
  if (nItens03 > 0) {
    nItens03--
    mostraNItens03.innerHTML = `Quantidade: ${nItens03}`
    pedidos.innerHTML += `\n${nItens03} Maionese Especial`
  }
}

// Quarto item
function adicionar04() {
  nItens04++
  mostraNItens04.innerHTML = `Quantidade: ${nItens04}`
  pedidos.innerHTML += `\n${nItens04} Triplo Especiarias`
  if (nItens04 != 0) {
    ex04.style.filter = 'brightness(1.2)'
    ex04.style.color = 'white'
  }
}

function excluir04() {
  if (nItens04 > 0) {
    nItens04--
    mostraNItens04.innerHTML = `Quantidade: ${nItens04}`
    pedidos.innerHTML += `\n${nItens04} Triplo Especiarias`
  }
}

// Quinto item
function adicionar05() {
  nItens05++
  mostraNItens05.innerHTML = `Quantidade: ${nItens05}`
  pedidos.innerHTML += `\n${nItens05} Coca-Cola`
  if (nItens05 != 0) {
    ex05.style.filter += 'brightness(1.2)'
    ex05.style.color = 'white'
  }
}

function excluir05() {
  if (nItens05 > 0) {
    nItens05--
    mostraNItens05.innerHTML = `Quantidade: ${nItens05}`
    pedidos.innerHTML += `\n${nItens05} Coca-Cola`
  }
}

// Sexto item
function adicionar06() {
  nItens06++
  mostraNItens06.innerHTML = `Quantidade: ${nItens06}`
  pedidos.innerHTML += `\n${nItens06} Sprite`
  if (nItens06 != 0) {
    ex06.style.filter = 'brightness(1.2)'
    ex06.style.color = 'white'
  }
}

function excluir06() {
  if (nItens06 > 0) {
    nItens06--
    mostraNItens06.innerHTML = `Quantidade: ${nItens06}`
    pedidos.innerHTML += `\n${nItens06} Sprite`
  }
}

// Sétimo item
function adicionar07() {
  nItens07++
  mostraNItens07.innerHTML = `Quantidade: ${nItens07}`
  pedidos.innerHTML += `\n${nItens07} Suco de Laranja`
  if (nItens07 != 0) {
    ex07.style.filter = 'brightness(1.2)'
    ex07.style.color = 'white'
  }
}

function excluir07() {
  if (nItens07 > 0) {
    nItens07--
    mostraNItens07.innerHTML = `Quantidade: ${nItens07}`
    pedidos.innerHTML += `\n${nItens07} Suco de Laranja`
  }
}

// Oitavo item
function adicionar08() {
  nItens08++
  mostraNItens08.innerHTML = `Quantidade: ${nItens08}`
  pedidos.innerHTML += `\n${nItens08} Suco de Maracujá`
  if (nItens08 != 0) {
    ex08.style.filter = 'brightness(1.2)'
    ex08.style.color = 'white'
  }
}

function excluir08() {
  if (nItens08 > 0) {
    nItens08--
    mostraNItens08.innerHTML = `Quantidade: ${nItens08}`
    pedidos.innerHTML += `\n${nItens08} Suco de Maracujá`
  }
}

// Nono item
function adicionar09() {
  nItens09++
  mostraNItens09.innerHTML = `Quantidade: ${nItens09}`
  pedidos.innerHTML += `\n${nItens09} Casquinha`
  if (nItens09 != 0) {
    ex09.style.filter = 'brightness(1.2)'
    ex09.style.color = 'white'
  }
}

function excluir09() {
  if (nItens09 > 0) {
    nItens09--
    mostraNItens09.innerHTML = `Quantidade: ${nItens09}`
    pedidos.innerHTML += `\n${nItens09} Casquinha`
  }
}

// Decímo item
function adicionar10() {
  nItens10++
  mostraNItens10.innerHTML = `Quantidade: ${nItens10}`
  pedidos.innerHTML += `\n${nItens10} Sorvete no Copo`
  if (nItens10 != 0) {
    ex10.style.filter = 'brightness(1.2)'
    ex10.style.color = 'white'
  }
}

function excluir10() {
  if (nItens10 > 0) {
    nItens10--
    mostraNItens10.innerHTML = `Quantidade: ${nItens10}`
    pedidos.innerHTML += `\n${nItens10} Sorvete no Copo`
  }
}

// Décimo primeiro item
function adicionar11() {
  nItens11++
  mostraNItens11.innerHTML = `Quantidade: ${nItens11}`
  pedidos.innerHTML += `\n${nItens11} Milk-Shake de Chocolate`
  if (nItens11 != 0) {
    ex11.style.filter = 'brightness(1.2)'
    ex11.style.color = 'white'
  }
}

function excluir11() {
  if (nItens11 > 0) {
    nItens11--
    mostraNItens11.innerHTML = `Quantidade: ${nItens11}`
    pedidos.innerHTML += `\n${nItens11} Milk-Shake de Chocolate`
  }
}

// Décimo segundo item
function adicionar12() {
  nItens12++
  mostraNItens12.innerHTML = `Quantidade: ${nItens12}`
  pedidos.innerHTML += `\n${nItens12} Milk-Shake de Morango`
  if (nItens12 != 0) {
    ex12.style.filter = 'brightness(1.2)'
    ex12.style.color = 'white'
  }
}

function excluir12() {
  if (nItens12 > 0) {
    nItens12--
    mostraNItens12.innerHTML = `Quantidade: ${nItens12}`
    pedidos.innerHTML += `\n${nItens12} Milk-Shake de Morango`
  }

}






// Botão que abre o Modal, de confirmar pedido
function confirmarPedido() {
  valorPedido = (nItens01 * valor01) + (nItens02 * valor02) + (nItens03 * valor03) + (nItens04 * valor04) + (nItens05 * valor05) + (nItens06 * valor06) + (nItens07 * valor07) + (nItens08 * valor08) + (nItens09 * valor09) + (nItens10 * valor10) + (nItens11 * valor11) + (nItens12 * valor12) 

  mostraValorPedido.innerHTML = `O valor do pedido é de: ${valorPedido} R$`
}


// Modal








