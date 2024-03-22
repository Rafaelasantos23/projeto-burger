const list = document.querySelector('ul')
const btshowAll = document.querySelector('.show-all')
const btmapAll = document.querySelector('.map-all')
const btsumAll = document.querySelector('.sum-all')
const btfilterAll = document.querySelector('.filter-all')

function formatCurrency(value){
    const newValue = value.toLocaleString('pt-br',{
        style: 'currency', 
        currency: 'BRL'});
        return newValue
}


function showAll(productArray) {
    let mylist = ''

    productArray.forEach(product => {
        mylist += `
                <li>
                    <img src="${product.src}">
                    <p> ${product.name} </p>
                    <p class="item-price"> R$: ${formatCurrency(product.price)} </p>
                </li>
                `
    });

    list.innerHTML = mylist

}


function mapAll() {
    const Newprice = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))
    showAll(Newprice)
}

function sumAll() {
    const valuetotal = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
    <li>
        <p> O valor total dos itens é de R$: ${ formatCurrency (valuetotal)}</p>
    </li>
 `
}

function filterAll(){
    const fill = menuOptions.filter(option => {
        if( option.vegan === true )return true
        else return false
    })
  
    showAll(fill)
}


btmapAll.addEventListener('click', mapAll)
btshowAll.addEventListener('click', () => showAll(menuOptions))
btsumAll.addEventListener('click', sumAll)
btfilterAll.addEventListener('click',filterAll)







