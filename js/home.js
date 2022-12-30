// Tipos de produtos 
// 1 = masculino
// 2 = feminino
// 3 = BDSM
// 4 = gel
// 5 = fantasia 
const products = [

    {
        id: 1,
        type: 1,
        name: 'Masturbador Peniano',
        description: 'Masturbador masculino com formato de vagina com vibração',
        price: 59.00,
        lastPrice: 0,
        img: 'maspeniano.png'
    },

    {
        id: 2,
        type: 1,
        name: 'Masturbador de Próstata',
        description: 'Vibrador masculino estimulador e massageador da próstata',
        price: 224.00,
        lastPrice: 0,
        img: 'masprostata.png'
    },

    {
        id: 3,
        type: 1,
        name: 'Anel Peniano',
        description: 'Anel peniano com vibrador e estimulador clitoriano',
        price: 3.00,
        lastPrice: 0,
        img: 'anelpeniano.png'
    },

    {
        id: 4,
        type: 2,
        name: 'Bullet',
        description: 'Mini vibrador multivelocidades',
        price: 5.00,
        lastPrice: 0,
        img: 'bullet.png'
    },

    {
        id: 5,
        type: 2,
        name: 'Vibrador',
        description: 'Vibrador com 10 Velocidades Para Mulheres Estimulador Erótico Carregamento USB',
        price: 190.00,
        lastPrice: 0,
        img: 'vibrador.png'
    },

    {
        id: 6,
        type: 2,
        name: 'Masturbador de Clitóris',
        description: 'Sugador De Clitóris e Mamilos com vibração e Pulsação S-Hande 10 Velocidades',
        price: 175.00,
        lastPrice: 0,
        img: 'clitoris.png'
    },

    {
        id: 7,
        type: 3,
        name: 'Chicote',
        description: 'Chicote 8 tiras 40cm liso Preto',
        price: 25.00,
        lastPrice: 0,
        img: 'chicote.png'
    },

    {
        id: 8,
        type: 3,
        name: 'Velas',
        description: 'Velas de baixa temperatura para BDSM queima até 40 minutos',
        price: 59.00,
        lastPrice: 0,
        img: 'vela.png'
    },

    {
        id: 9,
        type: 3,
        name: 'Mordaça',
        description: 'Mordaça em couro com bola vermelha',
        price: 35.00,
        lastPrice: 0,
        img: 'mordaca.png'
    },

    {
        id: 10,
        type: 4,
        name: 'Gel Anal',
        description: 'Gel lubrificante anal íntimo',
        price: 25.00,
        lastPrice: 0,
        img: 'gelanal.png'
    },

    {
        id: 11,
        type: 4,
        name: 'Gel Vaginal',
        description: 'Gel lubrificante vaginal íntimo',
        price: 83.00,
        lastPrice: 0,
        img: 'gelvaginal.png'
    },

    {
        id: 12,
        type: 4,
        name: 'Gel Masturbatório',
        description: 'Gel lubrificante masturbátorio íntimo',
        price: 36.00,
        lastPrice: 0,
        img: 'gelmas.png'
    },

    
]

// Função para revelar o conteudo ao rolar
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    reveals.forEach((reveal) => {
        var windowHeight = window.innerHeight;
        var elementTop = reveal.getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible){
            reveal.classList.add("active");
        } else {
            reveal.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", reveal);


// Função catalogo de produtos
const menu = document.querySelector('#show123456')

// Botão mostra catalogo
const showAll = document.querySelector('#showAll')
const showMasc = document.querySelector('#showMasc')
const showFemi = document.querySelector('#showFemi')
const showBDSM = document.querySelector('#showBDSM')
const showGel = document.querySelector('#showGel')
const showFantasia = document.querySelector('#showFantasia')

// Items
let items

// Menu limpo
const clearItems = type => {
    items = ''

    if (type === 'normal')
        menu.innerHTML = '';
    else
       console.log("Debom");
}

// Remover as NÃO selecionadas
const removeClasses = () => {
    showAll.classList.remove('activeMenu')
    showMasc.classList.remove('activeMenu')
    showFemi.classList.remove('activeMenu')
    showBDSM.classList.remove('activeMenu')
    showGel.classList.remove('activeMenu')
    showFantasia.classList.remove('activeMenu')
}

// Vereficar se tem item
const checkIfHaveItem = items => {
    if (items === '') {
        menu.innerHTML = '<p class="vazio">Nenhum produto encontrado!</p>';
        console.log("deu certo categoria vazia")
    } else 
      menu.innerHTML = items
    
}


// Adiciona os cards
const addItemToArray = prod => {
    let price = prod.price.toFixed(2).toString().replace('.', ',')

    items +=
        `<div class="card">
            <div>
                <div class="cardImg">
                    <img src="./img/${prod.img}" alt="Imagem de um(a) ${prod.name}">
                </div>
                <h4>${prod.name}</h4>
                <p>${prod.description}</p>
            </div>
            <div>
                <p class="price">R$ <span class="valor">${price}</span></p>
                <button class="btn" onclick="addToCart(${prod.id})">
                    <span class="add"> <ion-icon name="add"></ion-icon> </span> Adicionar
                </button>
            </div>
        </div>`
}

// Mostrar Produtos
const showProducts = type => {
    clearItems('normal')

    if (type === 0) {
        products.forEach(prod => {
            if (prod.lastPrice === 0)
                addItemToArray(prod)
        })
    } else {
        products.forEach(prod => {
            if (prod.type === type && prod.lastPrice === 0)
                addItemToArray(prod)
        })
    }

    checkIfHaveItem(items)
    removeClasses()

    if (type === 0)
       showAll.classList.add('active')
    else if (type === 1)
       showMasc.classList.add('active')
    else if (type === 2)
       showFemi.classList.add('active')
    else if (type === 3)
      showBDSM.classList.add('active')
    else if (type === 4)
      showGel.classList.add('active')
    else if (type === 5)
      showFantasia.classList.add('active')

}

// Pegar clique do botão do menu
showAll.addEventListener('click', function () { showProducts(0)})
showMasc.addEventListener('click', function () {showProducts(1)})
showFemi.addEventListener('click', function () {showProducts(2)})
showBDSM.addEventListener('click', function () {showProducts(3)})
showGel.addEventListener('click', function () {showProducts(4)})
showFantasia.addEventListener('click', function () {showProducts(5)})

showProducts(0)