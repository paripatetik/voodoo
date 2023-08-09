
 function displayItems(prods, currentPage, perPage){
    let section = document.querySelector('.products');
    let currentItems = prods.products.filter((elem, i)=> i>=perPage*(currentPage-1));

    section.innerHTML = currentItems.map(elem=>{
        let img;
        console.log(elem.images)
        if(elem.images.length) img = elem.images[0].src;
        else img = 'https://s3-symbol-logo.tradingview.com/shopify--600.png';
        
        return `<article class="product-container text-sm w-full flex flex-col gap-3" data-id=${elem.id}>
                    <div class="product-container p-3 h-[19rem] w-full rounded border-2 border-black">
                        <p class="bg-black w-fit rounded p-2 text-white absolute">USED</p>
                        
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
