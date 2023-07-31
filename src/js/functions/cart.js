let cart = document.querySelector('.drawer');

function openCart(){
    cart.classList.remove('right-[-100%]');
    cart.classList.add('right-0');
    document.querySelector('body').classList.add('overflow-hidden');
}
function closeCart(){
    cart.classList.add('right-[-100%]');
    cart.classList.remove('right-0');
    document.querySelector('body').classList.remove('overflow-hidden');
}

 function displayCartItems(added){
    cart.querySelector('.drawer__items').innerHTML = added.map(elem=>{
        return `<div class='drawer__item flex gap-[18px]' data-id=${elem.item.id}>
              <div class='drawer__img w-[74px] h-[74px] rounded border border-grey'></div>
              <div class='drawer__info flex-1 flex flex-col gap-[12px]'> 
                <p>Product Name</p>
                <p>${elem.item.variants[0].price} KR.</p>
                <p><button class='btn-decrease'>-</button> <span>${elem.amount}</span> <button class='btn-increase'>+</button></p>
              </div>
              <button class="btn-delete">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g clip-path="url(#a)"><path fill="#FCF7E6" d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5ZM6 6v14h12V6H6Zm3 3h2v8H9V9Zm4 0h2v8h-2V9Z"/></g><defs><clipPath id="a">
                    <path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
                </svg>
              </button>
              </div>`
    }).join('');
    let total = 0;
    added.map(elem=> {
        total+= elem.amount * elem.item.variants[0].price;
    })
    cart.querySelector('.drawer__price').innerHTML = `${total.toFixed(2)} KR.`;
}; 
export {openCart, closeCart, displayCartItems};