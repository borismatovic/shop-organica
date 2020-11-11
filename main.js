'user strict'

const cart_items_DOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');
const cart = [];
const cartGrid = document.querySelector('.flex-wrapper');

cart_items_DOM.forEach( element => {
    element.addEventListener('click', (e) => {
        const item = {
            name: e.target.querySelector('p').innerText,
            // image: e.target.querySelector('img').getAttribute('src'),
        }
        
        if(cart.filter(itemCart => itemCart === item.name).length === 0){
            cart.push(item.name);
            e.target.style.backgroundColor = '#e2f4c8';
            cartGrid.insertAdjacentHTML('beforeend', `<div class="flex-wrapper-item">
            <p class="flex-wrapper-text">${item.name}</p>     
        </div>`);
        };
        // console.log(cart);
    })
})