let card = {
    titulo: 'Crochet Bonito',
    img: 'assets/img_placeholder.png',
    alt: 'imagem',
    valor: 220
}

let comentarios = {
    titulo: 'Muito fera',
    usuario: 'Diegão',
    comentario: "Lih's Crochet é muito bom eu amei muito tudooo!!"
}


//-- Como Fazer Aplicação Animada com HTML, Javascript e CSS [Passo a Passo]
//-- Crazy Scroll Animation Using CSS Only


// ------ Criação dos componentes de Produto
const carrossel_produto = document.querySelector("#carrossel_produtos")
for(let i = 0; i < 4; i++){
    const card_produto = document.createElement('div')
    card_produto.className = "card_produto"
    card_produto.innerHTML = `
    <img src = ${card.img} alt = '${card.alt}'>
    <h2>${card.titulo} ${i+1}</h2>
    <p>De R$${card.valor}</p>
    `
    carrossel_produto.append(card_produto)
}

// - Animacao: Destaque -> https://www.youtube.com/shorts/0dXyetSW-Ro

// ---- Criacão dos componentes de Destaque
const carrossel_destaque = document.querySelector("#carrossel_destaque")
for(let i = 0;i < 2; i++){
    const card_destaque = document.createElement('div')
    card_destaque.className  = "card_destaque"
    card_destaque.innerHTML = 
    `
        <img src = ${card.img} alt = '${card.alt}'>
        <h2>${card.titulo} ${i+1}</h2>
        <p>De R$${card.valor}</p>
    `    
    carrossel_destaque.append(card_destaque)
}


// ----- Criacão dos componentes de Comentarios
const carrossel_comentario = document.querySelector("#carrossel_comentarios")
for(let i = 0;i < 3; i++){
    const card_comentario = document.createElement('div')
    card_comentario.className = 'card_comentario'
    card_comentario.innerHTML = `
        <h2>${comentarios.titulo} ${i+1}</h2>
        <p>${comentarios.comentario}</p>
        <h3>${comentarios.usuario}</h3>   
    `
    carrossel_comentario.append(card_comentario)
}

// ----- Animação
//Pegando todos os elementos que eu quero animar
const elementos = document.querySelectorAll('.invisivel');

const observador = new IntersectionObserver((entrada) => {
    entrada.forEach(entrada => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visivel')
        }else{
            entrada.target.classList.remove('visivel')
        }
    })
})

elementos.forEach(e => observador.observe(e));