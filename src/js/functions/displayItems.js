
 function displayItems(prods, currentPage, perPage){
    let section = document.querySelector('.products');
    let currentItems = prods.products.filter((elem, i)=> i>=perPage*(currentPage-1));

    section.innerHTML = currentItems.map(elem=>{
        let img;
        if(elem.images.length) img = elem.images[0].src;
        else img = 'https://s3-symbol-logo.tradingview.com/shopify--600.png';
        
        return `<article class="product-container text-sm w-full flex flex-col gap-3" data-id=${elem.id}>
                    <div class="product-container h-[19rem] w-full rounded border-2 border-black relative">
                        <p class="bg-black w-fit p-2 rounded text-white absolute top-[13px] left-[13px] z-100">USED</p>
                        <img class='object-cover w-full h-full' src=${img} alt='product'>
                    </div>
                    <div class="product-info flex justify-between">
                       <div class="font-bold flex flex-col">
                            <span>Product Name</span>
                            <span>KR. ${elem.variants[0].price}</span>
                       </div>
                       <div class="flex flex-col text-end">
                            <span class="font-medium">Condition</span>
                            <span>Slightly used</span>
                        </div>
                    </div>
                    <button class='add-btn p-4 w-full block uppercase font-bold bg-black border-2 border-black rounded text-white hover:transition-all hover:text-black hover:bg-white hover:border-2'>Add product</button>
                </article>`;
    }).join('');
}

export {displayItems}; 
