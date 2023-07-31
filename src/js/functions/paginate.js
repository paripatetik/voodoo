
export default function paginate(currentPage, pages){
    return [...Array(pages)].map((e,i) => {
        let num = i+ 1;
        if(num == 1 || num==currentPage+2 || num==currentPage-2 || num==currentPage-1 || num==currentPage || num==currentPage+1 || num==pages) return `<button class="border border-[#1E1E1E] text-[#1E1E1E] hover:bg-[#1E1E1E] w-[40px] h-[40px] rounded-full hover:text-white">${num}</button>`;
    }).join('');
}