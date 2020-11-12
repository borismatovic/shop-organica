'user strict'

const cart_items_DOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');
const cart = [];
const cartGrid = document.querySelector('.flex-wrapper');

cart_items_DOM.forEach( element => {
    element.addEventListener('click', (e) => {
        const item = {
            name: e.target.querySelector('p').innerText,
            quantity: 1,
            // image: e.target.querySelector('img').getAttribute('src'),
        }
        
        if(cart.filter(itemCart => itemCart === item.name).length === 0){
            cart.push(item.name);
            e.target.style.backgroundColor = '#e2f4c8';
            cartGrid.insertAdjacentHTML('beforeend', 
            `<div class="flex-wrapper-item">
                <p class="flex-wrapper-text">${item.name}</p>
                <div class="item-count">
                    <div class="minus" data-action="DECREASE">
                        <p>&minus;</p>
                    </div>
                    <p class="flex-wrapper-count">${item.quantity}</p>
                    <div class="plus" data-action="INCREASE">
                        <p>&plus;</p>
                    </div>
                    <div class="remove" data-action="REMOVE">
                        <p>&times;</p>
                    </div>
                </div>      
            </div>`);

            const cartItemDOM = cartGrid.querySelectorAll('.flex-wrapper-item');
            const counterDOM = cartGrid.querySelectorAll('.flex-wrapper-count');
            const increaseDOM = cartGrid.querySelectorAll('[data-action="INCREASE"]');
            const decreaseDOM = cartGrid.querySelectorAll('[data-action="DECREASE"]');
            const removeDOM = cartGrid.querySelectorAll('[data-action="REMOVE"]');

             cartItemDOM.forEach( element => {
                 if(element.querySelector('p').innerText === item.name){
                    element.querySelector('[data-action="INCREASE"]').addEventListener('click', () => {
                        element.querySelector('.flex-wrapper-count').innerText = ++item.quantity
                    })
                 }
             })

             cartItemDOM.forEach( element => {
                if(element.querySelector('p').innerText === item.name){
                   element.querySelector('[data-action="DECREASE"]').addEventListener('click', () => {
                       if(element.querySelector('.flex-wrapper-count').innerText > 1)
                        element.querySelector('.flex-wrapper-count').innerText = --item.quantity
                   })
                }
            })

            function removeItem(arr, value) {
                let idx = arr.indexOf(value);
                if (idx > -1) {
                  arr.splice(idx, 1);
                }
                return arr;
              }

            cartItemDOM.forEach( element => {
                if(element.querySelector('p').innerText === item.name){
                   element.querySelector('[data-action="REMOVE"]').addEventListener('click', () => {
                       element.remove()
                       e.target.style.backgroundColor = '#ddd';
                       removeItem(cart, item.name)
                    console.log(cart);
                   })
                }
            })
            
        }
    })
})