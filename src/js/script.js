import fetchProducts from "./functions/fetchProducts.js";
import {displayItems} from "./functions/displayItems.js";
import  paginate from "./functions/paginate.js";
import { openCart, closeCart, displayCartItems } from "./functions/cart.js";

let items = 250;
let perPage = 12;
let pages = Math.ceil(items/perPage);
let currentPage = 1;
let added = [];
let prods;
let url = `https://voodoo-sandbox.myshopify.com/products.json?limit=${`${perPage * currentPage}`}`;

let pagination = document.querySelector('.products__pagination');
let section = document.querySelector('section');
let cartOpen = document.querySelector('.btn-cart');
let cart = document.querySelector('.drawer');

const init = async () => {
    prods = await fetchProducts(url);
    if (prods) {
        displayItems(prods, currentPage, perPage);
        pagination.innerHTML = paginate(currentPage, pages);
    }
    if(localStorage.length) {
        added = JSON.parse(localStorage.getItem('items'));
        displayCartItems(added);
    }
  };
window.addEventListener('DOMContentLoaded', init);

section.addEventListener('click', function(e){
    if(!e.target.closest('.add-btn')) return;
    let id = e.target.closest('article').dataset.id
    let isNew = added.every(elem=> elem.item.id!==+id);
    if(isNew) {
        let item = prods.products.find(e=> e.id == +id);
        added.push({item, amount:1})
    } 
    localStorage.setItem('items', JSON.stringify(added));
    displayCartItems(added)
});

pagination.addEventListener('click', async function(e){
    if(!e.target.closest('button')) return;
    let btns = Array.from(e.target.closest('.products__pagination').children);
    let btn = e.target.closest('button');
    btns.forEach(elem => elem.classList.remove('text-white', 'bg-[#1E1E1E]'))
    btn.classList.remove('text-[#1E1E1E]');
    btn.closest('button').classList.add('text-white', 'bg-[#1E1E1E]');
    currentPage = +btn.textContent;
    prods = await fetchProducts(`https://voodoo-sandbox.myshopify.com/products.json?limit=${`${perPage * currentPage}`}`);
    displayItems(prods, currentPage, perPage);
    pagination.innerHTML = paginate(currentPage, pages);

    section.scrollIntoView({ behavior: "smooth"});
});

cartOpen.addEventListener('click', openCart);
cart.addEventListener('click', function(e){
    let btn = e.target.closest('button');
    if(!btn) return;
    if(btn.classList.contains('btn-close')) {
        closeCart();
        return;
    }
    let id = btn.closest('.drawer__item').dataset.id;
    if(btn.classList.contains('btn-increase')){
        added.map(elem=> elem.item.id==+id && ++elem.amount)
    };
    if(btn.classList.contains('btn-decrease')){
        added.map(elem=> elem.item.id==+id && --elem.amount);
        added = added.filter(elem=> elem.amount>0);
    };
    if(btn.classList.contains('btn-delete')){
        console.log('asd')
        added = added.filter(elem=> elem.item.id !==+id);
    }
    console.log('jeu')
    localStorage.setItem('items', JSON.stringify(added));
    displayCartItems(added);
    
 });



